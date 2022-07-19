import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"
import { PageTitle } from "../common/PageTitle"
import { Container } from "../common/layout/Boxes"

const FlexContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  gap: ${props => props.theme.gap}px;
  justify-content: flex-start;
  align-items: center;
`

const FlexItem = styled(Link)`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  ${breakpoints("flex-basis", ["100%", "48%", "31%", "31%"])}
  h3 {
    color: ${props => props.theme.colors.darkGrey}!important;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    h3 {
      width: 100%;
    }
  }
`
const ItemTitle = styled.h3`
  border-bottom: 1px solid ${props => props.theme.colors.mediumGrey};
  width: 70%;
  text-align: center;
  font-weight: bold;
  padding-top: ${props => props.theme.gap}px;
  padding-bottom: ${props => props.theme.gap / 2}px;
`

const Content = styled(Container)`
  margin-bottom: ${props => props.theme.gap * 4}px;
  width: 90%;
`

interface DesignersPageProps {}

export const DesignersPage: React.FC<DesignersPageProps> = ({}) => {
  const RenderAll = (data: any) => {
    const { nodes } = data.data.allDesignerJson
    const elements = nodes.map((node: any) => {
      return (
        <FlexItem to={node.slug} key={node.slug}>
          <ImgProvider
            fileName={node.coverImg}
            alt={node.coverImg}
            style={{ width: "100%", display: "block" }}
          />
          <ItemTitle>{node.title}</ItemTitle>
        </FlexItem>
      )
    })
    return <FlexContainer>{elements}</FlexContainer>
  }

  return (
    <Container>
      <Content>
        <PageTitle>Designers</PageTitle>
        <StaticQuery
          query={graphql`
            query MyQuery {
              allDesignerJson {
                nodes {
                  slug
                  title
                  coverImg
                }
              }
            }
          `}
        >
          {data => <RenderAll data={data} />}
        </StaticQuery>
      </Content>
    </Container>
  )
}
