import React, { useContext } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { PageTitle } from "../common/PageTitle"
import { ProductComponent } from "./ProductComponent"
import { Breadcrumbs } from "../common/Breadcrumbs"
import { Container } from "../common/layout/Boxes"
import { Product } from "../../interfaces/productInterfaces"
import { TemplateProductsIndexData } from "../../templates/template-products-index"
import { I18nextContext } from "gatsby-plugin-react-i18next"

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

export const ProductsPageTemplate: React.FC<TemplateProductsIndexData> = ({
  data,
}) => {
  console.log(JSON.stringify(data))

  const context = useContext(I18nextContext)
  let translatedData

  switch (context.language) {
    case "en":
      translatedData = data.allProductEnJson.edges
      break
    case "es":
      translatedData = data.allProductEsJson.edges
      break
    default:
      translatedData = data.allProductPtJson.edges
      break
  }

  const { category_slug, category_name } = translatedData[0].node

  const items = translatedData.map(node => {
    return <ProductComponent key={node.cover_img} {...node} />
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
