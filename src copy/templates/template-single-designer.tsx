import React from "react"
import { DesignerPageTemplate } from "../components/designers/DesignersPageTemplate"
import { graphql } from "gatsby"
import {Layout} from "../components/common/layout/Layout"

export default function Template({ data }) {
  return (
    <Layout>
      <DesignerPageTemplate data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!, $language: String!) {
    designerEnJson(slug: { eq: $slug }) {
      coverImg
      id
      title
      description
      products {
        name
        src
        link
      }
    }
    designerEsJson(slug: { eq: $slug }) {
      coverImg
      id
      title
      description
      products {
        name
        src
        link
      }
    }
    designerPtJson(slug: { eq: $slug }) {
      coverImg
      id
      title
      description
      products {
        name
        src
        link
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
