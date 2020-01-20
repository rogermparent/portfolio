import React from "react"
import { css, cx } from "linaria"
import sx from "../../util/themed.js"
import { Heading, Paragraph, Section } from "./shared"

const About = () => {
  return (
    <Section
      className={css`
        ${sx({
          color: "background",
          backgroundColor: "secondary",
          lineHeight: "snug",
        })}
      `}
      innerClass={css`
        ${sx({
          my: [4, 5, 6],
        })}
      `}
      id="about"
    >
      <Heading
        className={css`
          ${sx({
            fontSize: [5, 6],
            my: [4],
          })}
        `}
      >
        About Me
      </Heading>
      <Paragraph>
        Born in the small town of Lebanon, Maine, I've had an obsession with all
        things computer technology ever since I could walk. Being the only kid
        on the block with a tech hobby, I had to be a self-starter and
        constantly study tech on my own.
      </Paragraph>
      <Paragraph>
        While my formal education is relatively small, I make up for it with the
        wealth of knowledge I've gained over the years through both the internet
        and my own tinkering!
      </Paragraph>
    </Section>
  )
}

export default About
