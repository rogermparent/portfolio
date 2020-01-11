import React from "react"
import { Styled } from "theme-ui"
import Main from "./main"
import "./global.css"
import SEO from "../seo"

const SiteLayout = ({ children, header, footer }) => {
  return (
    <Styled.root>
      <SEO />
      <Main>{children}</Main>
    </Styled.root>
  )
}

export default SiteLayout
