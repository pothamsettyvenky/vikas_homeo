import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { FaComments, FaTimes } from "react-icons/fa";

export default function Chatbot() {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! Welcome to Dr Vikas Homeopathy and Naturopathy Clinic."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const chatBodyRef = useRef(null);


  // create session
  useEffect(() => {

    let id = localStorage.getItem("chatSessionId");

    if (!id) {

      id = crypto.randomUUID();
      localStorage.setItem("chatSessionId", id);

    }

    setSessionId(id);

  }, []);


  // auto scroll
  useEffect(() => {

    if (chatBodyRef.current) {

      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;

    }

  }, [messages, loading]);


  async function sendMessage() {

  if (!input.trim()) return;

  const userText = input;

  setMessages(prev => [
    ...prev,
    { role: "user", text: userText }
  ]);

  setInput("");
  setLoading(true);

  try {

    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/api/chat"
        : "/api/chat";

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userText,
        sessionId
      })
    });

    // check response status
    if (!res.ok) {
      throw new Error("API request failed");
    }

    const data = await res.json();

    setMessages(prev => [
      ...prev,
      {
        role: "bot",
        text: data.reply || "I couldn't generate a response."
      }
    ]);

  } catch (error) {

    console.error("Chatbot API error:", error);

    setMessages(prev => [
      ...prev,
      {
        role: "bot",
        text: "Unable to respond right now."
      }
    ]);

  }

  setLoading(false);

}


  return (

    <>

      <div
        className="chatbot-float"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </div>


      {isOpen && (

        <div className="chatbot-window">

          <div className="chatbot-header">
            Dr Vikas Clinic Assistant
          </div>


          <div
            className="chatbot-body"
            ref={chatBodyRef}
          >

            {messages.map((msg, i) => (

              <div
                key={i}
                className={`chatbot-message ${msg.role}`}
              >
                {msg.text}
              </div>

            ))}

            {loading && (
              <div className="chatbot-message bot">
                Typing...
              </div>
            )}

          </div>


          <div className="chatbot-input">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask your health question..."
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>

      )}

    </>

  );

}