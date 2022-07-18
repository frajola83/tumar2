import React, { useContext } from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { ImgProvider } from "../common/ImgGraph"
import { Link } from "gatsby"
import { Container } from "../common/layout/Boxes"
import { Gallery } from "../gallery/Gallery"
import { Designer } from "../../interfaces/designerInterfaces"
import { I18nextContext } from "gatsby-plugin-react-i18next"

interface DesignerPageTemplateProps {
  data: DesignerData
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
interface DesignerData {
  designerEnJson: Designer
  designerEsJson: Designer
  designerPtJson: Designer
}

export const DesignerPageTemplate: React.FC<DesignerPageTemplateProps> = ({
  data,
}) => {
  const context = useContext(I18nextContext)
  let translatedData: Designer | null = null

  switch (context.language) {
    case "en": {
      translatedData = data.designerEnJson
      break
    }
    case "es": {
      translatedData = data.designerEsJson
      break
    }
    default: {
      translatedData = data.designerPtJson
      break
    }
  }

  const { coverImg, description, id, products, slug, title } = translatedData

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
                dangerouslySetInnerHTML={{ __html: description }}
              ></Description>
            </Text>
          </TextContainer>
        </FlexContainer>
      </TopContainer>
      <BottomTitle>{title} para Tumar</BottomTitle>
      <Gallery data={products} />
    </Container>
  )
}
