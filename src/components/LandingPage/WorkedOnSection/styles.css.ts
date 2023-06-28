import { style } from "@vanilla-extract/css";
import { screens, vars } from "../../../theme.css";

export const sectionHeading = style({
  maxWidth: "60rem",
  margin: "2rem auto",
  fontSize: "1.8rem",
  "@media": {
    [screens.sm]: {
      fontSize: "2rem",
    },
    [screens.md]: {
      fontSize: "2.5rem",
    },
  },
});
export const video = style({ maxWidth: "100%" });
export const wrapper = style({
  margin: "1rem",
});
export const list = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  maxWidth: "1024px",
  margin: "0 auto",
  "@media": {
    [screens.lg]: {
      flexFlow: "row wrap",
    },
  },
});
export const item = style({
  padding: "1rem 0.5rem",
  borderBottom: "1px solid",
  borderColor: vars.colors.body,
  ":last-of-type": {
    borderBottom: "none",
  },
  "@media": {
    [screens.lg]: {
      borderBottom: "none",
      flexBasis: "50%",
    },
  },
});
export const itemHeading = style({
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  fontWeight: "bolder",
  "@media": {
    [screens.sm]: {
      fontSize: "1.5rem",
    },
  },
});
export const links = style({ textAlign: "center" });
export const link = style({
  display: "inline-block",
  padding: "0.25rem",
  fontWeight: "bold",
});
