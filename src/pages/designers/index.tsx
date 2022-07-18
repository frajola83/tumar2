import React from "react"
import { DesignersPage } from "../../components/designers/DesignersPage"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../../components/common/layout/Layout"                      

export const index: React.FC = () => (
  <Layout>
    <DesignersPage />
  </Layout>
)

export default index

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
