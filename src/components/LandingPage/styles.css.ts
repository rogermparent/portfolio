import { style } from "@vanilla-extract/css";
import { screens } from "../../theme.css";

export const wrapper = style({
  padding: "4rem 1rem 5rem",
});
export const sectionHeading = style({
  margin: "2rem auto",
  fontSize: "1.8rem",
  textAlign: "center",
  "@media": {
    [screens.sm]: {
      fontSize: "2rem",
    },
    [screens.md]: {
      fontSize: "2.5rem",
    },
  },
});
