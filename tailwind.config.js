module.exports = {
  content: [
    "./index.html",
    "./js/script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'bg-main': '#191720',
        'action-l': '#6871FC',
        'action-r': '#393DDC',
        'input': '#1E1C24',
        'input-b': '#34333C',
        'input-red': '#D22947',
        'smTxt': '#616066',
        'title': '#7377D5',
        'action-active-l': '#A9AFFF',
        'action-active-r': '#4E52F8',
      },
      backgroundImage: {
        'bg-header': "url('../assets/images/bg_full.png')",
      },
    },
  },
  plugins: [],
}