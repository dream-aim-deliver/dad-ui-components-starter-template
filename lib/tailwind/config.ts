const content = [
  "./index.html",
  "./lib/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

const theme = {
  colors: {
    brand: {
      100: "#FFEBEE",
      200: "#FFCDD2",
      300: "#EF9A9A",
      400: "#E57373",
      500: "#FF5722",
      600: "#E64A19",
      700: "#D84315",
      800: "#BF360C",
      900: "#3E2723",
    },
    accent: {
      100: "#E1F5FE",
      200: "#B3E5FC",
      300: "#81D4FA",
      400: "#4FC3F7",
      500: "#29B6F6",
      600: "#03A9F4",
      700: "#039BE5",
      800: "#0288D1",
      900: "#01579B",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#BDBDBD",
      hint: "#9E9E9E",
      inverted: "#FFFFFF",
    },
    supporting: {
      success: "#4CAF50", // Green
      error: "#F44336", // Red
      warning: "#FFC107", // Yellow
      info: "#2196F3", // Blue
    },
    neutral: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
};

const plugins: never[] = [];

export {
  content as defaultContent,
  theme as defaultTheme,
  plugins as defaultPlugins,
};
