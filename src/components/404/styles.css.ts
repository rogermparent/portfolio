import { style } from "@vanilla-extract/css";
import { styleLinks } from "../../theme.css";

export const heading = style({ margin: "1rem 0" });
export const wrapper = style([styleLinks, { padding: "1rem" }]);
