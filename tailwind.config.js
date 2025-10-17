/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./*.html",
    "./assets/**/*.{css,js,html}"
  ],
  theme: {
    fontFamily:{
  //      font-family: "Poppins", sans-serif;
  //        font-family: "Outfit", sans-serif;
  // font-family: "Orbitron", sans-serif;

  'poppins':["Poppins, sans-serif"],
  'Outfit':["Outfit, sans-serif"],
  'Orbitron':["Orbitron, sans-serif"]

    },
    keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 1s ease-out forwards',
      },
 container: {
  center: true,
  padding: '12px',
 screens: {
  sm: '540px',   // Small screens (mobile)
  md: '700px',   // Medium screens (tablet)
  lg: '900px',   // Large screens (laptops)
  xl: '1150px',  // Extra large (desktops)
  '2xl': '1400px' // 2X large (big monitors)
}

},

    extend: {
    colors: {
        bg: 'var(--bg-color)',
        'bg-secondary': 'var(--secondary-bg)',
        navbar: 'var(--navbar-bg)',
        text: 'var(--text-color)',
        'text-secondary': 'var(--secondary-text)',
        accent: 'var(--accent-color)',
        button: 'var(--button-bg)',
        'button-text': 'var(--button-text)',
        'hover-bg': 'var(--hover-bg)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
}
