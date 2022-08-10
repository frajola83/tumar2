import React, { useState } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ButtonCta } from "../common/Buttons"
import { ContactSuccess } from "./ContactSuccess"
import { Loader } from "./Loader"

const Container = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 90%;
  ${breakpoints("width", ["90%", "90%", "80%", "70%"])};
`
const InputGroup = styled.div`
  margin-bottom: 40px;
`

const InputLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`

const InputControl = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  font-size: 18px;
  max-width: 100%;
  min-width: 100%;
  padding: 15px 0;
  text-indent: 15px;
`

const InputControlTextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  font-size: 18px;
  max-width: 100%;
  min-width: 100%;
  padding: 15px 0;
  text-indent: 15px;
`

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const ErrorContainer = styled.div`
  align-items: center;
  background-color: #ad828e;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin-bottom: 40px;
  padding: 40px;
  text-align: center;
`

const ErrorTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`
const ErrorText = styled.p``

import Axios from "axios"
import { useTranslation } from "react-i18next"

interface ContactInfoFromSite {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactInfoToServer {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

const parseInfo = (info: ContactInfoFromSite): ContactInfoToServer => ({
  nome: info.name,
  email: info.email,
  mensagem: info.message,
  telefone: info.phone,
})

export const ContactForm: React.FC = ({}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { t } = useTranslation()

  const showForm = !loading && !submitted
  const showLoading = loading && !submitted
  const showSuccess = !loading && submitted

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    const url = "https://tumar.com.br/actions/contato.php"
    e.preventDefault()
    setLoading(true)
    setHasError(false)
    try {
      await Axios.post(
        url,
        parseInfo({
          name,
          email,
          phone,
          message,
        })
      )
      setLoading(false)
      setSubmitted(true)
    } catch (error) {
      setLoading(false)
      setHasError(true)
    }
  }

  const RenderError = () => (
    <ErrorContainer>
      <ErrorTitle>Ocorreu um erro</ErrorTitle>
      <ErrorText>
        Ocorreu um erro ao enviar sua mensagem. Verifique o preenchimento dos
        campos obrigatórios(marcados com "*") e tente novamente.
      </ErrorText>
    </ErrorContainer>
  )

  return (
    <Container>
      {hasError ? <RenderError /> : null}
      {showForm ? (
        <form
          style={{ width: "100%" }}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => submit(e)}
        >
          <InputGroup>
            <InputLabel>{t("footer.contact.form.name")}*</InputLabel>
            <InputControl
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>{t("footer.contact.form.email")}*</InputLabel>
            <InputControl
              name="email"
              value={email}
              type="email"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>{t("footer.contact.form.phone")}</InputLabel>
            <InputControl
              name="phone"
              value={phone}
              type="phone"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>{t("footer.contact.form.message")}</InputLabel>
            <InputControlTextArea
              name="message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
          </InputGroup>
          <ButtonContainer>
            <ButtonCta type="submit" style={{ fontSize: 18 }}>
              {t("pages.contact.send")}
            </ButtonCta>
          </ButtonContainer>
        </form>
      ) : null}
      {showLoading ? <Loader visible={showLoading} /> : null}
      {showSuccess ? <ContactSuccess visible={submitted} /> : null}
    </Container>
  )
}
