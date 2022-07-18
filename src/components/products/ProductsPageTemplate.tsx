import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { PageTitle } from "../common/PageTitle"
import { ProductComponent } from "./ProductComponent"
import { Breadcrumbs } from "../common/Breadcrumbs"
import { Container } from "../common/layout/Boxes"

interface ProductsPageTemplateProps {
  data: any[]
}

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 100%;
  justify-content: "flex-start";
  gap: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  margin-top: ${props => props.theme.gap * 4}px;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
  `

interface ProductsPageTemplateProps {
  data: any[]
}

export const ProductsPageTemplate: React.FC<ProductsPageTemplateProps> = ({
  data
}) => {

  const { category_slug, category_name } = data[0]

  const items = data.map((n: any, i: number) => {
    return <ProductComponent key={i} {...n} />
  })

  const breadcrumbLinks = [
    { name: "produtos", link: "/produtos" },
    { name: category_name, link: `/${category_slug}` },
  ]

  return (
    <Container>
      <Breadcrumbs links={breadcrumbLinks} />
      <PageTitle>{category_name}</PageTitle>
      <Wrapper>{items}</Wrapper>
    </Container>
  )
}
