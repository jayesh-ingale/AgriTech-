/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        deepTeal: '#11998e',
        lightGreen: '#38ef7d',
        tealAccent1: '#2bcbba',
        tealAccent2: '#45a29e',
        softWhite: '#f3f4f6',
        darkGray: '#2d3748',
        softGray: '#4a5568',
        dangerRed: '#ff4d4d',
        successGreen: '#4caf50',
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        glow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 8px #38ef7d' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 12px #2bcbba' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
