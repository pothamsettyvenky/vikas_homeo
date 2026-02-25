import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";


// session storage
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


// build Gemini conversation
function buildMessages(history) {

  const instruction = {

    role: "user",

    parts: [{
      text: `
You are the assistant of Dr Vikas Homeopathy and Naturopathy Clinic.

Rules:

• Be friendly and human-like
• Ask ONE question at a time
• Collect patient info gradually
• Focus only on Homeopathy and Naturopathy
• Give summary and natural treatment suggestions
• Act like clinic receptionist

End responses politely.
`
    }]

  };

  return [
    instruction,
    ...history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }))
  ];

}


// Vercel serverless handler
export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      reply: "Method not allowed"
    });

  }

  try {

    const { message, sessionId } = req.body;

    if (!message || !sessionId) {

      return res.json({
        reply: "Invalid request"
      });

    }


    // handle greeting locally
    if (isGreeting(message)) {

      return res.json({

        reply:
          `${getGreeting()} Welcome to Dr Vikas Homeopathy and Naturopathy Clinic. Please tell me your health concern.`

      });

    }


    // create session
    if (!sessions[sessionId]) {

      sessions[sessionId] = [];

    }

    const history = sessions[sessionId];


    history.push({
      role: "user",
      text: message
    });


    // call Gemini
    const geminiMessages =
      buildMessages(history);


    const response =
      await axios.post(

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
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Unable to respond";


    history.push({
      role: "model",
      text: reply
    });


    res.json({ reply });

  }
  catch (error) {

    console.error(error.response?.data || error.message);

    res.json({
      reply: "Error contacting assistant"
    });

  }

}