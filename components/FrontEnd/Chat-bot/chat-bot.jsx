"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi there! 👋 I'm Alberow's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: input }]);
    const userMessage = input;
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in a real app, you'd call an API here)
    setTimeout(() => {
      let response;
      if (userMessage.toLowerCase().includes("pricing") || userMessage.toLowerCase().includes("cost")) {
        response = "Our pricing starts at $999 for basic websites. For a detailed quote tailored to your specific needs, please contact our sales team at sales@alberow.com.";
      } else if (userMessage.toLowerCase().includes("contact") || userMessage.toLowerCase().includes("email") || userMessage.toLowerCase().includes("phone")) {
        response = "You can reach us at info@alberow.com or call us at +1 (555) 123-4567. Our office hours are Monday to Friday, 9 AM to 6 PM EST.";
      } else if (userMessage.toLowerCase().includes("service") || userMessage.toLowerCase().includes("offer")) {
        response = "We offer web development, UI/UX design, digital marketing, SEO optimization, content strategy, and e-commerce solutions. Would you like to know more about any specific service?";
      } else {
        response = "Thanks for your message! One of our team members will get back to you soon. Is there anything else I can help you with?";
      }
      
      setMessages(prev => [...prev, { role: "bot", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-lg w-14 h-14 p-0",
          "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-xl",
          "bg-background border border-border/50 overflow-hidden transition-all duration-300 ease-in-out",
          "flex flex-col",
          isOpen ? "h-[500px] opacity-100" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-border/50 bg-muted/50 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Alberow Assistant</h3>
              <p className="text-xs text-muted-foreground">We typically reply in a few minutes</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-muted rounded-tl-none"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="border-t border-border/50 p-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
