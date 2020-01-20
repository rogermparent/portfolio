import React from "react"
import { css, cx } from "linaria"
import sx from "../../util/themed.js"
import { Box, Text, Link, Heading, Paragraph, Section } from "./shared"

const Intro = () => (
  <Section
    id="intro"
    className={css`
      ${sx({
        minHeight: "100vh",
        fontSize: [2, 3],
        lineHeight: "tight",
        color: "text",
        backgroundColor: "background",

        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        justifyContent: "center",
        "@media print": {
          minHeight: "unset",
        },
      })}
    `}
  >
    <Text>My name is</Text>
    <Heading
      className={css`
        ${sx({
          fontWeight: "black",
          fontSize: [6, 8],
          whiteSpace: "nowrap",
          lineHeight: "normal",
          my: 2,
        })}
      `}
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
      className={css`
        ${sx({
          my: 3,
          fontSize: [2, 3],
          display: "flex",
          flexFlow: "row nowrap",
          mx: [-2, -3],
          a: {
            mx: [2, 3],
          },
        })}
      `}
    >
      <Link href="#about">About</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </Box>
  </Section>
)

export default Intro
