module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  ignorePatterns: ["dist/*.*"],
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-unreachable": "off",
    "no-param-reassign": "off",
    "no-const-assign": "off",
    "no-useless-escape": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "default-param-last": "off",
    "no-unused-vars": "off",
    "max-len": [
      2,
      80,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
      },
    ],
  },
};
