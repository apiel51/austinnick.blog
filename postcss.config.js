module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "@fullhuman/postcss-purgecss":
      process.env.NODE_ENV === "production"
        ? {
            content: [
              "./pages/**/*.tsx",
              "./pages/*.tsx",
              "./pages/_document.js",
            ],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }
        : undefined,
  },
};
