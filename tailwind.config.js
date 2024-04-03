module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minWidth:{
      '1/2': '50vw'
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:['disabled'],
      rotate: ['group-focus'],
      overflow: ['focus'],
      display: ['group-focus', 'focus'],
      visibility: ['focus']
    },
  },
  plugins: [],
}
