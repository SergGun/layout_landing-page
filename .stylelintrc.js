module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {},
  ignoreFiles: [
    "src/styles/main.css",        // исключаем скомпилированный CSS
    "src/styles/main.css.map"     // если есть source map
  ]
};

