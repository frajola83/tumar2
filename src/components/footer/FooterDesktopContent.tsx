import { Link } from "gatsby"
import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { FooterLogo } from "./FooterLogo"
import { Container } from "../common/layout/Boxes"
import {Flex} from "../common/Flex"
import { useTranslation } from "react-i18next"

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

    const {t} = useTranslation();

    return (
        <Holder>
            <Flex>
                <FooterLogo />
            </Flex>
            <ListsContainer>
                <Flex direction="column">
                    <FooterListTitle>{t("footer.institutional.title")}</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/sobre-a-tumar">{t("footer.institutional.links.about")}</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/designers">{t("footer.institutional.links.designers")}</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/politica-de-privacidade">
                                {t("footer.institutional.links.privacyPolicy")}
                            </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="http://tumar.com.br/area-restrita/">
                                {t("footer.institutional.links.restrictedArea")}
                            </FooterListLink>
                        </FooterListItem>
                    </FooterList>
                </Flex>
                <Flex direction="column">
                    <FooterListTitle>{t("footer.contact.title")}</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/contato">{t("footer.contact.links.contact")}</FooterListLink>
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
                    <FooterListTitle>{t("footer.products.title")}</FooterListTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListLink to="/produtos/banquetas">
                            {t("footer.products.links.stools")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/cadeiras">{t("footer.products.links.chairs")}</FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/mesas-de-jantar">
                                {t("footer.products.links.tables")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/mesas-laterais-centro">
                            {t("footer.products.links.sideAndCoffeeTables")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/poltronas">
                                {t("footer.products.links.armchairs")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/bancos-e-puffs">
                                {t("footer.products.links.benchesAndOttoman")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/luminarias">
                                {t("footer.products.links.lighting")}
              </FooterListLink>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListLink to="/produtos/carro-bar">
                                {t("footer.products.links.barCart")}
              </FooterListLink>
                        </FooterListItem>
                    </FooterList>
                </Flex>
            </ListsContainer>
        </Holder>
    )
}
