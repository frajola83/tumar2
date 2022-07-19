import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ImgProvider } from "../../common/ImgGraph"
import { breakpoints } from "../../../utils/styledResponsive"
import { Category } from "../../../interfaces"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const ImgInner = styled.div`
  width: 100%;
  transition: 1s all ease-in-out;
  height: 220px;
  ${breakpoints("height", ["220px", "200px", "170px", "170px"])};
`

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
  ${breakpoints("flex-basis", ["100%", "45%", "45%", "29%"])};
  .gatsby-image-wrapper {
    img {
      transition: 0.3s all ease-in-out !important;
    }
  }
  &:hover {
    ${ImgInner} {
      transform: scale(1.1);
    }
    h3 {
      width: 80%;
    }
  }
`

const ImgWrapper = styled.div`
  margin-bottom: ${props => props.theme.gap}px;
  display: block;
  flex: 1;
  width: 80%;
  height: 175px!important;
  overflow: hidden;
  /* ${breakpoints("height", ["275px", "177px", "177px", "177px"])}; */
`
const Title = styled.h3`
  text-align: center;
  padding-top: ${props => props.theme.gap}px;
  border-top: 1px solid ${props => props.theme.colors.mediumGrey};
  transition: 0.5s all ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: ${props => props.theme.colors.darkGrey};
  &:hover {
    width: 80%;
  }
`

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const link = `/produtos/${category.slug}`
  const context = useContext(I18nextContext)
  let name = category.name;
  if (context.language === "en") {
    name = category.nameEn;
  }
  if (context.language === "es") {
    name = category.nameEs;
  }
  return (
    <Item to={link}>
      <ImgWrapper>
        <ImgInner>
          <ImgProvider
            fileName={category.coverImg}
            alt={category.coverImg}
            style={{ width: "100%", display: "block" }}
          />
        </ImgInner>
      </ImgWrapper>
      <Title>{name}</Title>
    </Item>
  )
}
