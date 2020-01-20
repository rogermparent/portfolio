/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const theme = require("./src/gatsby-plugin-theme-ui/index.js")
module.exports = {
  siteMetadata: {
    title: "Roger M. Parent",
    siteUrl: "https://www.rogermparent.com/",
    description: "A website for RMP's portfolio.",
    author: "Roger M. Parent",
  },
  plugins: [
    "gatsby-plugin-linaria",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "assets",
        name: "assets",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roger M. Parent: Portfolio`,
        short_name: `Roger M. Parent`,
        start_url: `/`,
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: `minimal-ui`,
        icon: `assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preload-link-crossorigin`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        extraDirsToCache: [".linaria-cache"]
      }
    },
  ],
}
