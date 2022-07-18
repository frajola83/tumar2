import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { ProductsPageTemplate } from "../components/products/ProductsPageTemplate"
import { Product } from "../interfaces/productInterfaces"

// {
//   "data": {
//     "allProductEnJson": {
//       "edges": [
//         {
//           "node": {
//             "cover_img": "agnes-01",
//             "slug": "agnes",
//             "name": "Agnes",
//             "category_slug": "cadeiras",
//             "category_name": "cadeiras"
//           }
//         },

interface edgesItemType {
  node: Product
}

export interface TemplateProductsIndexData {
  data: {
    allProductEnJson: { edges: Array<edgesItemType> }
    allProductEsJson: { edges: Array<edgesItemType> }
    allProductPtJson: { edges: Array<edgesItemType> }
  }
}

const Template: React.FC<TemplateProductsIndexData> = ({ data }) => {
  data.allProductEnJson.edges.forEach(node => console.log(JSON.stringify(node)))
  return (
    <Layout>
      <h1>hello</h1>
      {/* <ProductsPageTemplate data={data} /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!, $language: String!) {
    allProductEnJson(filter: { category_slug: { eq: $slug } }) {
      edges {
        node {
          cover_img
          slug
          name
          category_slug
          category_name
        }
      }
    }
    allProductEsJson(filter: { category_slug: { eq: $slug } }) {
      edges {
        node {
          cover_img
          slug
          name
          category_slug
          category_name
        }
      }
    }
    allProductPtJson(filter: { category_slug: { eq: $slug } }) {
      edges {
        node {
          cover_img
          slug
          name
          category_slug
          category_name
        }
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
