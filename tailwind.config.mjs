/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#090a0c',
        'bg-2': '#111214',
        'bg-3': '#16181d',
        text: '#f2efe8',
        muted: '#b4b0a9',
        copper: '#b8875a',
        'copper-2': '#d1a074',
        blue: '#76a8c8',
        success: '#22c07b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
        sm: '14px',
      },
      maxWidth: {
        container: '1220px',
      },
    },
  },
  plugins: [],
};
