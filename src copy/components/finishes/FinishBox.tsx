import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"

const FinishContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  ${breakpoints("flex-basis", ["100%", "44%", "29%", "29%"])};
`
const PicContainer = styled.div`
  width: 100%;
`

const TextContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.gap};
  text-align: center;
  width: 100%;
  font-size: 11px;
  ${breakpoints("font-size", ["11px", "11px", "13px", "13px"])};
`

const styles = {
  image: {
    maxWidth: `${100}%`,
    display: "block",
    height: 150,
    overflow: "hidden",
  },
}

interface FinishBoxProps {
  title: string
  slug: string
}

export const FinishBox: React.FC<FinishBoxProps> = ({ title, slug }) => {
  return (
    <FinishContainer>
      <PicContainer>
        <ImgProvider
          fileName={`${slug}.jpg`}
          alt={title}
          style={styles.image}
        />
      </PicContainer>
      <TextContainer>{title}</TextContainer>
    </FinishContainer>
  )
}
