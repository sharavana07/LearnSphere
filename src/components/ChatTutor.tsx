"use client";

import { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatTutor() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hi! I’m your AI tutor. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate AI response after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `You asked: "${input}". Here's a helpful answer!`,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col h-[500px]">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-indigo-600 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="bg-gray-200 text-gray-500 p-2 rounded-lg inline-block">
            AI is typing...
          </div>
        )}
      </div>

      {/* Input box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
