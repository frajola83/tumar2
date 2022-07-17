import React from "react"
import { DesignerPageTemplate } from "../components/designers/DesignersPageTemplate"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"

export default function Template({ data }) {

  const context = React.useContext(I18nextContext);

  return (
    <Layout>
      <DesignerPageTemplate data={data} />
    </Layout>
  )
}


export const pageQuery = graphql`
  query($id: String!) {
    allDesignersJson(filter: { id: { eq: $id } }) {
      nodes {
        coverImg
        id
        title
        description
        products {
          name
          src
          link
        }
      }
    }
  }
`
