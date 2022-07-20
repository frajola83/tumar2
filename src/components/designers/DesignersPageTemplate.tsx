import React, { useContext } from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { ImgProvider } from "../common/ImgGraph"
import { Link } from "gatsby"
import { Container } from "../common/layout/Boxes"
import { Designer, DesignerProduct } from "../../interfaces"
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"
import { Gallery, ProductImage } from "../gallery/Gallery"

interface DesignerPageTemplateProps {
  data: Designer
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

const parseProductsToProductImage = (
  products: DesignerProduct[],
  language: "pt" | "es" | "en"
): ProductImage[] => {
  return products.map(product => {
    let name = product.name
    if (language === "en") {
      name = product.nameEn
    }
    if (language === "es") {
      name = product.nameEs
    }
    return {
      link: product.link,
      name,
      src: product.src,
    }
  })
}

export const DesignerPageTemplate: React.FC<DesignerPageTemplateProps> = ({
  data,
}) => {
  const { t } = useTranslation()
  const context = useContext(I18nextContext)

  const { title, descriptionEn, descriptionEs, products, slug, coverImg } = data

  let designerDescription = data.description

  if (context.language === "en") {
    designerDescription = descriptionEn
  }

  if (context.language === "es") {
    designerDescription = descriptionEs
  }

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
              <Description
                dangerouslySetInnerHTML={{ __html: designerDescription }}
              ></Description>
            </Text>
          </TextContainer>
        </FlexContainer>
      </TopContainer>
      <BottomTitle>{title} para Tumar</BottomTitle>
      <Gallery data={parseProductsToProductImage(products, context.language)} />
    </Container>
  )
}
