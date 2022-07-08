import React from "react"
import styled from "styled-components"
import { FooterDesktopContent } from "./FooterDesktopContent"
import { FooterMobileContent } from "./FooterMobileContent"

const StyledFooterContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const CopyRight = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lighterGrey};
  color: ${props => props.theme.colors.darkGrey};
  font-size: 13px;
  padding: 10px 0;
`
const CopyRightText = styled.p`
  text-align: center;
  color: #999;
  line-height: 22px;
`

const ThmtLogo = styled.img`
  margin-top: -5px;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }
`
const ThmtLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-left: 5px;
`

export const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <>
        <FooterMobileContent />
        <FooterDesktopContent />
        <CopyRight>
          <CopyRightText>
            © Copyright 2021 Tumar Design. Por
            <ThmtLink href="http://thematica.com.br">
              <ThmtLogo src="https://newmoveis.com.br/images/logo-thmt.png" />
            </ThmtLink>
          </CopyRightText>
        </CopyRight>
      </>
    </StyledFooterContainer>
  )
}
