import { Link } from "gatsby"
import styled from "styled-components"

export const ButtonCta = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.darkGrey};
  padding: 10px 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color: #fff;
  }
`

export const LinkCta = styled(Link)`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.darkGrey};
  padding: 10px 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color: #fff;
  }
`


