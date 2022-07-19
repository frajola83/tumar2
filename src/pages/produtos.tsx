import { graphql } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/common/layout/Layout"
import { Categories } from "../components/products/products/Categories"
import { Category } from "../interfaces"

type MyNode = {
    node: Category;
}

interface GraphQlQueryProps {
    data: {
        allCategoryJson: {
            edges: MyNode[];
        }
    }
}

const parseCategories = (data: GraphQlQueryProps): Category[] => {
    return data.data.allCategoryJson.edges.map(edge => edge.node);
}

const IndexPage:React.FC<GraphQlQueryProps> = (props) => {
  const {t} = useTranslation();
  return (
    <Layout>
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
      <Categories categories={parseCategories(props)} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    allCategoryJson {
      edges {
        node {
          name
          nameEs
          nameEn
          slug
          coverImg
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
