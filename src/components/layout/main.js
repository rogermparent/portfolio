import React from "react"
import { Box } from "@theme-ui/components"

const SiteMain = ({ children }) => {
  return (
    <Box as="main" variant="layout.main">
      {children}
    </Box>
  )
}

export default SiteMain
