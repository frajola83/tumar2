import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
//@ts-ignore
import logoImg from "../../images/logo.png"

export const StyledLogoImg = styled.img`
  /* max-width: 100%; */
  display: block;
  width: 150px;
  /* ${breakpoints("width", ["150px", "150px", "150px", "214px"])} */
`
export const LogoImg = () => <StyledLogoImg src={logoImg} alt="Tumar Design" />
