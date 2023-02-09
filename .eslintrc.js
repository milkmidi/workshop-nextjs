module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  globals: {
    JSX: false,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": 0,
    "@next/next/no-img-element": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/no-var-requires": 0,
    "arrow-body-style": 0,
    camelcase: 0,
    "global-require": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "max-len": ["error", { code: 150 }],
    "no-console": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-exports": 0,
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "react/button-has-type": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-uses-react": "off",
    "react/no-danger": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
  },
};
