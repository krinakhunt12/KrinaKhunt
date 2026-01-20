
import React, { createContext, useContext, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Prefer whatever was applied pre-paint in `index.html`, then localStorage.
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'light' || attr === 'dark') return attr;
        const saved = localStorage.getItem('theme');
        return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    });

    const applyTheme = (next: Theme) => {
        // Apply synchronously (no post-paint effect) to avoid flicker/lag.
        document.documentElement.setAttribute('data-theme', next);
        document.documentElement.style.colorScheme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {
            // ignore
        }
        setTheme(next);
    };

    const api = useMemo(() => {
        return {
            theme,
            toggleTheme: () => applyTheme(theme === 'dark' ? 'light' : 'dark'),
            setTheme: applyTheme,
        };
        // `theme` intentionally included; `applyTheme` is stable by closure.
    }, [theme]);

    return (
        <ThemeContext.Provider value={api}>
            {children}
        </ThemeContext.Provider>
    );
};
