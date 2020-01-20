import React from "react"
import { css, cx } from "linaria"
import sx from "../../util/themed.js"
import Main from "./main"
import "./global.css"
import SEO from "../seo"

const SiteLayout = ({ children, header, footer }) => {
  return (
    <div
      className={css`
        ${sx({ variant: "styles.root" })}
      `}
    >
      <SEO />
      <Main>{children}</Main>
    </div>
  )
}

export default SiteLayout
