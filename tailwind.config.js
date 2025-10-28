/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./assets/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                'primary-clr': '#45484A',
                'white-clr': '#FFFFFF',
                'secondary-clr': '#AEB5BB',
                'gray-clr': '#D9D9D9'
            }
        },
    },
    plugins: [],
}