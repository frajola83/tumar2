import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/common/layout/Layout"
import { ContactPage } from "../components/contact/ContactPage"

export const Contact: React.FC = () => (
  <Layout>
    <ContactPage />
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

export default Contact
