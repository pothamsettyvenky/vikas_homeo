const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";

// store conversation per session
const sessions = {};

// greeting function
function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

// greeting detection
function isGreeting(text) {
  const msg = text.toLowerCase().trim();

  return ["hi", "hello", "hey"].includes(msg);
}

// build Gemini messages
function buildGeminiMessages(chatHistory) {
  const instruction = {
    role: "user",

    parts: [
      {
        text: `
You are the official assistant for Dr Vikas Homeopathy and Naturopathy Clinic.

PERSONALITY:

• Friendly and human-like
• Professional clinic receptionist
• Caring and conversational

CRITICAL RULES:

• ONLY discuss Homeopathy and Naturopathy health topics.
• Ask ONLY ONE question at a time.
• Do NOT ask multiple questions at once.
• Guide conversation naturally like a real clinic assistant.
• Collect patient details step-by-step.

GOAL:

Ask questions gradually to understand:

• condition
• location
• duration
• severity
• symptoms

Once enough info is collected, provide:

• summary
• homeopathy approach
• natural treatment suggestions

Always end with:
"Feel free to ask any other questions related to Homeopathy and Naturopathy."

Do not ask unrelated questions.
`,
      },
    ],
  };

  return [
    instruction,
    ...chatHistory.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
  ];
}

// main chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
      return res.json({
        reply: "Please refresh page and try again.",
      });
    }

    // greeting handled locally
    if (isGreeting(message)) {
      return res.json({
        reply: `${getGreeting()} Welcome to Dr Vikas Homeopathy and Naturopathy Clinic. Please tell me your health concern.`,
      });
    }

    // create session
    if (!sessions[sessionId]) {
      sessions[sessionId] = [];
    }

    const chatHistory = sessions[sessionId];

    // add user message
    chatHistory.push({
      role: "user",

      text: message,
    });

    const geminiMessages = buildGeminiMessages(chatHistory);

    // call Gemini
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,

      {
        contents: geminiMessages,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    // save reply
    chatHistory.push({
      role: "model",

      text: reply,
    });

    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.json({
      reply: "Unable to respond right now.",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
