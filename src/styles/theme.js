export const theme = {
  colors: {
    fondo: "#0b0b1f",
    superficie: "#1d1a2a",
    primario: "#39ff88",
    secundario: "#8b5cf6",
    texto: "#fffb",
    enfasis: "#f00a",
    hero: "#1d0f26",
  },
  background: {
    secundario: "rgb(29, 26, 42)",
    primario: "rgb(29, 15, 38)",
  },

  radius: {
    small: "0.5rem",
    medium: "1.25rem",
    big: "2rem",
  },

  border: {
    primario: "0.1rem solid #39ff88",
    seccion: "1px solid rgba(255,255,255,0.33)",
  },

  fonts: {
    main: "'Raleway', Arial, sans-serif",
  },

  breakpoints: {
    mobile: "426px",
    tablet: "769px",
    laptop: "1025px",
    maximo: "min(100%, 80rem)",
  },

  shadows: {
    soft: "0 4px 12px rgba(0,0,0,0.25)",
  },

  spacing: (factor) => `${factor * 0.25}rem`,
};
