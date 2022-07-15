import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { SingleProcuctPage } from "../components/products/SingleProductPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <SingleProcuctPage data={data.productJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    productJson(slug: { eq: $slug }) {
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
