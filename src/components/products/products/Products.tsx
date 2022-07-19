import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ProductComponent } from "./ProductComponent"

// const Wrapper = styled(Container)`
//   width: 80%;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   flex: 1 1 100%;
//   justify-content: "flex-start";
//   gap: ${props => props.theme.gap * 2}px;
//   margin-bottom: ${props => props.theme.gap * 4}px;
//   ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
// `

export const Products: React.FC = ({ }) => {
  return null;
  // const { allProductJson } = useStaticQuery(graphql`
  //   {
  //     allProductJson {
  //       edges {
  //         node {
  //           slug
  //           cover_img
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)

  // const items = allProductJson.edges.map((n: any, i: number) => {
  //   //@ts-ignore
  //   return <ProductComponent key={i} data={n.node} />
  // })

  // // return null

  // return (
  //   <Container>
  //     <Wrapper>{items}</Wrapper>
  //   </Container>
  // )
}
