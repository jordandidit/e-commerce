/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.3)",
          "200": "rgba(217, 217, 217, 0.4)",
          "300": "rgba(217, 217, 217, 0.44)",
        },
        seagreen: "#0b9664",
        darkslateblue: "#0b4296",
        orangered: "#ff5d1d",
        gray: {
          "100": "#1f1f1f",
          "200": "#1b1b1b",
          "300": "#131313",
          "400": "rgba(0, 0, 0, 0.7)",
          "500": "rgba(0, 0, 0, 0.4)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        lavender: "#d0daf5",
        steelblue: "#115fa2",
        olivedrab: "#649424",
      },
      fontFamily: {
        mulish: "Mulish",
        poppins: "Poppins",
        "roboto-slab": "'Roboto Slab'",
        "dm-sans": "'DM Sans'",
        body: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "lgi-5": "19.5px",
        xl: "20px",
        lg: "18px",
      },
    },
    fontSize: {
      "3xs": "0.63rem",
      xs: "0.75rem",
      "4xs": "0.56rem",
      sm: "0.88rem",
      "2xs": "0.69rem",
      mid: "1.06rem",
      "5xs": "0.5rem",
      xl: "1.25rem",
      "6xs": "0.44rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
