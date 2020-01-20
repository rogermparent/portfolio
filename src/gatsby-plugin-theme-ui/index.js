const preset = require("@theme-ui/preset-tailwind")

module.exports = {
  ...preset,
  breakpoints: ["480px", "720px", "960px", "1024px"],
  colors: {
    ...preset.colors,
    primaryText: "white",
  },
  cards: {
    primary: {
      backgroundColor: "background",
      color: "text",
      borderRadius: "lg",
      ul: {
        listStylePosition: "inside",
        p: 1,
      },
    },
  },
  lists: {
    unstyled: {
      listStyle: "none",
      p: 0,
      m: 0,
    },
  },
  layout: {
    ...preset.layout,
    headerWrapper: {
      px: 2,
    },
    header: {
      display: "flex",
      flexWrap: "nowrap",
      flexFlow: ["column", "row"],
      justifyContent: ["center", "space-between"],
      alignItems: "middle",
      borderBottom: "1px solid",
      borderColor: "primary",
      a: {
        variant: "links.nav",
      },
    },
    headerNav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "middle",
    },
    footerWrapper: {
      backgroundColor: "primary",
    },
    main: {
      flex: "1",
    },
    container: {
      mx: "auto",
      width: "100%",
      px: [3, 4],
      maxWidth: "780px",
      boxSizing: "border-box"
    },
  },
  links: {
    uncolored: {
      color: "inherit",
    },
    unstyled: {
      variant: "uncolored",
      textDecoration: "inherit",
    },
    nav: {
      variant: "unstyled",
      pt: 3,
      pb: 2,
      px: 1,
      mx: 1,
      textTransform: "uppercase",
      fontWeight: "bold",
      boxSizing: "border-box",
      fontSize: 0,
    },
  },
  styles: {
    ...preset.styles,
    logo: {
      display: "block",
      fontWeight: "black",
      fontSize: [3],
    },
    root: {
      ...preset.styles.root,
      width: "full",
      height: "full",
      display: "flex",
      flexFlow: "column nowrap",
      minWidth: "320px",
      "@media print": {
        display: "block",
      },
    },
  },
}
