/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },

      colors: {
        primary: "#0f172a",     // dark navy
        secondary: "#06b6d4",   // cyan
        accent: "#6366f1",      // indigo
        background: "#020617",  // deep dark
        text: "#e2e8f0"
      },

      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },

      animation: {
        blob: 'blob 12s infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
      },

      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
