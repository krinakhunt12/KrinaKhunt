/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // Background colors
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',

                // Accent colors
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',

                // Text colors
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',

                // Other colors
                'highlight': 'var(--highlight)',
                'border': 'var(--border)',
                'nav-bg': 'var(--nav-bg)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            fontSize: {
                'xs': 'var(--font-size-xs)',
                'sm': 'var(--font-size-sm)',
                'base': 'var(--font-size-base)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)',
                '3xl': 'var(--font-size-3xl)',
            },
            lineHeight: {
                'tight': 'var(--line-height-tight)',
                'normal': 'var(--line-height-normal)',
                'relaxed': 'var(--line-height-relaxed)',
            },
            borderRadius: {
                'sm': 'var(--radius-sm)',
                'lg': 'var(--radius-lg)',
            },
            backgroundColor: {
                'primary': 'var(--bg-primary)',
                'secondary': 'var(--bg-secondary)',
            },
            textColor: {
                'primary': 'var(--text-primary)',
                'secondary': 'var(--text-secondary)',
            },
            borderColor: {
                'default': 'var(--border)',
                'border': 'var(--border)',
            },
        },
    },
    plugins: [],
}
