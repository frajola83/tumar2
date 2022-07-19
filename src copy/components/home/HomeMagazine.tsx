import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { Container } from "../layout/Boxes"

import { ButtonCta } from "../common/Buttons"
import { ImgProvider } from "../common/ImgGraph"

interface HomeMagazineProps {}

const Holder = styled(Container)`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.mediumGrey};
  gap: ${props => props.theme.gap}px;
  justify-content: center;
  padding-bottom: ${props => props.theme.gap}px;
  padding-top: ${props => props.theme.gap}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  margin-top: ${props => props.theme.gap * 4}px;
  flex-direction: column;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
`

const Item = styled.div`
  ${breakpoints("width", ["90%", "30%", "30%", "30%"])};
  padding: ${props => props.theme.gap}px;
`
const Title = styled.h5`
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: ${props => props.theme.gap}px;
  text-transform: uppercase;
`
const Action = styled.div`
  margin-top: ${props => props.theme.gap}px;
  ${breakpoints("margin-top", ["20px", "20px", "20px", "20px"])};
  width: 100%;
`

export const HomeMagazine: React.FC<HomeMagazineProps> = ({}) => {
  return (
    <Holder>
      <Item>
        <ImgProvider fileName="revista.jpg" alt="Revista Tumar" />
      </Item>
      <Item>
        <ImgProvider fileName="revista-aberta.jpg" alt="Revista Tumar" />
        <Action>
          <Title>Revista Tumar</Title>
          <ButtonCta>Acesse aqui</ButtonCta>
        </Action>
      </Item>
    </Holder>
  )
}
