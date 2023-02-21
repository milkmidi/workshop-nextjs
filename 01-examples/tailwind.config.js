/* eslint-disable no-param-reassign */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['animate-spin'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    data: {
      active: 'active~="true"', // data-active="true"
    },
    extend: {
      colors: {
        red: '#e55039',
      },
    },
  },
  plugins: [
    require('rippleui'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, addComponents, addVariant, e }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      });

      addComponents({
        '.mm-btn': {
          'border-radius': '4px',
          height: '60px',
          'line-height': '40px',
          'font-size': '20px',
          'font-weight': 'bold',
          padding: '8px 20px',
          border: '1px solid black',
          '@apply cursor-pointer inline-flex justify-center items-center': {}, // cssInJS 可以用這樣寫
          '&:hover': {
            filter: 'brightness(1.75)',
          },
        },
        '.mm-spinner': {
          display: 'inline-block',
          width: '16px',
          height: '16px',
          'vertical-align': 'text-bottom',
          border: '3px solid currentColor',
          'border-right-color': 'transparent',
          'border-radius': '50%',
          '@apply animate-spin': {}, // cssInJS 可以用這樣寫
        },
      });

      addVariant('child', '& > *');

      // 登入後，會在 body 加上 logged-in class
      addVariant('logged-in', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `body.logged-in .${e(`logged-in${separator}${className}`)}`);
      });

      // https://tailwindcss.com/docs/plugins#complex-variants
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
