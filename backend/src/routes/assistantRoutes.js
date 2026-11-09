const express = require("express");

const productCatalog = require("../data/productCatalog");
const productKnowledge = require("../data/productKnowledge");

const router = express.Router();

const DEFAULT_MODEL = "gemini-3.5-flash-lite";
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1400;

const assistantInstructions = `
You are the Accurate Thermal Systems product assistant. Answer questions about ATS products, applications, models and next steps.

Rules:
- Use only the product context below and the user's current page path.
- Never invent prices, lead times, availability, certifications, dimensions, temperatures, airflow, performance numbers or other specifications that are not in the context.
- If the context is not enough, say that clearly and recommend contacting ATS through /form. Do not guess.
- Be concise, practical and friendly. Ask one focused follow-up question when it would help choose a model.
- When comparing products, explain the use case difference and link to the relevant product page when helpful.
- You can recommend /form for a quote, engineering help, custom sizing or confirmation of specifications.

ATS product context:
${productCatalog
  .map(
    (product) => `
${product.name} (${product.aliases.join(", ")})
Page: ${product.url}
Summary: ${product.summary}
Models: ${product.models}
Best for: ${product.bestFor}
Notes: ${product.notes}`
  )
  .join("\n")}

Detailed model knowledge from the ATS product pages:
${productKnowledge
  .map((product) => `${product.name}\nSource: ${product.url}\n${product.facts}`)
  .join("\n\n")}
`;

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter(
      (message) =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
    )
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content.length > 0);
}

function writeEvent(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function parseSseEvent(rawEvent) {
  const data = rawEvent
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trim())
    .join("\n");

  if (!data || data === "[DONE]") return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

router.post("/", async (req, res, next) => {
  try {
    const messages = normalizeMessages(req.body?.messages);
    const currentPath =
      typeof req.body?.currentPath === "string"
        ? req.body.currentPath.slice(0, 200)
        : "/";

    if (!messages.some((message) => message.role === "user")) {
      return res.status(400).json({
        success: false,
        message: "Please ask a product question.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        success: false,
        message: "The product assistant is not configured yet.",
      });
    }

    const conversation = messages
      .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${message.content}`)
      .join("\n\n");

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/interactions?alt=sse",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": process.env.GEMINI_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.GEMINI_MODEL || DEFAULT_MODEL,
          system_instruction: `${assistantInstructions}\nCurrent page path: ${currentPath}`,
          input: conversation,
          store: false,
          stream: true,
          generation_config: {
            thinking_level: process.env.GEMINI_THINKING_LEVEL || "low",
          },
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      console.error("Gemini assistant request failed:", data.error?.message || response.statusText);
      return res.status(502).json({
        success: false,
        message: "The assistant could not answer right now. Please try again or contact ATS.",
      });
    }

    if (!response.body) {
      return res.status(502).json({
        success: false,
        message: "The assistant did not return a stream. Please try again.",
      });
    }

    res.status(200);
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders?.();

    const decoder = new TextDecoder();
    let buffer = "";

    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });
      const events = buffer.split(/\r?\n\r?\n/);
      buffer = events.pop() || "";

      for (const rawEvent of events) {
        const event = parseSseEvent(rawEvent);
        const text = event?.delta?.type === "text" ? event.delta.text : "";
        if (text) writeEvent(res, { type: "text", text });
      }
    }

    if (buffer.trim()) {
      const event = parseSseEvent(buffer);
      const text = event?.delta?.type === "text" ? event.delta.text : "";
      if (text) writeEvent(res, { type: "text", text });
    }

    writeEvent(res, { type: "done" });
    return res.end();
  } catch (error) {
    if (res.headersSent) {
      writeEvent(res, {
        type: "error",
        message: "The assistant stopped before finishing. Please try again.",
      });
      return res.end();
    }
    return next(error);
  }
});

module.exports = router;
