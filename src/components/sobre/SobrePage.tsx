import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/styledResponsive"
import { ImgProvider } from "../common/ImgGraph"
import { Container } from "../common/layout/Boxes"

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

export const SobrePage: React.FC = ({ }) => {
  return (
    <Container>
      <TitleContainer>
        <Title style={{ textTransform: "uppercase" }}>Tumar.</Title>
        <SubTitle>
          Uma trama perfeita entre <br />
          qualidade e design.
        </SubTitle>
      </TitleContainer>

      <TextContainer>
        <ParagraphCenter>
          A paixão por produzir com qualidade sempre esteve presente na Tumar
          desde sua fundação, em 1992. Nascida na Serra Gaúcha, região
          colonizada por italianos e onde o fazer bem feito é algo fortemente
          enraizado na cultura local, a Tumar foi crescendo rapidamente graças a
          esta maneira de pensar e trabalhar.
        </ParagraphCenter>
        <ParagraphCenter>
          Em constante evolução, a Tumar foi aos poucos percebendo que seu
          público queria mais do que produtos com qualidade. Queria também
          beleza, funcionalidade e diferenciação. Queria, basicamente, design.
        </ParagraphCenter>
        <ParagraphCenter>
          Assim, a Tumar foi se aperfeiçoando e passou a investir tanto na
          tecnologia de seu parque fabril quanto no talento e na criatividade
          das pessoas, desenvolvendo produtos internamente ou em parceria com
          renomados designers nacionais.
        </ParagraphCenter>
        <ParagraphCenter>
          Hoje a Tumar é uma marca reconhecida, que entrega produtos com
          qualidade e design para o cada vez mais exigente universo da decoração
          brasileira.
        </ParagraphCenter>
        <ParagraphCenter>
          A Tumar tem grande orgulho de sua trajetória até aqui, feita com muito
          trabalho, investimento e visão de futuro.
        </ParagraphCenter>
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
            fileName="about-touch.jpg"
            alt="Analizando um projeto"
            style={{ width: "100%" }}
          />
        </Block>
        <Block
          basis="60%"
          style={{ flexDirection: "column", justifyContent: "flex-end" }}
        >
          <ImgProvider
            fileName="machine-power.jpg"
            alt="Toque"
            style={{ width: "100%" }}
          />
        </Block>
      </Block>
      <Block gap="20px" style={{ marginTop: -20 }}>
        <Block basis="50%">
          <ImgProvider
            fileName="women-power.jpg"
            alt="Analizando um projeto"
            style={{ width: "100%" }}
          />
        </Block>
        <Block
          basis="50%"
          style={{ flexDirection: "column", justifyContent: "flex-end" }}
        >
          <ImgProvider
            fileName="chair.jpg"
            alt="Toque"
            style={{ width: "100%" }}
          />
        </Block>
      </Block>
    </Container>
  )
}
