const flowbite = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}', // Include your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
};
