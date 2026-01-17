
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Diagonal Line Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M-10,10 L10,-10 M90,110 L110,90" stroke="#333" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
};

export default Background;
