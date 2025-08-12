"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, BookOpen, Sparkles } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
  type?: "welcome" | "lesson" | "quiz" | "explanation";
}

interface ApiResponse {
  id: string;
  text: string;
  type?: "welcome" | "lesson" | "quiz" | "explanation";
  followUp?: string;
}

// Dummy JSON data for API integration, typed with ApiResponse[]
const dummyApiResponses: Record<string, ApiResponse[]> = {
  math: [
    {
      id: "math_1",
      text: "Great question about algebra! Let me break this down step by step. First, we need to isolate the variable by moving all terms with x to one side...",
      type: "explanation",
      followUp: "Would you like me to show you a similar practice problem?"
    },
    {
      id: "math_2",
      text: "For quadratic equations, remember the formula: x = (-b ± √(b²-4ac)) / 2a. Let's apply this to your problem...",
      type: "lesson"
    }
  ],
  science: [
    {
      id: "sci_1",
      text: "Photosynthesis is fascinating! It's how plants convert sunlight into energy. The process happens in chloroplasts and involves two main stages: light reactions and the Calvin cycle.",
      type: "explanation",
      followUp: "Want to explore how this connects to the carbon cycle?"
    }
  ],
  general: [
    {
      id: "gen_1",
      text: "That's an interesting question! I can help you understand this concept better. Let me provide a clear explanation with examples.",
      type: "explanation"
    },
    {
      id: "gen_2",
      text: "I love your curiosity! This topic connects to several other concepts we could explore together.",
      type: "lesson"
    }
  ]
};

const subjects = ["Math", "Science", "History", "Literature", "Programming"];

export default function ChatTutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I'm your AI tutor 🎓 I'm here to help you learn and explore any topic. What would you like to study today?",
      timestamp: new Date(),
      type: "welcome"
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getRandomResponse = (input: string): ApiResponse => {
    const lowerInput = input.toLowerCase();
    let responses = dummyApiResponses.general;

    if (lowerInput.includes("math") || lowerInput.includes("algebra") || lowerInput.includes("equation")) {
      responses = dummyApiResponses.math;
    } else if (
      lowerInput.includes("science") ||
      lowerInput.includes("biology") ||
      lowerInput.includes("chemistry")
    ) {
      responses = dummyApiResponses.science;
    }

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate API call with realistic delay
    setTimeout(() => {
      const response = getRandomResponse(currentInput);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        timestamp: new Date(),
        type: response.type
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);

      // Optional follow-up
      if (response.followUp && Math.random() > 0.5) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: (Date.now() + 2).toString(),
            sender: "ai",
            text: response.followUp!,
            timestamp: new Date(),
            type: "quiz"
          };
          setMessages((prev) => [...prev, followUpMessage]);
        }, 1500);
      }
    }, Math.random() * 1000 + 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectSubject = (subject: string) => {
    setSelectedSubject(subject);
    const subjectMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: `I'd like to learn about ${subject}`,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, subjectMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: `Excellent choice! ${subject} is a fascinating subject. What specific topic in ${subject} would you like to explore? I can help with concepts, problem-solving, or just general understanding.`,
        timestamp: new Date(),
        type: "lesson"
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tutor Assistant
              </h1>
              <p className="text-gray-600">Your personalized learning companion</p>
            </div>
          </div>

          {/* Subject Selection */}
          {!selectedSubject && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Quick topics:</span>
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => selectSubject(subject)}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Chat Container */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                } animate-in slide-in-from-bottom-2 duration-300`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-gradient-to-r from-green-400 to-blue-500"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-4 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    } shadow-sm`}
                  >
                    {msg.type && msg.sender === "ai" && (
                      <div
                        className={`flex items-center gap-1 mb-2 text-xs opacity-75 ${
                          msg.sender === "ai" ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        {msg.type.charAt(0).toUpperCase() + msg.type.slice(1)}
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <div
                      className={`text-xs mt-2 opacity-70 ${
                        msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
{/* Input Area */}
<div className="border-t border-gray-200 p-6 bg-white/50">
  <div className="flex gap-3 items-end">
    <div className="flex-1">
      <textarea
        ref={inputRef} // make sure inputRef is useRef<HTMLTextAreaElement>(null) in your component
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress} // changed to onKeyDown for better key handling
        placeholder="Ask me anything... I'm here to help you learn!"
        className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm max-h-32"
        rows={1}
        style={{
          minHeight: "48px",
          height: Math.min(input.split("\n").length * 24 + 24, 128) + "px"
        }}
      />
    </div>
    <button
      onClick={handleSend}
      disabled={!input.trim() || isTyping}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
      aria-label="Send message"
      type="button"
    >
      <Send className="w-5 h-5" />
    </button>
  </div>
  <div className="text-xs text-gray-500 mt-2 text-center">
    Press Enter to send • Shift + Enter for new line
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
