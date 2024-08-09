import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/globals.css',
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite',
        'hover-card': 'hover-card 1s ease 0s normal none',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'hover-card': {
          from: { transform: 'scaleX(0.4)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      colors: {
        'primary-100': '#BFBFBD',
        'primary-200': '#A6A6A6',
        'primary-300': '#6F7372',
        'primary-400': '#383E40',
        'primary-500': '#222526',
      },
      fontFamily: {
        heathergreen: ['Heathergreen', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
