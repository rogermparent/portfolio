import React from "react"
import { css, cx } from "linaria"
import sx from "../../util/themed.js"
import { Text, Heading, Link, Section } from "./shared"

const PortfolioFooter = () => {
  return (
    <Section
      id="contact"
      innerClass={css`
        ${sx({
          my: 6,
          fontSize: [2, 3],
          width: "auto",
        })}
      `}
    >
      <Heading
        className={css`
          ${sx({ my: 3 })}
        `}
      >
        Interested in working with me?
      </Heading>
      <Text>
        e-mail me at{" "}
        <Link href="mailto:rogermparent@gmail.com">rogermparent@gmail.com</Link>
      </Text>
    </Section>
  )
}

export default PortfolioFooter
