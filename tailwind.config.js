/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.tsx', './public/index.html'],
  },
  theme: {
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.2rem',
      '3xl': '2.4rem',
    },
    extend: {
      colors: {
        primary: '#32467F',
        navy: '#183177',
        gray: '#797979',
        'lighter-gray': '#9E9E9E',
        'light-gray': '#636363',
        'normal-col': '#333132',
        dark: '#424242',
        darker: '#474747',
        'title-color': '#393E6B',
        green: '#23C27F',
        orange: '#EA8D36',
        'light-white': '#EFF3FF',
        'active-col': '#F0F6FF',
        blue: '#2979FF',
        'gray-border': '#E5E5E5',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addVariant, e }) {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`);
          const yourSelector = 'input[type="checkbox"]';
          return `${yourSelector}:checked ~ div .${eClassName}`;
        });
      });
    }),
  ],
};
