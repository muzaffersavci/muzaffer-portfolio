/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'indigo' rengini Lacivert (Birincil) olarak eşleştirme
        indigo: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#2B3A55', // Birincil Marka Rengi (Lacivert)
          700: '#243b53',
          800: '#102a43',
          900: '#0f2035',
        },
        // 'purple' rengini Kiremit/Toprak (İkincil/Vurgu) olarak eşleştirme
        purple: {
          50: '#fffdfa',
          100: '#fff3eb',
          200: '#ffdec7',
          300: '#febd95',
          400: '#fd9c6b',
          500: '#f37f48',
          600: '#CE976E', // İkincil Toprak Rengi (Kiremit)
          700: '#b56d49',
          800: '#8f4f31',
          900: '#683622',
        },
        // Adaçayı ve Hardal renklerini yardımcı renkler olarak ekleme
        sage: {
          500: '#9EB384',
        },
        mustard: {
          500: '#E8C872',
        }
      }
    },
  },
  plugins: [],
}
