import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 18 + 8;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="relative flex flex-col items-center justify-center">
        {/* Circular Progress Loader */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="64" cy="64" r="60"
              fill="none" stroke="var(--border)" strokeWidth="2"
              className="opacity-20"
            />
            <circle
              cx="64" cy="64" r="60"
              fill="none" stroke="var(--accent-1)" strokeWidth="2"
              strokeDasharray="377"
              strokeDashoffset={377 - (377 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          <div className="text-3xl font-bold tracking-tighter animate-pulse" style={{ color: 'var(--text-primary)' }}>
            KK<span style={{ color: 'var(--accent-1)' }}>.</span>
          </div>
        </div>

        {/* Text Indicator */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="mono text-[10px] uppercase tracking-[0.5em] font-bold" style={{ color: 'var(--accent-1)' }}>
            {progress}%
          </span>
          <span className="mono text-[9px] uppercase tracking-[0.3em] opacity-40" style={{ color: 'var(--text-secondary)' }}>
            Initializing Experience
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(0.98); } }
      `}</style>
    </div>
  );
};

export default Preloader;
