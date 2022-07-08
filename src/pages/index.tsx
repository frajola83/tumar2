import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { LanguageSelect } from "../components/common/LanguageSelect"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/common/layout/Layout"
import { GalugaSlider } from "../components/slider/GalugaSlider"

const IndexPage = () => {
  const { t } = useTranslation()
  return <Layout>
    <GalugaSlider />
  </Layout>
} 

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
