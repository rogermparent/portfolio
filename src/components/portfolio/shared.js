/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Box, Container } from "@theme-ui/components"

export const Paragraph = props => (
  <Text
    as="p"
    sx={{
      my: 3,
    }}
    {...props}
  />
)

const ListItem = props =>
  props.children.type === "li" ? props.children : <li {...props} />

export const List = ({ children, itemProps, as = "ul", ...props }) => {
  return (
    <Box __themeKey="lists" as={as} {...props}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <ListItem key={i} {...itemProps}>
            {child}
          </ListItem>
        ))
      ) : (
        <ListItem {...itemProps}>{children}</ListItem>
      )}
    </Box>
  )
}

export const Section = ({
  children,
  containerProps,
  containerSx,
  ...props
}) => (
  <Box
    as="section"
    sx={{
      py: 1,
    }}
    {...props}
  >
    <Container
      sx={{
        my: [4, 5],
        ...containerSx,
      }}
      {...containerProps}
    >
      {children}
    </Container>
  </Box>
)
