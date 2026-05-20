import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { ImgProvider } from "../common/ImgGraph"
import { Container } from "../common/layout/Boxes"
import { useTranslation } from "react-i18next"

interface BlockProps {
  basis?: string
  gap?: string
}

const Block = styled.div<BlockProps>`
  display: flex;
  gap: ${props => props.gap || 0};
  flex: 0 1 ${props => props.basis || "100%"};
  /* margin-top: ${props => props.theme.gap}px; */
  margin-bottom: ${props => props.theme.gap}px;
  flex-direction: column;
  ${breakpoints("flex-direction", ["column", "column", "row", "row"])};
`
const VerticalImageBlock = styled(Block)`
  align-self: center;
  width: 62%;
  ${breakpoints("width", ["62%", "62%", "100%", "100%"])};
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: ${props => props.theme.gap * 4}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
`
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: ${props => props.theme.gap * 2}px;
  ${breakpoints("font-size", ["50px", "50px", "60px", "80px"])};
`
const SubTitle = styled.h3`
  font-size: 40px;
  ${breakpoints("font-size", ["40px", "40px", "50px", "70px"])};
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  ${breakpoints("text-align", ["center", "left", "left", "left"])};
`
const ParagraphCenter = styled(Paragraph)`
  text-align: center;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  /* ${breakpoints("width", ["100%", "90%", "90%", "90%"])}; */
`

const TextContainer = styled.div`
  margin-bottom: ${props => props.theme.gap * 2}px;
`

export const SobrePage: React.FC = ({}) => {
  const { t } = useTranslation()

  return (
    <Container>
      <TitleContainer>
        <Title style={{ textTransform: "uppercase" }}>
          {t("pages.home.about.title")}
        </Title>
        <SubTitle>{t("pages.about.subtitle")}</SubTitle>
      </TitleContainer>

      <TextContainer>
        <ParagraphCenter>{t("pages.about.text")}</ParagraphCenter>
        <ParagraphCenter>{t("pages.about.text2")}</ParagraphCenter>
        <ParagraphCenter>{t("pages.about.text3")}</ParagraphCenter>
        <ParagraphCenter>{t("pages.about.text4")}</ParagraphCenter>
        <ParagraphCenter>{t("pages.about.text5")}</ParagraphCenter>
      </TextContainer>

      <Block basis="100%" style={{ width: `${100}%` }}>
        <ImgProvider
          fileName="factory.jpg"
          alt="Fábrica Tumar"
          style={{ width: "100%" }}
        />
      </Block>

      <Block gap="20px">
        <Block basis="40%">
          <ImgProvider
            fileName="33.PNG"
            alt="Analizando um projeto"
            style={{ width: "100%" }}
          />
        </Block>
        <Block
          basis="60%"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <ImgProvider
            fileName="machine-power.jpg"
            alt="Toque"
            style={{ width: "100%" }}
          />
        </Block>
      </Block>
      <Block gap="20px" style={{ marginTop: -20 }}>
        <Block basis="38%">
          <ImgProvider
            fileName="34.PNG"
            alt="Analizando um projeto"
            style={{ width: "100%" }}
          />
        </Block>
        <Block
          basis="38%"
          style={{ flexDirection: "column", justifyContent: "flex-end" }}
        >
          <ImgProvider
            fileName="35.PNG"
            alt="Toque"
            style={{ width: "100%" }}
          />
        </Block>
        <VerticalImageBlock
          basis="24%"
          style={{ flexDirection: "column", justifyContent: "flex-end" }}
        >
          <ImgProvider
            fileName="36.jpeg"
            alt="Toque"
            style={{ width: "100%" }}
          />
        </VerticalImageBlock>
      </Block>
    </Container>
  )
}
