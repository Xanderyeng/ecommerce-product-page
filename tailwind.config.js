/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "hsla(26, 100%, 55%, 100%)",
      pale: "hsl(25, 100%, 94%)",
      "dark-blue": "hsl(220, 13%, 13%)",
      "very-dark-blue":"hsla(217, 12%, 13%, 1)",
      "grayish-blue": "hsla(217, 9%, 45%, 1)",
      "light-grayish-blue": "hsla(230, 60%, 98%, 1)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "white": "hsl(0, 0%, 100%)",
      blue: "blue",
      pink: "pink",
      peach: "peachpuff",
      red: "red",
      "black-opacity": "hsla(0, 0%, 0%,75%)",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      "hero-bg": "url('/src/assets/Cheetah Eyes.webp')",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    fontFamily: {
      "kumbh-sans": ['Kumbh Sans', "sans-serif"]
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100vw": "100vw",
      "90vw": "90vw",
      "100%": "100%",
      "90%": "90%",
      "80%": "80%",
      "70%": "70%",
      "60%": "60%",
      "55%": "55%",
      "50%": "50%",
      16: "4rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
};
export const plugins = [];
