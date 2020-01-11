import React from "react"
import { Text } from "@theme-ui/components"

export const Paragraph = props => (
  <Text
    as="p"
    sx={{
      my: 3,
    }}
    {...props}
  />
)
