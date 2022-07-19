import React from 'react'
import styled, { keyframes } from 'styled-components';
import loaderIcon from '../../images/loading.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 180px;
`
const Image = styled.img`
  animation: ${rotate} 2s linear infinite;
  display: block;
  margin: auto;
  width: 150px;
  filter: grayscale();
`

const Text = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`

interface LoaderProps {
  visible: boolean
}

export const Loader: React.FC<LoaderProps> = ({ visible }) => {
  if (visible) {
    return (
      <Container>
        <Image src={loaderIcon} alt="Carregando..." />
        <Text>Enviando...</Text>
      </Container>
    );
  }
  return null;
}