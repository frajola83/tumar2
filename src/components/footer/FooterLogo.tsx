import React from "react"
import styled from "styled-components"
import { Social } from "../common/Social"
import logoWhiteImg from "../../images/logo-white.png"
import { Link } from "gatsby"

const LogoContainer = styled(Link)`
  width: 151px;
`
const LogoWhite = styled.img`
  width: 100%;
`

interface FooterLogoProps {}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FooterLogo: React.FC<FooterLogoProps> = ({}) => {
  return (
    <Holder>
      <LogoContainer to="/">
        <LogoWhite src={logoWhiteImg} />
      </LogoContainer>
      <Social light />
    </Holder>
  )
}
