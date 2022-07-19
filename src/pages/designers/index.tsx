import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/common/layout/Layout"
import { DesignersPage } from "../../components/designers/DesignersPage"

export const index: React.FC = () => (
  <Layout>
    <DesignersPage />
  </Layout>
)

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default index
