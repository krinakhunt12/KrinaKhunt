
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className="relative inline-flex items-center cursor-pointer h-8 w-14 rounded-full border transition-colors duration-300 select-none"
      style={{
        backgroundColor: isDark ? 'var(--accent-1)' : 'var(--bg-secondary)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Toggle Circle */}
      <span
        className="absolute inline-flex items-center justify-center h-6 w-6 rounded-full transition-transform duration-300"
        style={{
          backgroundColor: 'var(--bg-primary)',
          transform: isDark ? 'translateX(1.8rem)' : 'translateX(0.25rem)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Icon inside circle */}
        {isDark ? (
          // Moon icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--accent-1)' }}
          >
            <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--accent-3)' }}
          >
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
