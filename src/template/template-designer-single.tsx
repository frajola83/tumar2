import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/common/layout/Layout"
import { DesignerPageTemplate } from "../components/designers/DesignersPageTemplate"
import { DesignerGraphQlResult } from "../interfaces"

const Template: React.FC<DesignerGraphQlResult> = ({ data }) => {
  return (
    <Layout>
      <DesignerPageTemplate data={data.designerJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!, $language: String!) {
    designerJson(slug: { eq: $slug }) {
      coverImg
      description
      descriptionEn
      descriptionEs
      id
      slug
      title
      products {
        link
        name
        nameEn
        nameEs
        src
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

export default Template
