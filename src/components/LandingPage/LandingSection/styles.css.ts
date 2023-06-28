import { keyframes, style } from "@vanilla-extract/css";
import { screens, vars } from "../../../theme.css";

export const landingSection = style({
  height: "100vh",
  backgroundColor: vars.colors.backgroundAlt,
  textAlign: "center",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  fontSize: "1rem",
  "@media": {
    [screens.md]: {
      fontSize: "1.1rem",
    },
  },
});

export const name = style({
  fontSize: "2em",
  fontWeight: "bolder",
  margin: "0.5rem 0",
  "@media": {
    [screens.sm]: {
      fontSize: "2.5em",
    },
  },
});

export const content = style({
  flex: 1,
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  justifyContent: "center",
});

const float = keyframes({
  "0%": { transform: "translate(0, 0px)" },
  "10%": { transform: "translate(0, 5px)" },
  "20%": { transform: "translate(0, 0px)" },
  "30%": { transform: "translate(0, 5px)" },
  "40%": { transform: "translate(0, 0px)" },
});

export const downChevron = style({
  opacity: "25%",
  animationName: float,
  animationDuration: "4s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  margin: "1rem 0",
  width: "2rem",
  "@media": {
    [screens.sm]: {
      width: "3rem",
    },
    [screens.md]: {},
  },
});
