import { css } from "@styled-system/css"
import theme from "../gatsby-plugin-theme-ui/index.js"
function themed(style) {
  return css(style)(theme)
}
export default themed
