import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { SingleProcuctPageTemplate } from "../components/products/SingleProductPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <SingleProcuctPageTemplate data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $language: String!) {
    productEnJson(slug: { eq: $slug }) {
      ref
      slug
      name
      images
      variations
      designer_slug
      designer_name
      description
      cover_img
      ambients
      category_slug
      category_name
      measurements
    }
    productEsJson(slug: { eq: $slug }) {
      ref
      slug
      name
      images
      variations
      designer_slug
      designer_name
      description
      cover_img
      ambients
      category_slug
      category_name
      measurements
    }
    productPtJson(slug: { eq: $slug }) {
      ref
      slug
      name
      images
      variations
      designer_slug
      designer_name
      description
      cover_img
      ambients
      category_slug
      category_name
      measurements
    }
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
`
