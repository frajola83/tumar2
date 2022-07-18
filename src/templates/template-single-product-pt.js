import React from "react"
import { graphql } from "gatsby"
import { SingleProcuctPage } from "../components/products/SingleProductPageTemplate"
import Layout from "../components/common/layout/Layout"

export default function Template({ data }) {
  return (
    <Layout>
      <SingleProcuctPage data={data.productPtJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
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
  }
`
