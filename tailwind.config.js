module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.tsx",
    "./pages/*.tsx",
    "./pages/_document.js",
    "./components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#404040",
      },
    },
    fontFamily: {
      sans: "barlow, sans-serif",
    },
  },
  variants: {},
  plugins: [],
};
