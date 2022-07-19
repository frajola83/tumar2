import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { Container } from "../layout/Boxes"
import { ImgProvider } from "../common/ImgGraph"
import { Link } from "gatsby"
import { Gallery } from "../gallery/Gallery"

interface DesignerPageTemplateProps {
  data: any
}

const TopContainer = styled(Container)`
  width: 100%;
  margin-top: ${props => props.theme.gap * 4}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  ${breakpoints("width", ["100%", "100%", "80%", "80%"])};
`

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${props => props.theme.gap * 2}px;
  flex-direction: column;
  ${breakpoints("flex-direction", ["column", "column", "row", "row"])};
`
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const PicContainer = styled.div`
  flex: 1;
  display: flex;
`

const Text = styled.div``
const Title = styled.h2`
  font-size: 30px;
  font-weight: light;
  margin-bottom: ${props => props.theme.gap}px;
  text-transform: uppercase;
`
const Description = styled.p`
  font-size: 16px;
`
const BottomTitle = styled(Title)`
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.gap * 2}px;
`

export const DesignerPageTemplate: React.FC<DesignerPageTemplateProps> = ({
  data,
}) => {
  if (data.allDesignersJson) {
    const { title, description, products, coverImg } = data.allDesignersJson.nodes[0]
    console.log('coverImg, products', coverImg, products)
    return (
      <Container>
        <TopContainer>
          <FlexContainer>
            <PicContainer>
              <ImgProvider
                fileName={coverImg}
                alt={coverImg}
                style={{ width: "100%", display: "block" }}
              />
            </PicContainer>
            <TextContainer>
              <Text>
                <Title>{title}</Title>
                <Description dangerouslySetInnerHTML={{ __html: description }}>
                </Description>
              </Text>
            </TextContainer>
          </FlexContainer>
        </TopContainer>
        <BottomTitle>{title} para Tumar</BottomTitle>
        <Gallery data={products} />
        {/* <ProductsContainer>
          {products ? products.map((item: { name: string, src: string }) => {
            return (
              <ProductItem key={item.src}>
                <ProductImageContainer>
                  <ImgProvider
                    fileName={item.src}
                    alt={item.name}
                    style={{ width: "100%", display: "block" }}
                  />
                </ProductImageContainer>
                <ProductDescription>{item.name}</ProductDescription>
              </ProductItem>
            )
          }) : null}
        </ProductsContainer> */}
      </Container>
    )
  }
  return null
}
