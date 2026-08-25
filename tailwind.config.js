/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#073763', 50:'#EAF2F8', 100:'#CFE1EE', 300:'#5A87AC', 600:'#0A4A7E', 700:'#063056', 800:'#052641', 900:'#031729' },
        sky: { DEFAULT:'#1ACEDF', 100:'#DBF7FA', 600:'#12A7B6', 700:'#0C6D76' },
        gold: { DEFAULT:'#FFC857', 100:'#FFF1D6', 600:'#E8A93A' },
        cardinal: { DEFAULT:'#AD343E', 100:'#F5DFE1' },
        sage: { DEFAULT:'#5B8C5A', 100:'#E4EEE3', 700:'#446944' },
        clay: { DEFAULT:'#B4654A', 100:'#F3E1DB' },
        sand: { DEFAULT:'#C8895A', 100:'#F5E7DB', 700:'#82593B' },
        paper: '#F6F9FB',
        ink: '#0C1B2A',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"','Helvetica','Arial','sans-serif'],
      },
    }
  }
}
