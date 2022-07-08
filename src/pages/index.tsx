import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { LanguageSelect } from "../components/common/LanguageSelect"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <LanguageSelect />
            <h1>{t("nav.about")}</h1>
        </Layout>
    )
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
