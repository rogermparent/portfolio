import React from "react"
import { Box } from "../../components/portfolio/shared.js"

const SiteMain = ({ children }) => {
  return (
    <Box as="main" variant="layout.main">
      {children}
    </Box>
  )
}

export default SiteMain
