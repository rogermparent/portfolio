import React from "react"
import Layout from "../components/layout"
import { Heading, Text, Link } from "../components/portfolio/shared.js"

export default () => {
  return (
    <Layout>
      <Heading as="h1">That page is missing!</Heading>
      <Text>
        You can return to the portfolio <Link href="/">here</Link>
      </Text>
    </Layout>
  )
}
