/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { paper: '#F5F6ED', ink: '#23392F', leaf: '#65856C', moss: '#A6B99B', pale: '#E4EBDD', lime: '#D3DE8B', clay: '#C87958', line: '#D9E0D4' },
    fontFamily: { display: ['Instrument Serif', 'Georgia', 'serif'], sans: ['DM Sans', 'Arial', 'sans-serif'], mono: ['DM Mono', 'monospace'] }
  }},
  plugins: []
};
