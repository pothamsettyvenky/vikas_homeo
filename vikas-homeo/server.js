const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());




/* =====================
   GEMINI CONFIG
===================== */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

console.log("Gemini key loaded:", GEMINI_API_KEY ? "YES" : "NO");

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

/* =====================
   SESSION STORAGE
===================== */

const sessions = {};

/* =====================
   GREETING
===================== */

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

function isGreeting(text) {
  const msg = text.toLowerCase().trim();

  return ["hi", "hello", "hey"].includes(msg);
}

/* =====================
   BUILD GEMINI MESSAGES
===================== */

function buildGeminiMessages(chatHistory) {

  const instruction = {
    role: "user",
    parts: [
      {
        text: `
You are the official assistant for Dr Vikas Homeopathy and Naturopathy Clinic.

PERSONALITY
• Friendly
• Human-like
• Professional clinic assistant

RULES
• ONLY talk about Homeopathy and Naturopathy.
• Ask ONE question at a time.
• Guide conversation naturally.

Collect:
• condition
• location
• duration
• severity
• symptoms

Then provide summary and natural suggestions.
`
      }
    ]
  };

  const history = chatHistory.map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  return [instruction, ...history];
}

/* =====================
   CHAT ENDPOINT
===================== */

app.post("/api/chat", async (req, res) => {

  try {

    const { message, sessionId } = req.body;

    console.log("Incoming message:", message);

    if (!message || !sessionId) {

      return res.json({
        reply: "Please refresh the page and try again."
      });

    }

    if (isGreeting(message)) {

      return res.json({
        reply: `${getGreeting()} Welcome to Dr Vikas Homeopathy and Naturopathy Clinic. Please tell me your health concern.`
      });

    }

    if (!sessions[sessionId]) {

      sessions[sessionId] = [];

    }

    const chatHistory = sessions[sessionId];

    chatHistory.push({
      role: "user",
      text: message
    });

    const geminiMessages = buildGeminiMessages(chatHistory);

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: geminiMessages
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    chatHistory.push({
      role: "model",
      text: reply
    });

    res.json({ reply });

  } catch (error) {

    console.error("Gemini Error:", error.response?.data || error.message);

    res.json({
      reply: "Unable to respond right now."
    });

  }

});

/* =====================
   SERVER START
===================== */

app.listen(3001, () => {
  console.log("Server running on port 3001");
});