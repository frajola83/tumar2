import React from "react"
import styled from "styled-components"
import { FooterLogo } from "./FooterLogo"

interface FooterNewsletterProps {
  isMobile: boolean
}

const Holder = styled.div`
  margin-top: ${props => props.theme.gap * 2}px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 100%;
`

export const FooterNewsletter: React.FC<FooterNewsletterProps> = ({
  isMobile = false,
}) => {
  return (
    <Holder>
      <FooterLogo />
    </Holder>
  )
}
