import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

globalStyle("*", {
  scrollBehavior: "smooth",
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  listStyle: "none",
});
globalStyle("body", {
  fontFamily: vars.fonts.body,
  background: vars.colors.background,
  color: vars.colors.body,
  minWidth: "320px",
});
