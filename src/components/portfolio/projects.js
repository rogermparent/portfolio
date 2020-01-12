/** @jsx jsx */
import { jsx } from "theme-ui"
import { useMemo } from "react"
import {
  Button,
  Text,
  Flex,
  Box,
  Container,
  Heading,
  Link,
  Card,
} from "@theme-ui/components"
import { Paragraph } from "./shared"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
  const query = useStaticQuery(graphql`
    query ProjectImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          relativePath: {
            in: ["platinum-blog.png", "platinum-demo.png", "recipe-book.png"]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const images = useMemo(() => {
    return query.allFile.nodes.reduce(
      (obj, node) => ({
        ...obj,
        [node.relativePath]: node.childImageSharp.fluid,
      }),
      {}
    )
  }, [query])

  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "primary",
        color: "primaryText",
        py: 1,
      }}
    >
      <Container
        sx={{
          my: 5,
        }}
      >
        <Heading
          sx={{
            fontSize: [5, 6],
            my: [4, 5],
          }}
        >
          Things I've Made
        </Heading>

        <Project
          name="Platinum Recipe Book"
          image={images["recipe-book.png"]}
          repo="https://github.com/rogermparent/gatsby-starter-recipe-book"
          demo="https://rmp-gatsby-recipe-book-demo.netlify.com/"
        >
          <Paragraph as="summary">
            A Gatsby starter that shows off all the skills I've learned and
            Gatsby plugins I've developed so far!
          </Paragraph>
          <Paragraph as="details">
            <Box as="summary">It has the following features:</Box>
            <ul>
              <li>Markdown-sourced recipes and pages</li>
              <li>A custom data type for Recipes</li>
              <li>
                Automatic grouping of recipes by multiple different categories
              </li>
              <li>Client-side recipe multiplier</li>
              <li>Highly customized serverless CMS</li>
              <li>Offline PWA support</li>
              <li>Maxed out Google Lighthouse scores!</li>
            </ul>
          </Paragraph>
        </Project>

        <Project
          name="Platinum Blog"
          image={images["platinum-blog.png"]}
          repo="https://github.com/rogermparent/gatsby-theme-platinum-blog-test"
          demo="https://rmp-platinum-blog-test.netlify.com/"
        >
          <Paragraph>
            A basic serverless blog featuring posts and tags.
          </Paragraph>
        </Project>

        <Project
          name="Platinum Theme"
          image={images["platinum-demo.png"]}
          repo="https://github.com/rogermparent/gatsby-theme-platinum"
          demo="https://gatsby-theme-platinum-demo.netlify.com/"
        >
          <Paragraph>
            The building block of all the Platinum projects. A Gatsby theme that
            provides basic site building blocks and implements a custom method
            of content sourcing from MDX files.
          </Paragraph>
        </Project>

        <Container my={[4, 5]}>
          <Heading sx={{ fontSize: [3, 4] }}>
            This portfolio is also an example of my work!
          </Heading>
          <List
            variant="unstyled"
            sx={{
              my: 4,
            }}
            itemProps={{
              sx: {
                my: 3,
              },
            }}
          >
            <DetailItem heading="Serverless">
              <Paragraph>
                This, like most of my other sites, costs $0 to host!
              </Paragraph>
            </DetailItem>
            <DetailItem heading="SEO Ready">
              <Paragraph>
                This site gets at nearly perfect Google Lighthouse scores.
              </Paragraph>
            </DetailItem>
            <DetailItem heading="Scalable">
              <Paragraph>
                Since I don't need a server, serving this site to thousands is
                no more difficult than serving to tens!
              </Paragraph>
            </DetailItem>
          </List>
          <Text
            sx={{
              textAlign: "center",
              my: 3,
            }}
          >
            <Button
              as="a"
              variant="elevated"
              href="https://github.com/rogermparent/portfolio"
              sx={{
                fontSize: [1, 2],
              }}
            >
              See the source on GitHub!
            </Button>
          </Text>
        </Container>
      </Container>
    </Box>
  )
}

const DetailItem = ({ heading, children }) => (
  <Box
    as="details"
    sx={{
      "& .content": {
        position: "relative",
      },
      '&[open=""] .content': {
        animation: "open 0.25s ease-out",
      },
    }}
  >
    <Heading
      as="summary"
      sx={{
        fontSize: 2,
        mb: 2,
        cursor: "pointer",
      }}
    >
      {heading}
    </Heading>
    <Box sx={{ overflow: "hidden" }}>
      <Box pl={[1, 3]} className="content">
        {children}
      </Box>
    </Box>
  </Box>
)

const ListItem = props =>
  props.children.type === "li" ? props.children : <li {...props} />

const List = ({ children, itemProps, as = "ul", ...props }) => {
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

const Project = ({ children, name, image, repo, demo }) => (
  <Card
    sx={{
      fontSize: 0,
      p: 1,
      my: [3, 4],
      mx: "auto",
      maxWidth: "580px",
    }}
  >
    <Box>
      <Img fluid={image} sx={{ m: 1 }} />
      <Box sx={{ my: 3 }}>
        <Heading
          as="h3"
          sx={{
            fontSize: [2, 3, 4],
            textAlign: "center",
          }}
        >
          {name}
        </Heading>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            a: { mx: 1 },
          }}
        >
          {repo && <Link href={repo}>source</Link>}
          {demo && <Link href={demo}>demo</Link>}
        </Flex>
      </Box>
    </Box>
    <Box sx={{ mx: [3, 4] }}>{children}</Box>
  </Card>
)

export default Projects
