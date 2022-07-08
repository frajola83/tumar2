import { Link } from "gatsby"
import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { FooterLogo } from "./FooterLogo"
import { Container } from "../common/layout/Boxes"
import {Flex} from "../common/Flex"

interface FooterDesktopContentProps { }

const Holder = styled(Container)`
  align-items: center;
  display: none;
  height: 300px;
  gap: ${props => props.theme.gap}px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lighterGrey};
  ${breakpoints("display", ["none", "none", "none", "flex"])}
`
const FooterList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const FooterListItem = styled.li`
  margin-bottom: ${props => props.theme.gap / 2}px;
`

const FooterListLink = styled(Link)`
  color: #fefefc;
  font-size: 11px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`
const FooterListTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.gap}px;
  &:after {
    content: " ";
    width: 120px;
    display: block;
    height: 1px;
    margin-top: 5px;
    background-color: ${props => props.theme.colors.lighterGrey};
  }
`
const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  gap: ${props => props.theme.gap}px;
`

export const FooterDesktopContent: React.FC<FooterDesktopContentProps> = ({ }) => {
    return (
        <Holder>
            <Flex>
                <FooterLogo />
            </Flex>
            <ListsContainer>
                <Flex direction="column">
                    <FooterListTitle>institucional</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/sobre-a-tumar">a tumar</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/designers">designers</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/politica-de-privacidade">
                                política de privacidade
                            </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="http://tumar.com.br/area-restrita/">
                                área restrita
                            </FooterListLink>
                        </FooterListItem>
                    </FooterList>
                </Flex>
                <Flex direction="column">
                    <FooterListTitle>fale conosco</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/contato">contato</FooterListLink>
                        </FooterListItem>
                        {/* <FooterListItem>
              <FooterListLink to="/representantes">
                representantes
              </FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/trabalhe-conosco">
                trabalhe conosco
              </FooterListLink>
            </FooterListItem> */}
                    </FooterList>
                </Flex>
                <Flex direction="column">
                    <FooterListTitle>produtos</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/produtos/banquetas">
                                banquetas
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/cadeiras">cadeiras</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/mesas-de-jantar">
                                mesas de jantar
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/mesas-laterais-centro">
                                mesas laterais e de centro
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/poltronas">
                                poltronas
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/bancos-e-puffs">
                                bancos e puffs
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/luminarias">
                                luminárias
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/carro-bar">
                                carro bar
              </FooterListLink>
                        </FooterListItem>
                    </FooterList>
                </Flex>
            </ListsContainer>
        </Holder>
    )
}
