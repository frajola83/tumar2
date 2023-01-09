import React, { useContext } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"
import { Finish } from "../../interfaces"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const FinishContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  ${breakpoints("flex-basis", ["100%", "44%", "44%", "44%"])};
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
    height: 200,
    overflow: "hidden",
  },
}

interface FinishBoxProps {
  finish: Finish
}

export const FinishBox: React.FC<FinishBoxProps> = ({ finish }) => {

  const context = useContext(I18nextContext)

  let finishName = finish.name

  if (context.language === "en") {
    finishName = finish.nameEn
  }

  if (context.language === "es") {
    finishName = finish.nameEs
  }

  return (
    <FinishContainer>
      <PicContainer>
        <ImgProvider
          fileName={`${finish.slug}.jpg`}
          alt={finishName}
          style={styles.image}
        />
      </PicContainer>
      <TextContainer>{finishName}</TextContainer>
    </FinishContainer>
  )
}
