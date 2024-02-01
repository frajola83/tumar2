import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout/Layout"
import { Product } from "../interfaces"
import { ProductsPageTemplate } from "../components/products/products/ProductsPageTemplate"

interface edgesItemType {
  node: Product
}

type MyNode = {
    node: Product;
}

interface GraphQlQueryProps {
    data: {
        allProductJson: {
            edges: MyNode[];
        }
    }
}

const parseProducts = ({data}: GraphQlQueryProps):Product[] => {
    return data.allProductJson.edges.map((edge) => edge.node);
} 

export interface TemplateProductsIndexData {
  data: {
    allProductJson: { edges: Array<edgesItemType> }
  }
}

const Template: React.FC<TemplateProductsIndexData> = (props) => {
  return (
    <Layout>
      <ProductsPageTemplate products={parseProducts(props)} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!, $language: String!) {
    allProductJson(filter: { category_slug: { eq: $slug } }) {
      edges {
        node {
          cover_img
          slug
          name
          nameEn
          nameEs
          nameEs_
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
