import { extendTheme } from "@chakra-ui/react";

const colors = {
	error: "hsl(354, 84%, 57%)",
	primary: {
		200: "hsl(206, 94%, 87%)",
		300: "hsl(206, 94%, 87%)",
		500: "hsl(213, 96%, 18%)",
	},
	accent: {
		500: "hsl(243, 100%, 62%)",
	},
	neutral: {
		100: "hsl(231, 100%, 99%)",
		200: "hsl(217, 100%, 97%)",
		300: "hsl(229, 24%, 87%)",
		400: "hsl(231, 11%, 63%)",
	},
};

const fonts = {
	heading: `'Ubuntu', sans-serif`,
	body: `'Ubuntu', sans-serif`,
};

const components = {
	Input: {
		baseStyle: {
			_focus: {
				boxShadow: "none",
			},
		},
	},
};

const theme = extendTheme({ fonts, colors, components });

export default theme;
