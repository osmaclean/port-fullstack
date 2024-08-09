import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
