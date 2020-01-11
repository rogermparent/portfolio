/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Container, Text, Link, Heading } from "@theme-ui/components"
import { Paragraph } from "./shared"

const Intro = () => (
  <Box
    id="intro"
    sx={{
      fontSize: [2, 3],
      lineHeight: "tight",
      color: "text",
      backgroundColor: "background",
      py: 3,

      height: "100vh",
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <Container>
      <Text>My name is</Text>
      <Heading
        sx={{
          fontWeight: "black",
          fontSize: [6, 8],
          whiteSpace: "nowrap",
          lineHeight: "normal",
          my: 2,
        }}
      >
        Roger Parent
      </Heading>
      <Paragraph>
        I'm an aspiring web developer and all-around tech junkie, focused
        primarily on modern web development.
      </Paragraph>
      <Paragraph>
        With a bit of both front-end and back-end, I have something to bring to
        any project.
      </Paragraph>
      <Box
        as="nav"
        sx={{
          my: 3,
          fontSize: [2, 3],
          display: "flex",
          flexFlow: "row nowrap",
          mx: [-2, -3],
          a: {
            mx: [2, 3],
          },
        }}
      >
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </Box>
    </Container>
  </Box>
)

export default Intro
