import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // Get API key

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
          max_tokens: 50, // Prevent excessive response length
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Log API response for debugging

      if (data.error) {
        console.error("OpenAI Error:", data.error);
        setMessages([...newMessages, { text: "Error: " + data.error.message, sender: "bot" }]);
        return;
      }

      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages([...newMessages, { text: reply, sender: "bot" }]);

    } catch (error) {
      console.error("Fetch Error:", error);
      setMessages([...newMessages, { text: "Error connecting to AI.", sender: "bot" }]);
    }

    setInput("");
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
