import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/common/layout/Layout"
import { SobrePage } from "../components/sobre/SobrePage"

export const Sobre: React.FC = () => (
  <Layout>
    <SobrePage />
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

export default Sobre
