/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { Paragraph, Section } from "./shared"

const About = () => {
  return (
    <Section
      sx={{
        color: "background",
        backgroundColor: "secondary",
        lineHeight: "snug",
      }}
      containerSx={{
        my: [4, 5, 6],
      }}
      id="about"
    >
      <Heading
        sx={{
          fontSize: [5, 6],
          my: [4],
        }}
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
