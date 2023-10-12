/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
       colors : {
        'customred' : '#D03947',
        'darkgray' : '#484848',
        'lightgray' : '#8A8A8A',
        'white2' : '#FAFAFA', 
       }, 
      fontFamily: {  
        'volkhov': ['Volkhov', 'serif'],
        'poppins': ['Poppins', 'sans-serif'] 
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
