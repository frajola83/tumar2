import React from "react"
import { DesignerPageTemplate } from "../components/designers/DesignersPageTemplate"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { FinishesIndex } from "../components/finishes/FinishesIndex"

export default function Template({ data }) {
  console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data)
  return (
    <Layout>
      <FinishesIndex data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($category_slug: String!) {
    allFinishesJson(filter: { category_slug: { eq: $category_slug } }) {
      nodes {
        category_name
        category_slug
        finishes {
          name
          slug
        }
      }
    }
  }
`
