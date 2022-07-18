import React from "react"
import { graphql } from "gatsby"
import { ProductsPageTemplate } from "../components/products/ProductsPageTemplate"
import Layout from "../components/common/layout/Layout"

export default function Template({ data }) {
  return (
    <Layout>
      <ProductsPageTemplate data={data.allProductPtJson.nodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allProductPtJson(filter: { category_slug: { eq: $slug } }) {
      nodes {
        cover_img
        slug
        name
        category_slug
        category_name
      }
    }
  }
`
