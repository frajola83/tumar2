import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  align-self: center;
  justify-self: center;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`
