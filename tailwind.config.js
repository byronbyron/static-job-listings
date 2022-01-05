module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'cyan': 'hsl(180, 29%, 50%)',
      'light-cyan': 'hsl(180, 52%, 96%)',
      'light-cyan-tags': 'hsl(180, 31%, 95%)',
      'medium-cyan': 'hsl(180, 8%, 52%)',
      'dark-cyan': 'hsl(180, 14%, 20%)',
    },
    extend: {
      screens: {
        'xl': '1158px',
      }
    },
  },
  plugins: [],
}
