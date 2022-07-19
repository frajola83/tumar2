import { graphql } from "gatsby"
import React from "react"
import Layout from "../../../src/components/common/layout/Layout"
import { FinishesIndex } from "../../components/finishes/FinishesIndex"

interface indexProps {}

export const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout>
      <FinishesIndex />
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    allFinishesJson {
      edges {
        node {
          category_name
          category_name_en
          category_name_es
          category_slug
          finishes {
            name
            nameEn
            nameEs
            slug
          }
        }
      }
    }
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
