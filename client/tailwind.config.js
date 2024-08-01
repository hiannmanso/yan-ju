/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#953f16',
        cream: '#f5f5dc', 
      },
    },
  },
  plugins: [],
};
