module.exports = {
  content: [
    "./index.html",
    "./js/script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'pressStart': ['Press Start 2P', 'cursive'],
      },
      colors: {
        'bg-main': '#191720',
        'action-l': '#6871FC',
        'action-r': '#393DDC',
        'input': '#1E1C24',
        'input-b': '#34333C',
        'input-red': '#D22947',
        'smTxt': '#616066',
      },
      backgroundImage: {
        'bg-header': "url('../assets/images/bg_full.png')",
      },
    },
  },
  plugins: [],
}