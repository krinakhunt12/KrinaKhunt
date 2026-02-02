
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi there! I'm Krina's official AI agent. How can I assist you with her portfolio or freelance inquiries today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-semibold text-[var(--accent-1)]">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.startsWith('###')) {
        return (
          <div key={i} className="mt-4 mb-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-1)] border-b border-white/10 pb-1">
            {renderedLine.join('').replace(/^###\s*/, '')}
          </div>
        );
      }

      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        return (
          <div key={i} className="flex gap-2 ml-1 my-1.5 items-start">
            <span className="text-[var(--accent-1)] mt-1.5 w-1 h-1 rounded-full bg-[var(--accent-1)] flex-shrink-0"></span>
            <span className="leading-relaxed">{renderedLine}</span>
          </div>
        );
      }

      return <div key={i} className="min-h-[1.2em] leading-relaxed mb-1">{renderedLine}</div>;
    });
  };

  const handleSend = async (forcedPrompt?: string) => {
    const textToSend = forcedPrompt || input;
    if (!textToSend.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textToSend,
        config: {
          systemInstruction: `You are Krina Khunt's professional AI agent. 
          Krina is a Full Stack Developer at Codesmiths Technologies.
          Skills: React, Next.js, Node.js, TypeScript, MongoDB, Python.
          Freelance Status: AVAILABLE.
          
          Pricing Structure:
          ### **Service Packages**
          * **Landing Pages:** Starting at **$500** (Timeline: 3-5 days)
          * **Full-Stack Web Applications:** Starting at **$2,000** (Timeline: 2-4 weeks)
          * **E-commerce Solutions:** Starting at **$1,500**
          * **Technical Consulting/Hourly:** **$50/hour**
          
          Tone: Professional agent, helpful, formatted with clear structure.
          Formatting Rules:
          - Use ### for Section Headings.
          - Use **text** for emphasis.
          - Use bullet points (* ) for lists.
          - Use \n for spacing.`,
        },
      });

      const botResponse = response.text || "I apologize, but I'm experiencing a connectivity issue. Please reach Krina directly at krinakhunt12@gmail.com.";
      setMessages([...newMessages, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'bot', text: "Signal lost. Please contact Krina at **krinakhunt12@gmail.com** for direct communication." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div
          className="mb-4 w-[92vw] h-[84vh] md:w-[400px] md:h-[600px] rounded-[2.5rem] flex flex-col overflow-hidden border transition-colors duration-180"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
          }}
        >
          {/* Agent Header */}
          <div className="p-6 border-b flex justify-between items-center bg-white/[0.02]" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden group" style={{ backgroundColor: 'var(--accent-1)' }}>
                  <span className="text-black font-semibold text-xs tracking-tighter">AGENT</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-[3px] rounded-full" style={{ borderColor: 'var(--bg-secondary)' }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-[13px] font-semibold uppercase tracking-wider">Aether Agent</div>
                  <div className="px-1.5 py-0.5 rounded bg-[var(--accent-1)]/10 text-[8px] font-semibold text-[var(--accent-1)] border border-[var(--accent-1)]/20 tracking-widest">VERIFIED</div>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Online & Available</div>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-colors duration-180 p-2 rounded-full hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`text-[8px] uppercase tracking-[0.2em] opacity-30 mb-1.5 font-semibold ${msg.role === 'user' ? 'mr-1' : 'ml-1'}`}>
                  {msg.role === 'user' ? 'Client Request' : 'Agent Response'}
                </div>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-[12px] ${msg.role === 'user'
                    ? 'bg-white text-black font-bold'
                    : 'bg-white/[0.04] border border-white/10'
                    }`}
                  style={msg.role === 'bot' ? { color: 'var(--text-primary)' } : {}}
                >
                  {msg.role === 'bot' ? formatMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="text-[8px] uppercase tracking-widest opacity-30 mb-1.5 font-semibold ml-1">Agent Processing</div>
                <div className="bg-white/5 px-4 py-3 rounded-2xl border border-white/10 flex gap-1.5 items-center">
                  <div className="w-1 h-1 bg-[var(--accent-1)] rounded-full" />
                  <div className="w-1 h-1 bg-[var(--accent-1)] rounded-full" />
                  <div className="w-1 h-1 bg-[var(--accent-1)] rounded-full" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Agent Tools / Input */}
          <div className="p-5 border-t bg-black/40" style={{ borderColor: 'var(--border)' }}>
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
              {['Pricing', 'Services', 'Availability'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSend(tag)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg border text-[9px] font-semibold uppercase tracking-widest hover:underline"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}
                >
                  {tag}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2 rounded-2xl border p-1.5"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquire with the agent..."
                className="flex-1 bg-transparent px-4 py-2 outline-none text-xs font-medium placeholder:opacity-30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-20 disabled:grayscale"
                style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full flex items-center justify-center border transition-colors duration-180 group relative interactive"
        style={{
          backgroundColor: isOpen ? 'var(--bg-secondary)' : 'var(--accent-1)',
          color: isOpen ? 'var(--accent-1)' : 'var(--bg-primary)',
          borderColor: 'var(--border)',
        }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
          </div>
        )}
      </button>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 10px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
