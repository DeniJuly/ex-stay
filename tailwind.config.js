module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF7048",
				secondary: "#3D8477",
				"secondary-light": "#DAFFF8",
				black: "#24201D",
			},
			fontFamily: {
				poppins: "Poppins",
			},
			boxShadow: {
				"1sm": "0px 10px 20px rgba(0, 0, 0, 0.03)",
				"1xl": "0px 28px 25px rgba(0, 0, 0, 0.02)",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [],
};
