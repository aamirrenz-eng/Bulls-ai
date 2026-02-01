import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b", // zinc-950
                foreground: "#fafafa", // zinc-50
                "bulls-black": "#09090b",
                "bulls-red": "#ef4444",
                "bulls-gold": "#eab308",
                primary: {
                    DEFAULT: "#ef4444", // red-500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#27272a", // zinc-800
                    foreground: "#fafafa",
                },
                accent: {
                    DEFAULT: "#eab308", // yellow-500
                    foreground: "#000000",
                },
                glass: "rgba(24, 24, 27, 0.6)",
                glassBorder: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #ef444455 0deg, #eab30855 180deg, #ef444455 360deg)',
                'bulls-gradient': 'linear-gradient(135deg, #ef4444 0%, #eab308 100%)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px -5px rgba(239, 68, 68, 0.3)' },
                    '100%': { boxShadow: '0 0 30px -5px rgba(239, 68, 68, 0.5)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;


