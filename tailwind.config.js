//** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/views/**/*.{js,jsx,ts,tsx}",
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				luckiestGuy: ['Luckiest Guy', 'cursive'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				'primary-blue': '#c7f1ff',
			},
			screens: {
				'xs': '425px', // You can define your custom breakpoints
			},
		},
	},
	plugins: [],
}


