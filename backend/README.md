# Backend API

Express API for Accurate Thermal Systems.

## Product assistant

Copy `.env.example` to `.env`, then set `GEMINI_API_KEY` on the server. The key stays server-side; the static frontend calls `POST /api/assistant` through this backend. `GEMINI_MODEL` can be changed to any Gemini model enabled for the account. `GEMINI_THINKING_LEVEL=low` keeps short product questions responsive; raise it if you prefer deeper reasoning over speed.

Start the API with:

```bash
npm install
npm run dev
```
