/** @type {import('postcss').ProcessOptions & { plugins: import('postcss').AcceptedPlugin[] }} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = config;
