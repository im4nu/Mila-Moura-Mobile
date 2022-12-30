/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-mm': "url('/src/assets/Images/Hero/Bg.png')",
        'services-bg-desktop': "url('/src/assets/Images/Services/Bg.png')",
        'services-bg-mobile': "url('/src/assets/Images/Services/BgMobile.png')",
        'groupW-mobile': "url('/src/assets/Images/GroupW/Bg.png')",
        'groupW-desktop': "url('/src/assets/Images/GroupW/Bg.png')",
        'contact-mobile': "url('/src/assets/Images/About/bg.png')",
      }
    },
    colors: {
      'Green-light': '#8C9176',
      'Green-dark': '#42462B',
      'Beije-strong': '#B48E62',
      'Beije-light': '#BA9578',
      'Blue-light': '#A1AFB2',
      'Light-default': '#F4F4F4',
      'Black-default': '#252525',
      'Gray-light': '#757575',
    },
    fontFamily: {
      main: ['Maven Pro', 'sans-serif'],
      secondary: ['allright', 'sans-serif'],
    },
  },
  plugins: [],
}