import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { Flex } from "../common/Flex"
import { LinkCta } from "../common/Buttons"
import { ImgProvider } from "../common/ImgGraph"

const Holder = styled(Flex)`
  gap: ${props => props.theme.gap * 2}px;
  flex-direction: column;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])}
`

const TextContainer = styled(Flex)`
  background: #fff;
  /* padding: ${props => props.theme.gap * 2}px; */
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: -125px;
`

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
  text-transform: uppercase;
`
const Text = styled.p`
  height: 177px;
  margin-bottom: 0;
  ${breakpoints("height", ["177px", "177px", "150px", "120px"])}
`
const Inner = styled(Flex)`
  width: 80%;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 40px;
`

export const HomeDesigners: React.FC = ({}) => {
  return (
    <Holder>
      <Flex direction="column" align="center" justify="center">
        <ImgProvider
          fileName="designers.jpg"
          alt="Designers Tumar"
          style={{ display: "block", width: "100%", zIndex: -1 }}
        />
        <TextContainer>
          <Inner>
            <Title>Designers</Title>
            <Text>
              Conheça os grandes nomes que trabalham ao nosso lado e explore
              suas criações.
            </Text>
            <LinkCta to="/designers" style={{ alignSelf: "flex-end" }}>
              Conheça
            </LinkCta>
          </Inner>
        </TextContainer>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <ImgProvider
          fileName="serra.jpg"
          alt="A Tumar"
          style={{ display: "block", width: "100%", zIndex: -1 }}
        />
        <TextContainer>
          <Inner>
            <Title>A Tumar</Title>
            <Text>
              A Tumar atua no mercado de mobiliário desde 1992, tornando-se
              referência de qualidade no segmento e conquistando, desta forma,
              muita credibilidade junto a seus clientes.
            </Text>
            <LinkCta to="/sobre-a-tumar" style={{ alignSelf: "flex-end" }}>
              Saiba mais
            </LinkCta>
          </Inner>
        </TextContainer>
      </Flex>
    </Holder>
  )
}
