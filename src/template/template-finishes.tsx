import React from "react"
import { graphql } from "gatsby"
import { FinishesIndex } from "../components/finishes/FinishesIndex"
import Layout from "../components/common/layout/Layout"
import { AllFinishGraphQlResult, parseFinishes } from "../interfaces"

export default function Template({ data }: { data: AllFinishGraphQlResult }) {
  const finishGroups = parseFinishes(data)

  return (
    <Layout>
      <FinishesIndex data={finishGroups} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($category_slug: String!, $language: String!) {
    allFinishesJson(filter: { category_slug: { eq: $category_slug } }) {
      edges {
        node {
          category_name
          category_name_en
          category_name_es
          category_slug
          finishes {
            name
            nameEn
            nameEs
            slug
          }
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
