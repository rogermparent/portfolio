/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Box, Container, Heading } from "@theme-ui/components"

export const Detail = ({
  summary,
  summaryProps,
  summarySx,
  sx,
  contentProps,
  contentSx,
  children,
  ...props
}) => (
  <Box
    as="details"
    sx={{
      "& .content": {
        "*": { position: "relative" },
        overflow: "hidden",
        ...contentSx,
      },
      '&[open=""] .content > *': {
        animation: "open 0.25s ease-out",
      },
      ...sx,
    }}
    {...props}
  >
    <Heading as="summary" sx={summarySx} {...summaryProps}>
      {summary}
    </Heading>
    <Box className="content" {...contentProps}>
      <Box>{children}</Box>
    </Box>
  </Box>
)

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
