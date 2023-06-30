import { style } from "@vanilla-extract/css";
import { screens, styleLinks, vars } from "../../../theme.css";
import { wrapper as genericWrapper } from "../styles.css";
export { sectionHeading } from "../styles.css";

export const wrapper = style([
  styleLinks,
  genericWrapper,
  { backgroundColor: vars.colors.backgroundAlt },
]);

export const contactLink = style({
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "bold",
  display: "block",
  whiteSpace: "nowrap",
  padding: "1rem",
  margin: "0 auto",
  fontSize: "1rem",
  "@media": {
    [screens.sm]: { fontSize: "1.25rem" },
    [screens.md]: { fontSize: "1.5rem" },
  },
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
