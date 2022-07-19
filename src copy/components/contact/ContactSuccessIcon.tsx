import React from "react"
import styled from "styled-components"
//@ts-ignore
import successIcon from "../../images/success.svg"

const Image = styled.img`
  display: block;
  margin: auto;
  width: 100px;
`

export const ContactSuccessIcon: React.FC = () => {
  return <Image src={successIcon} alt="Sucesso" />
}
