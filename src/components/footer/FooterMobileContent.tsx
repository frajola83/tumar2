import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { FooterNewsletter } from "./FooterNewsletter"

const Holder = styled.div`
  align-items: center;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 80%;
  ${breakpoints("display", ["flex", "flex", "flex", "none"])}
  ${breakpoints("width", ["80%", "400px", "400px", "0"])}
`

export const FooterMobileContent: React.FC = ({}) => {
  return (
    <Holder>
      <FooterNewsletter isMobile />
    </Holder>
  )
}
