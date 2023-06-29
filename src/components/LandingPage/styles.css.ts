import { style } from "@vanilla-extract/css";
import { screens } from "../../theme.css";

export const wrapper = style({
  padding: "2rem 1rem",
});
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
