import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import Layout from "../../components/common/layout/Layout"
import { Categories } from "../../components/products/Categories"

export const Products: React.FC = () => {

  const {t} = useI18next();

  return (
    <Layout>
      <>
        <h1
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: 30,
            marginTop: 80,
            marginBottom: 80,
          }}
        >
          {t("pages.products.title")}
        </h1>
        <Categories />
      </>
    </Layout>
  )
}

export default Products
export const query = graphql`
  query ($language: String!) {
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
`;