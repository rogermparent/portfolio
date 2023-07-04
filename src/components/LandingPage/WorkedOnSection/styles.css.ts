import { style } from "@vanilla-extract/css";
import { screens, styleLinks } from "../../../theme.css";
import { wrapper as genericWrapper } from "../styles.css";
export { sectionHeading } from "../styles.css";

export const wrapper = style([
  genericWrapper,
  styleLinks,
  {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
]);
export const image = style({ maxWidth: "100%" });
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
  "@media": {
    [screens.lg]: {
      flexBasis: "50%",
    },
  },
});
export const itemHeading = style({
  fontSize: "1.5rem",
  margin: "0.5rem 0",
  fontWeight: "bolder",
  "@media": {
    [screens.sm]: {
      fontSize: "1.75rem",
    },
  },
});
export const links = style({ textAlign: "center" });
export const link = style({
  fontSize: "1.2rem",
  display: "inline-block",
  padding: "0.3rem",
  fontWeight: "bold",
});
