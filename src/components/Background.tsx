
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Background: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-400" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] transition-opacity duration-400"
        style={{
          backgroundImage: `linear-gradient(var(--accent-1) 1px, transparent 1px), linear-gradient(90deg, var(--accent-1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Decorative Orbs - Using CSS variables for colors */}
      <div
        className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full blur-[120px] animate-float transition-all duration-400 opacity-20"
        style={{ backgroundColor: 'rgb(6, 182, 212)' }} // cyan-500
      />
      <div
        className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full blur-[140px] animate-float transition-all duration-400 opacity-20"
        style={{ backgroundColor: 'rgb(168, 85, 247)', animationDelay: '2s' }} // purple-500
      />

      {/* Diagonal Line Patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none transition-opacity duration-400">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M-10,10 L10,-10 M90,110 L110,90"
                stroke="var(--accent-3)"
                strokeWidth="0.5"
                className="transition-all duration-700"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Overlay Vignette - Theme Aware */}
      <div
        className="absolute inset-0 transition-all duration-400"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            : 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.4) 100%)'
        }}
      />
    </div>
  );
};

export default Background;
