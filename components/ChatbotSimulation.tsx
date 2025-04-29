'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type QuickReply = {
  id: string;
  text: string;
  response: string;
};

const ChatbotSimulation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Quick reply options
  const quickReplies: QuickReply[] = [
    { id: '1', text: 'Asset Management Services', response: 'Our asset management services include portfolio management, investment advisory, and financial planning. We create personalized investment strategies based on your goals and risk tolerance.' },
    { id: '2', text: 'Contact Information', response: 'You can reach us at info@tareno.lu or call +352 123 456 789. Our office is located at 123 Financial District, Luxembourg City, L-1234, Luxembourg.' },
    { id: '3', text: 'Investment Approach', response: 'Our investment approach is based on thorough research, diversification, and long-term thinking. We focus on sustainable investments that deliver consistent returns while managing risk.' },
    { id: '4', text: 'Book a Consultation', response: 'I would be happy to help you schedule a consultation with one of our advisors. Please provide your name, email, and preferred date/time, and we will get back to you shortly.' },
  ];

  // Initial bot message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: 'Hello! Welcome to Tareno S.A. How can I assist you today?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: QuickReply) => {
    // Add user message (the quick reply text)
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: reply.response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! How can I help you today?';
    } else if (lowerMessage.includes('asset') || lowerMessage.includes('management') || lowerMessage.includes('invest')) {
      return 'At Tareno, we offer comprehensive asset management services tailored to your financial goals. Would you like to learn more about our investment approach?';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return 'You can reach us at info@tareno.lu or call +352 123 456 789. Our office is located at 123 Financial District, Luxembourg City.';
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return 'Our fee structure depends on the services you require and the size of your portfolio. We would be happy to discuss this in a personal consultation.';
    } else if (lowerMessage.includes('appointment') || lowerMessage.includes('meeting') || lowerMessage.includes('consultation')) {
      return 'I would be happy to help you schedule a consultation with one of our advisors. Please provide your name, email, and preferred date/time, and we will get back to you shortly.';
    } else {
      return 'Thank you for your message. For more specific information, please contact our team directly at info@tareno.lu or use the contact form on our website.';
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center",
          "bg-[#0a2e74] text-white shadow-lg hover:bg-[#0a2e74]/90 transition-all",
          "focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/50"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      <div 
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[350px] max-w-[90vw] h-[450px] max-h-[80vh]",
          "bg-white rounded-lg shadow-xl flex flex-col overflow-hidden",
          "transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="bg-[#0a2e74] text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Tareno Assistant</h3>
              <p className="text-xs text-white/80">Online | Typically replies in a few minutes</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
            aria-label="Close chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                "mb-4 max-w-[80%] animate-fade-in",
                message.sender === 'user' ? "ml-auto" : "mr-auto"
              )}
            >
              <div 
                className={cn(
                  "p-3 rounded-lg",
                  message.sender === 'user' 
                    ? "bg-[#0a2e74] text-white rounded-br-none" 
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none"
                )}
              >
                {message.text}
              </div>
              <div 
                className={cn(
                  "text-xs mt-1",
                  message.sender === 'user' ? "text-right text-gray-500" : "text-gray-500"
                )}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-4 max-w-[80%] mr-auto">
              <div className="bg-white p-3 rounded-lg shadow-sm rounded-bl-none inline-flex">
                <span className="typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {messages.length > 0 && messages.length < 3 && (
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100 transition-colors"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
          />
          <button
            type="submit"
            className={cn(
              "ml-2 w-10 h-10 rounded-full flex items-center justify-center",
              "bg-[#0a2e74] text-white",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "hover:bg-[#0a2e74]/90 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/50"
            )}
            disabled={inputValue.trim() === ''}
            aria-label="Send message"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>

      {/* CSS for typing indicator */}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .dot {
          width: 6px;
          height: 6px;
          margin: 0 1px;
          background-color: #aaa;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotSimulation;
