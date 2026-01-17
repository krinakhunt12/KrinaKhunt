
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="relative w-[60px] h-[30px] rounded-full border-2 transition-all duration-300 interactive overflow-hidden"
      style={{ borderColor: 'var(--accent-3)', backgroundColor: 'var(--bg-secondary)' }}
      aria-label="Toggle Theme"
    >
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${theme === 'dark' ? 'left-[34px]' : 'left-[4px]'}`}
        style={{ backgroundColor: 'var(--accent-1)' }}
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black transition-transform duration-300 rotate-180"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform duration-300"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
