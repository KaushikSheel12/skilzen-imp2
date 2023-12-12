/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "gray-gradient":"linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
          lightgreen: "#2FD5C8",
      },
      boxShadow:{
        "card-shadow":"3px 6px 30px rgba(0,0,0,.15)"
      }
    },
  },
  plugins: [

    'tailwindcss',
    'postcss-flexbugs-fixes',
    require('tailwind-scrollbar')({ nocompatible: true }),

    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
],
}


