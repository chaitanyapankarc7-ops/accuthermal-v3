const { z } = require("zod");

const contactSchema = z.object({
  department: z.enum(["sales", "technical-support"]),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(20),
  company: z.string().trim().min(1).max(150),
});

async function createContactEnquiry(req, res) {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Please check the information you entered.",
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const enquiry = result.data;

  // Temporary: database storage will be added later.
  console.log("Contact enquiry received:", {
    ...enquiry,
    email: "[REDACTED]",
    phone: "[REDACTED]",
  });

  return res.status(202).json({
    success: true,
    message: "Your enquiry was received by the backend.",
    stored: false,
  });
}

module.exports = {
  createContactEnquiry,
};