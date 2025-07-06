import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkGarden: '#406C2C',
        primary: '#406C2C',
      },
    },
  },
  plugins: [],
}

export default config
