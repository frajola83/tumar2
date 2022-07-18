import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { SingleProcuctPage } from "../components/products/SingleProductPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <SingleProcuctPage data={data.productEsJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
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
  }
`
