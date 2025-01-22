import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { SingleProcuctPageTemplate } from "../../src/components/products/products/SingleProductPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <SingleProcuctPageTemplate product={data.productJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!, $language: String!) {
    productJson(slug: { eq: $slug }) {
      ref
      slug
      name
      nameEn
      nameEs
      nameEs_
      images
      variations
      designer_slug
      designer_name
      description
      descriptionEn
      descriptionEs
      cover_img
      ambients
      category_slug
      category_name
      measurements
      measurementsEn
      measurementsEs
      concept
      conceptEs
      conceptEn
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
