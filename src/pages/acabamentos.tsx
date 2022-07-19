import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/common/layout/Layout"
// import { DesignersPage } from "../../components/designers/DesignersPage"

export const index: React.FC = () => (
  <Layout>
    <h1>HELLO</h1>
  </Layout>
)

export const query = graphql`
  query ($language: String!) {
    allFinishesJson {
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

export default index

// import { graphql } from "gatsby"
// import React from "react"
// import Layout from "../../../src/components/common/layout/Layout"
// import { FinishesIndex } from "../../components/finishes/FinishesIndex"
// import { AllFinishGraphQlResult, FinishGroup } from "../../interfaces"

// interface indexProps {
//   data: AllFinishGraphQlResult;
// }

// export const index: React.FC<indexProps> = ({data}) => {
//   console.log(JSON.stringify(data))
//   // const finishGroups = data.edges.map<FinishGroup>((edge, index) => edge.node)

//   return (
//     <Layout>
//       <h1>{JSON.stringify(data)}</h1>
//       {/* <FinishesIndex data={finishGroups} /> */}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ($language: String!) {
//     # allFinishesJson {
//     #   edges {
//     #     node {
//     #       category_name
//     #       category_name_en
//     #       category_name_es
//     #       category_slug
//     #       finishes {
//     #         name
//     #         nameEn
//     #         nameEs
//     #         slug
//     #       }
//     #     }
//     #   }
//     # }
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `

// export default index
