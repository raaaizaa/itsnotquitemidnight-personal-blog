import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterRegular', 'system-ui', 'sans-serif'],
        'inter-light': ['InterLight', 'system-ui', 'sans-serif'],
        'inter-bold': ['InterBold', 'system-ui', 'sans-serif'],
        'hit-me-punk': ['HitMePunk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
