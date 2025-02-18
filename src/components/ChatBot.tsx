import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const API_KEY = "AIzaSyA4orZAiyXf-bMV5cNL03qz3ZzL0n2h5H8";

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Astrid, an AI expert in tattoos, skin pigmentation, and piercings. You work for Dill Tattoo Studio. 
                     Answer the following question professionally and accurately: ${userMessage}`
            }]
          }]
        })
      });

      const data = await response.json();
      const assistantResponse = data.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Desculpe, estou tendo dificuldades técnicas no momento. Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp.' 
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-gold text-black p-3 rounded-full shadow-lg hover:bg-gold/90 transition-colors"
        aria-label="Abrir chat com Astrid"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed right-6 z-40 w-96 bg-black border border-gold rounded-lg shadow-xl transition-all duration-300 ${
      isMinimized ? 'h-14' : 'h-[600px]'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gold">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-6 w-6 text-gold" />
          <h3 className="text-lg font-bebas text-gold">Astrid - Especialista em Tatuagem</h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-gold"
          >
            <MinusCircle className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="h-[calc(100%-120px)] overflow-y-auto p-4 space-y-4">
            <div className="bg-dark-gray rounded-lg p-4">
              <p className="text-gold">Olá! Eu sou Astrid, especialista em tatuagens e piercings do Dill Studio. Como posso ajudar você hoje?</p>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user'
                    ? 'bg-gold/10 ml-auto'
                    : 'bg-dark-gray'
                } rounded-lg p-4 max-w-[80%]`}
              >
                <p className={message.role === 'user' ? 'text-white' : 'text-gold'}>
                  {message.content}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-dark-gray rounded-lg p-4">
                <p className="text-gold">Digitando...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="absolute bottom-0 w-full p-4 border-t border-gold bg-black">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-dark-gray text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;