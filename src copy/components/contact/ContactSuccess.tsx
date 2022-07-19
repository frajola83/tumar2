import React from 'react'
import styled from 'styled-components';
import { LinkCta } from '../common/Buttons';
import { ContactSuccessIcon } from './ContactSuccessIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  text-align: center;
`

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const Text = styled.p`
  font-size: 18px;
`

const Controls = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 20px;
`

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

interface ContactSuccessProps {
  visible: boolean
}

export const ContactSuccess: React.FC<ContactSuccessProps> = ({ visible }) => {
  return (
    <Container>
      <Title>Mensagem enviada com sucesso!</Title>
      <Text>Em breve retornaremos o seu contato.</Text>
      <IconContainer>
        <ContactSuccessIcon />
      </IconContainer>
      <Controls>
        <LinkCta to="/produtos">Veja nossos produtos</LinkCta>
        <LinkCta to="/">Ir para o início</LinkCta>
      </Controls>
    </Container>
  );
}