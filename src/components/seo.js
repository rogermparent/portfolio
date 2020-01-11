import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

function SEO({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
  children,
  author,
  ...props
}) {
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        description: siteDescription,
        author: siteAuthor,
      },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || siteDescription
  const metaAuthor = author || siteAuthor

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      {...props}
    />
  )
}

export default SEO
