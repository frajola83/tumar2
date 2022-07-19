import { Link } from "gatsby"
import React from "react"
import { ProductImage } from "../../types/productImageTypes"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"
import { breakpoints } from "../../utils/styledResponsive"

const ImageInner = styled.div`
  transition: 1s all ease-in-out;
  width: 100%;
`
const ImageContainer = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`
const TextContainer = styled.div``

const Text = styled.p`
  color: ${props => props.theme.colors.darkGrey};
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s all ease-in-out;
`

const Container = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  text-decoration: none;
  width: 100%;
  ${breakpoints("width", ["100%", "45%", "45%", "30%"])}
  &:hover {
    ${ImageInner} {
      transform: scale(1.5)
    }
    ${Text} {
      text-shadow: 0 0 1px rgba(0, 0, 0, .8);
    }
  }
`

export const Item: React.FC<ProductImage> = ({ name, src, link }) => {
  return (
    <Container to={link}>
      <ImageContainer>
        <ImageInner>
          <ImgProvider
            fileName={`${src}.jpg`}
            alt={name}
            style={{ width: "100%", display: "block" }}
          />
        </ImageInner>
      </ImageContainer>
      <TextContainer>
        <Text>{name}</Text>
      </TextContainer>
    </Container>
  )
}
