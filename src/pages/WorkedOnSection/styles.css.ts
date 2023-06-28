import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const video = style({ maxWidth: "100%" });
export const wrapper = style({ margin: "1rem auto", maxWidth: "65ch" });
export const item = style({
  paddingBottom: "1rem",
  margin: "1rem 0.5rem",
  borderBottom: "1px solid",
  borderColor: vars.colors.body,
  ":last-of-type": {
    borderBottom: "none",
  },
});
export const itemHeading = style({
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  fontWeight: "bolder",
});
export const links = style({ textAlign: "center" });
export const link = style({
  display: "inline-block",
  padding: "0.25rem",
  fontWeight: "bold",
});
