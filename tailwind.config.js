/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "primary": "#BBCB64",
              "on-primary": "#191c1e",
              "primary-container": "#9ab03a",
              "primary-fixed": "#eef4cf",
              "primary-fixed-dim": "#d2e08c",
              "on-primary-fixed": "#162002",
              "secondary": "#FFE52A",
              "on-secondary": "#191c1e",
              "secondary-container": "#e0c612",
              "secondary-fixed": "#fff8c4",
              "tertiary": "#F79A19",
              "on-tertiary": "#191c1e",
              "tertiary-container": "#d97e04",
              "tertiary-fixed": "#ffedcc",
              "accent-red": "#CF0F0F",
              "on-accent-red": "#ffffff",
              "error": "#CF0F0F",
              "error-container": "#ffdad6",
              "on-error": "#ffffff",
              "on-error-container": "#600004",
              "surface": "#fafbf7",
              "on-surface": "#191c1e",
              "surface-dim": "#d9dad3",
              "surface-bright": "#fafbf7",
              "surface-container-lowest": "#ffffff",
              "surface-container-low": "#f3f5ed",
              "surface-container": "#e8ebe0",
              "surface-container-high": "#e1e4d8",
              "surface-container-highest": "#dadcd0",
              "surface-variant": "#dadcd0",
              "surface-tint": "#BBCB64",
              "on-surface-variant": "#44483d",
              "outline": "#75796c",
              "outline-variant": "#c5c8ba",
              "inverse-surface": "#2e3128",
              "inverse-on-surface": "#f0f2e8",
              "inverse-primary": "#bbcb64",
              "background": "#fafbf7",
              "on-background": "#191c1e"
          },
          "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
          "spacing": {
              "stack-sm": "8px",
              "stack-md": "16px",
              "gutter": "24px",
              "margin-desktop": "32px",
              "margin-mobile": "16px",
              "stack-lg": "32px",
              "unit": "4px",
              "container-max": "1280px"
          },
          "fontFamily": {
              "headline-lg-mobile": ["Inter", "sans-serif"],
              "headline-lg": ["Inter", "sans-serif"],
              "body-md": ["Inter", "sans-serif"],
              "title-lg": ["Inter", "sans-serif"],
              "price-display": ["Inter", "sans-serif"],
              "headline-md": ["Inter", "sans-serif"],
              "display-lg": ["Inter", "sans-serif"],
              "headline-sm": ["Inter", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "label-md": ["Inter", "sans-serif"]
          },
          "fontSize": {
              "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
              "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
              "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
              "title-lg": ["18px", { "lineHeight": "24px", "fontWeight": "600" }],
              "price-display": ["20px", { "lineHeight": "24px", "fontWeight": "700" }],
              "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
              "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
              "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
              "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
              "label-md": ["12px", { "lineHeight": "16px", "fontWeight": "600" }]
          }
      }
  },
  plugins: [],
}
