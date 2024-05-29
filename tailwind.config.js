/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#996EC5 ",
        primaryvariant : "#938fc1",
        second: "#4ab0ba",
        secondvariant: "#E3F0F1",
        third: "#7bcab1",
        four: "#FFFFFF",
        fourvariant : '#F8F8F8',
        five: "#000000",
        six: "#8aadba",
        seven:"#525252",
        graytab:"#D9D9D9",
        graytabdata:'#4B4B4B',
        greendash:"#7bcab1",
        graydash:'#E3F0F1',
        yellowdash : '#FFF8D6',
        
      },
    },
  },
  plugins: [],
}