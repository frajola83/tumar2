import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { PageTitle } from "../common/PageTitle"
import { ContactForm } from "./ContactForm"
import { useTranslation } from "react-i18next"

const Container = styled.div`
  margin: auto;
  width: 90%;
  ${breakpoints("width", ["90%", "90%", "70%", "40%"])}
`

const ContactText = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`
export const ContactPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <PageTitle>{t("pages.contact.title")}</PageTitle>
      <ContactText>{t("pages.contact.text")}</ContactText>
      <ContactForm />
    </Container>
  )
}
