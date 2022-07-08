import React from "react"
import styled from "styled-components"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
`
const LanguageLink = styled(Link)`
  color: ${props => props.theme.colors.darkGrey};
`

export const LanguageSelect = () => {
  const { languages, originalPath } = useI18next()
  return (
    <LanguagesContainer>
      {languages.map(language => (
        <LanguageLink to={originalPath} language={language}>
          {language}
        </LanguageLink>
      ))}
    </LanguagesContainer>
  )
}
