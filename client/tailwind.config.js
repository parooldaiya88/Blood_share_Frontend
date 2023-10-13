/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'input-label': '#A97878',
        'input-bg': '#F1F1F1', // Using hexa
        'button-bg':'#FF0D0D', // Using
        /* 'contact-bg':'#c7d1d0', */
        'contact-bg':'#c3cdcc',
        'footer-bg':'#272829',
        //'text-bg':'#B31312'
        'text-bg':'#D2001A',
        'text-about':'#8E8787',
        'about-bg':'#ECE8E8',
        'card-bg':'#F2DFDF',
        'random-bg':'#FF334E',
        
      },
      animation: {
        divLoad: "divLoad 500ms linear 1",
      },
      keyframes: {
        divLoad: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": { transform: "translateY(0%)" },
        },
      },
      
      opacity : {
        '150':'1.5',
        '200':'2',
        '250':'2.5'
      }, 
      translate: {
        '4':'24rem',
        '4.15':'30rem',
        '4.20':'40rem',
        '4.25': '75rem',
        '4.22':'60rem',
        '4.23':'70rem',
      }
    },
  },
  plugins: [],
}
