import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Facebook from "../../images/facebook.svg"
import Instagram from "../../images/instagram.svg"
import Warehouse from "../../images/3dwarehouse.png"

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 131px;
`

const SocialLink = styled(Link)`
  display: block;
  transition: all 0.3s ease-in-out;
  font-size: 23px;
  opacity: .9;
  &:hover {
    opacity: 1;
  }
`

const Icon = styled.img`
  width: 20px;
`

interface SocialProps {
  light: boolean
}

export const Social: React.FC<SocialProps> = ({ light = false }) => {
  return (
    <SocialContainer>
      <SocialLink to="https://facebook.com/tumarmoveis">
        <Icon src={Facebook} alt="Tumar Facebook" />
      </SocialLink>
      <SocialLink to="https://instagram.com/tumarmoveis">
        <Icon src={Instagram} alt="Tumar Facebook" />
      </SocialLink>
      <SocialLink to="https://3dwarehouse.sketchup.com/by/tumarmoveis">
        <Icon src={Warehouse} alt="Tumar Facebook" style={{ width: 33 }} />
      </SocialLink>
    </SocialContainer>
  )
}
