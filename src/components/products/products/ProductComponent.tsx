import { Link } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { Product } from "../../../interfaces"
import { breakpoints } from "../../../utils/styledResponsive"
import { ImgProvider } from "../../common/ImgGraph"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const ImgInner = styled.div`
  width: 100%;
  transition: 1s all ease-in-out;
  height: 320px;
  ${breakpoints("height", ["320px", "auto", "auto", "auto"])};
`

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
  ${breakpoints("flex-basis", ["100%", "46%", "47%", "30%"])};
  &:hover {
    ${ImgInner} {
      transform: scale(1.2);
    }
    h3 {
      width: 80%;
    }
  }
`

const ImgWrapper = styled.div`
  margin-bottom: ${props => props.theme.gap}px;
  display: flex;
  flex: 1;
  width: 80%;
  height: 275px;
  overflow: hidden;
  ${breakpoints("height", ["275px", "auto", "auto", "auto"])};
`
const Title = styled.h3`
  text-align: center;
  padding-top: ${props => props.theme.gap}px;
  border-top: 1px solid ${props => props.theme.colors.mediumGrey};
  transition: 0.5s all ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  color: ${props => props.theme.colors.darkGrey};
  &:hover {
    width: 80%;
  }
`

export const ProductComponent: React.FC<Product> = ({
  slug,
  cover_img,
  category_slug,
  name,
  nameEn,
  nameEs,
  nameEs_,
}) => {
  const context = useContext(I18nextContext)

  console.log({ nameEs, nameEn })

  let productName = name
  if (context.language === "en") {
    if (nameEn) {
      productName = nameEn
    }
  }
  if (context.language === "es") {
    if (nameEs) {
      productName = nameEs
    }
    if (nameEs_) {
      productName = nameEs_
    }
  }

  const link = `/produtos/${category_slug}/${slug}`

  return (
    <Item to={link}>
      <ImgWrapper>
        <ImgInner>
          <ImgProvider
            fileName={`${cover_img}.jpg`}
            alt={cover_img}
            style={{ width: "100%", display: "block" }}
          />
        </ImgInner>
      </ImgWrapper>
      <Title>{productName}</Title>
    </Item>
  )
}
