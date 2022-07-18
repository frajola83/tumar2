import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { SingleProcuctPage } from "../components/products/SingleProductPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <h1>{data.productEnJson.description}</h1>
      <SingleProcuctPage data={data.productEnJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
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
  }
`
