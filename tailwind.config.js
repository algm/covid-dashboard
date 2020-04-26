// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    height: {
      sm: '20px',
      md: '150px',
      lg: '250px',
      xl: '512px',
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
