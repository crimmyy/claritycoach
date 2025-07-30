import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'


const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#ffffff', 
        primary: '#389DF9',
        secondary: '#EBF5FE',
      },
    },
  },
  plugins: [animate],
}

export default config
