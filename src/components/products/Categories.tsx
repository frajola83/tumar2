import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { I18nContext } from "react-i18next"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { Container } from "../common/layout/Boxes"
import { CategoryItem } from "./CategoryItem"

interface CategoriesProps { }

const Wrapper = styled(Container)`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 100%;
  justify-content: "flex-start";
  gap: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
`

export const Categories: React.FC<CategoriesProps> = ({ }) => {

  const queryData = useStaticQuery(graphql`
    query CategoriesQuery {
      allCategoryEnJson {
        edges {
          node {
            slug
            coverImg
            name
          }
        }
      }
      allCategoryEsJson {
        edges {
          node {
            slug
            coverImg
            name
          }
        }
      }
      allCategoryPtJson {
        edges {
          node {
            slug
            coverImg
            name
          }
        }
      }
    }
  `)

  // 

  // return null

  const context = useContext(I18nContext);

  let data: any[] | null = null;

  console.log("********************************")
  console.log(context.i18n.language)
  console.log("********************************")

  switch (context.i18n.language) {
    case "en":  {
      data = queryData.allCategoryEnJson.edges;
      break;
    }
    case "es":  {
      data = queryData.allCategoryEsJson.edges;
      break;
    }
    default: {
      data = queryData.allCategoryPtJson.edges;  
    }
  }

  const items = data!.map((n: any, i: number) => {
    return <CategoryItem key={i} {...n.node} />
  });

  return (
    <Container>
      Language = {context.i18n.language}
      <Wrapper>{items}</Wrapper>
    </Container>
  )
}
