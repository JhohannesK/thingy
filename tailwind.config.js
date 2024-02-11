/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#00928F',
				ligherTone: '#B6DBCA',
				accent: '#a89060',
				neutral: '#ffffff',
				dark: '#02333a',
			},
			fontFamily: {
				Cairo: ["'Cairo'", 'sans-serif'],
				dancing: ["'Dancing Script'", 'cursive'],
				default: ['Open Sans', 'sans-serif'],
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 100 },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.2s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
