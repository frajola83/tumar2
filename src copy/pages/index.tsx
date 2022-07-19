import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/common/layout/Layout"
import { HomePage } from "../components/home/HomePage"

const IndexPage = () => {
  return <Layout>
    <HomePage />
  </Layout>
} 

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
