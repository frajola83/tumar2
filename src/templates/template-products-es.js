import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { ProductsPageTemplate } from "../components/products/ProductsPageTemplate"

export default function Template({ data }) {
  return (
    <Layout>
      <h1>hello</h1>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     allProductEsJson(filter: { category_slug: { eq: $slug } }) {
//       nodes {
//         cover_img
//         slug
//         name
//         category_slug
//         category_name
//       }
//     }
//   }
// `
