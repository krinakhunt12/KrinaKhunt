
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin" style={{ borderTopColor: 'var(--accent-1)' }} />
        <div className="absolute inset-4 border-4 border-transparent rounded-full animate-[spin_1s_linear_infinite_reverse]" style={{ borderBottomColor: 'var(--accent-3)' }} />
        <div className="text-xl font-black uppercase tracking-tighter">
          K. <span style={{ color: 'var(--accent-1)' }}>K.</span>
        </div>
      </div>
      <div className="mt-12 space-y-4 text-center">
        <div className="text-[10px] uppercase tracking-[0.5em] font-black animate-pulse" style={{ color: 'var(--accent-1)' }}>Loading...</div>
        <div className="w-48 h-[1px] relative overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
          <div className="absolute inset-0 animate-[loading_2s_ease-in-out_infinite]" style={{ backgroundColor: 'var(--accent-1)' }} />
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
