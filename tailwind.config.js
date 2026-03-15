/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"  // 掃描 src 底下所有 Vue / JS / TS 檔案
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}