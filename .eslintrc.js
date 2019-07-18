module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true, //单引号
        semi: false //分号
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, "never"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
