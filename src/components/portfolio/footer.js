/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Text, Container, Heading, Link } from "@theme-ui/components"

const PortfolioFooter = () => {
  return (
    <Box id="contact">
      <Container
        sx={{
          my: 6,
          fontSize: [2, 3],
          width: "auto",
        }}
      >
        <Box>
          <Heading sx={{ my: 3 }}>Interested in working with me?</Heading>
          <Text>
            e-mail me at{" "}
            <Link href="mailto:rogermparent@gmail.com">
              rogermparent@gmail.com
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default PortfolioFooter
