import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../../utils/styledResponsive"
import { useTranslation } from "react-i18next"

export const ProductConcept = ({text}: {text: string}) => {

    const { t } = useTranslation()

    return (
        <Container>
            <DescriptionTitle>{t("concept.title")}</DescriptionTitle>
            <DescriptionText>{text}</DescriptionText>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: ${props => props.theme.gap * 4}px;
`

const DescriptionTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.gap / 2}px;
  ${breakpoints("font-size", ["inherit", "inherit", "18px", "22px"])}
`
const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: ${props => props.theme.gap * 2}px;
  ${breakpoints("font-size", ["16px", "16px", "16px", "18px"])}
  ${breakpoints("line-height", ["19px", "19px", "22px", "25px"])}
`