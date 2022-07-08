import React from "react"
import styled from "styled-components"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`

export const LanguageSelect = () => {
  const { languages, changeLanguage } = useI18next()
    console.log({languages});
  return (
    <LanguagesContainer>
      {languages.map(language => (
        <a
          key={language}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(language)
          }}
        >
          {language}
        </a>
      ))}
    </LanguagesContainer>
  )
}
