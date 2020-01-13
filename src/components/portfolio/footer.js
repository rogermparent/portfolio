/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Heading, Link } from "@theme-ui/components"
import { Section } from "./shared"

const PortfolioFooter = () => {
  return (
    <Section
      id="contact"
      containerProps={{
        sx: {
          my: 6,
          fontSize: [2, 3],
          width: "auto",
        },
      }}
    >
      <Heading sx={{ my: 3 }}>Interested in working with me?</Heading>
      <Text>
        e-mail me at{" "}
        <Link href="mailto:rogermparent@gmail.com">rogermparent@gmail.com</Link>
      </Text>
    </Section>
  )
}

export default PortfolioFooter
