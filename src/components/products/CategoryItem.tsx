import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"
import { Link } from "gatsby"

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
  slug: string
  coverImg: string
  name: string
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ slug, coverImg, name }) => {
  const link = `/produtos/${slug}`
  return (
    <Item to={link}>
      <ImgWrapper>
        <ImgInner>
          <ImgProvider
            fileName={coverImg}
            alt={coverImg}
            style={{ width: "100%", display: "block" }}
          />
        </ImgInner>
      </ImgWrapper>
      <Title>{name}</Title>
    </Item>
  )
}
