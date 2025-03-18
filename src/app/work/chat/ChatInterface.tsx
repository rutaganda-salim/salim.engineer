'use client';

import React, { useState } from 'react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hi there! I\'m an AI assistant that can answer questions about these projects. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I'm a simulated AI assistant created by Zaid Mukaddam. This is just a demo, so I don't have actual AI capabilities.",
        "The RGB Knob project is an interactive color mixer that lets you experiment with RGB values in real-time.",
        "This project was built using React and Next.js with a focus on smooth animations and interactions.",
        "Zaid is passionate about user interfaces and generative AI.",
        "The website uses a custom monospace font and a minimalist design approach.",
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = { role: 'ai', content: randomResponse };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      <div className="border border-neutral-800 rounded-md p-4 h-[300px] overflow-y-auto flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div key={i} className={`${msg.role === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
            <div className={`py-2 px-3 rounded-md ${msg.role === 'user' ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-900 text-neutral-300'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mr-auto max-w-[80%]">
            <div className="py-2 px-3 rounded-md bg-neutral-900 text-neutral-300">
              <div className="flex gap-1">
                <span className="animate-bounce delay-0">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-700"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md disabled:opacity-50 hover:bg-neutral-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
