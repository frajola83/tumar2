import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"
import React, { useContext, useTransition } from "react"
import styled from "styled-components"
import { Product } from "../../../interfaces"
import { breakpoints } from "../../../utils/styledResponsive"
import { Container } from "../../common/layout/Boxes"
import { PageTitle } from "../../common/PageTitle"
import { ProductComponent } from "./ProductComponent"

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
  products: Product[];
}

export const ProductsPageTemplate: React.FC<ProductsPageTemplateProps> = ({
  products,
}) => {

  const {category_name, category_slug} = products[0]
  const {t} = useTranslation();

  const items = products.map(product => {
    return <ProductComponent key={product.cover_img} {...product} />
  })

  const breadcrumbLinks = [
    { name: "produtos", link: "/produtos" },
    { name: category_name, link: `/${category_slug}` },
  ]

  return (
    <Container>
      {/* <Breadcrumbs links={breadcrumbLinks} /> */}
      <PageTitle>{t(`categories.${category_slug}`)}</PageTitle>
      <Wrapper>{items}</Wrapper>
    </Container>
  )
}
