import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout";
import { ProductsPageTemplate } from "../components/products/ProductsPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <ProductsPageTemplate data={data.allProductEnJson.nodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allProductEnJson(filter: { category_slug: { eq: $slug } }) {
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
