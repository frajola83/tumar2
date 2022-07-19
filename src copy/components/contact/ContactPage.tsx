import React from 'react'
import { breakpoints } from '../../utils/styledResponsive';
import styled from 'styled-components';
import { PageTitle } from '../common/PageTitle';
import { ContactForm } from './ContactForm';

const Container = styled.div`
  margin: auto;
  width: 90%;
  ${breakpoints("width", ["90%", "90%", "70%", "40%"])}
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`
export const ContactPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>
        Contato
      </PageTitle>
      <ContactText>
        Para conhecer melhor nossos produtos, solicitar informações
        ou enviar sugestões, preencha o formulário. Nossa equipe está sempre
        pronta para atendê-lo.
      </ContactText>
      <ContactForm />
    </Container>
  );
}