/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // 解决tailwindcss 与 antd 冲突问题
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

