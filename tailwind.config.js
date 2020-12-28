module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'alan-green': '#22e39e',
        'alan-brown': '#595454',
        'alan-red': '#ff7045',
        'alan-orange': '#ff9a3e',
        'alan-yellow': '#fff256',
        'alan-blue': '#2e94fa',
        'alan-pink': '#ec346e',
        'alan-purple': '#8600ff',
        'alan-ambre': '#ff9a3e',
        'alan-indigo': '#5269d1',
        'alan-darkergrey': '#302929',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
