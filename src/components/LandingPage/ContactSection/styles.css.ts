import { style } from "@vanilla-extract/css";
export { wrapper, sectionHeading } from "../styles.css";

export const contactLink = style({
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "bold",
  display: "block",
  padding: "1rem",
  margin: "0 auto",
  fontSize: "1.5rem",
});

export const contactIcon = style({
  display: "inline-block",
  verticalAlign: "middle",
  lineHeight: "24px",
  fontSize: "24px",
  width: "24px",
  height: "24px",
  marginBottom: "0.2em",
  marginRight: "0.1em",
});
