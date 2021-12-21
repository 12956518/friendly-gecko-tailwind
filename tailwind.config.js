const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"]
    },
    extend: {
      fontSize: {
        hero: ["96px", { lineHeight: "96px", letterSpacing: "-0.02em" }],
        "headline-1": [
          "64px",
          { lineHeight: "64px", letterSpacing: "-0.02em" }
        ],
        "headline-2": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.02em" }
        ],
        "headline-3": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.01em" }
        ],
        "headline-4": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em" }
        ],
        body: ["16px", { lineHeight: "24px", letterSpacing: "-0em" }],
        "body-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em" }],
        "body-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em" }],
        caption: ["12px", { lineHeight: "20px", letterSpacing: "-0em" }],
        "caption-lg": ["14px", { lineHeight: "24px", letterSpacing: "-0em" }],
        "hairline-lg": ["16px", { lineHeight: "16px", letterSpacing: "-0em" }],
        "hairline-sm": ["12px", { lineHeight: "12px", letterSpacing: "-0em" }],
        button: ["16px", { lineHeight: "16px", letterSpacing: "-0em" }],
        "button-sm": ["14px", { lineHeight: "16px", letterSpacing: "-0em" }]
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: {
          DEFAULT: "#2E86FF",
          "50": "#E6F0FF",
          "100": "#D1E4FF",
          "200": "#A8CDFF",
          "300": "#80B5FF",
          "400": "#579EFF",
          "500": "#2E86FF",
          "600": "#0067F5",
          "700": "#004FBD",
          "800": "#003885",
          "900": "#00204D"
        },
        highlight: {
          DEFAULT: "#29BFFF",
          "50": "#E1F6FF",
          "100": "#CCF0FF",
          "200": "#A3E4FF",
          "300": "#7BD7FF",
          "400": "#52CBFF",
          "500": "#29BFFF",
          "600": "#00A8F0",
          "700": "#0081B8",
          "800": "#005A80",
          "900": "#003248"
        },
        secondary: {
          DEFAULT: "#FC4595",
          "50": "#FFFAFC",
          "100": "#FFE6F1",
          "200": "#FEBDDA",
          "300": "#FD95C3",
          "400": "#FD6DAC",
          "500": "#FC4595",
          "600": "#FB0E76",
          "700": "#CD035C",
          "800": "#960243",
          "900": "#5F022A"
        }
      },
      spacing: {
        "128": "32rem",
        "144": "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography")
  ]
};
