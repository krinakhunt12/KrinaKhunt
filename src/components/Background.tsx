
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Background: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent-1) 1px, transparent 1px), linear-gradient(90deg, var(--accent-1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle Diagonal Line Patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M-10,10 L10,-10 M90,110 L110,90"
                stroke="var(--accent-3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Subtle Vignette - Theme Aware */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
            : 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.3) 100%)'
        }}
      />
    </div>
  );
};

export default Background;
