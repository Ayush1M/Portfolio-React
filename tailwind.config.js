/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      's' : '340px',
      'sm' : '570px',
      'md' : '800px',
      'mdp' : '880px',
      'lg' : '1024px',
      'xl' : '1100px'
    },
    minWidth:{
      '0' : '0px',
      '5' : '550px'
    },
    fontFamily:{
      'display': ['Roboto Condensed', 'sans-serif'],
    },
    extend: {
      colors:{
        'jet' : '#101010',
        'light-black' : '#1C1C1C'
      },
    },
  },
  plugins: [],
}

