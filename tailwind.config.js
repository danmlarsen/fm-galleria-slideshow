/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F3F3F3",
          300: "#E5E5E5",
          500: "#7D7D7D",
        },
      },
      screens: {
        sm: "435px",
        md: "768px",
        lg: "1080px",
        xl: "1360px",
      },
      maxWidth: {
        "8xl": "85rem",
      },
    },
    fontSize: {
      body: [
        "0.875rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "bold",
        },
      ],
      heading1: [
        "3.5rem",
        {
          lineHeight: "4rem",
          fontWeight: "bold",
        },
      ],
      heading2: [
        "1.5rem",
        {
          lineHeight: "1.8125rem",
          fontWeight: "bold",
        },
      ],
      heading3: [
        "1.125rem",
        {
          lineHeight: "1.375rem",
          fontWeight: "bold",
        },
      ],
      display1: [
        "12.5rem",
        {
          lineHeight: "9.375rem",
          fontWeight: "bold",
        },
      ],
      display2: [
        "6.25rem",
        {
          lineHeight: "6.25rem",
          fontWeight: "bold",
        },
      ],
      subhead1: [
        "0.9375rem",
        {
          lineHeight: "1.1875rem",
          fontWeight: "normal",
        },
      ],
      subhead2: [
        "0.8125rem",
        {
          lineHeight: "1.0625rem",
          fontWeight: "normal",
        },
      ],
      link1: [
        "0.75rem",
        {
          lineHeight: "0.9375rem",
          fontWeight: "bold",
          letterSpacing: "2.5px",
        },
      ],
      link2: [
        "0.5625rem",
        {
          lineHeight: "0.6875rem",
          fontWeight: "bold",
          letterSpacing: "2px",
        },
      ],
    },
  },
  plugins: [],
};
