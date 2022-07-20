import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Hamburguer from "hamburger-react"
import { breakpoints } from "../../utils/styledResponsive"
import { theme } from "../../../theme"
import { Route, routes } from "../../routes"
import { useTranslation } from "react-i18next"
import { LanguageSelect } from "../common/LanguageSelect"

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  position: relative;
`

const LanguageSelectContainer = styled.div`
  position: absolute;
  top: -10px;
  ${breakpoints("top", ["-10px", "-10px", "-20px", "-20px"])}
  right: 0;
`

const NavListItem = styled.li`
  display: block;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  transition: all 0.45s ease-in-out;
  height: 25px;
`

const NavLink = styled(Link)`
  &:after {
    transition: all 0.45s ease-in-out;
  }
  &:hover {
    text-shadow: 1px 0 0 #000;
    &:after {
      background-color: #000;
      content: "";
      display: block;
      height: 1px;
      margin: auto;
      margin-top: 10px;
      transition: all 0.45s ease-in-out;
    }
  }
  color: ${theme.colors.darkGrey};
  display: inline-block;
  font-size: 13px;
  line-height: 1.3em;
  font-weight: bold;
  /* padding: 3px 25px; */

  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  ${breakpoints("font-size", ["0", "0", "11px", "13px"])};
  &:visited {
    color: ${theme.colors.darkGrey};
  }
`

const NavList = styled.ul`
  display: none;
  justify-content: space-between;
  padding-left: 0;
  width: 450px;
  ${breakpoints("width", ["0", "0", "450px", "600px"])}
  ${breakpoints("display", ["none", "none", "flex", "flex"])}
`

const NavHamburguerContainer = styled.div`
  ${breakpoints("display", ["flex", "flex", "none", "none"])}
`

const NavSelected = styled(NavLink)`
  text-shadow: 1px 0 0 #000;
  &:after {
    background-color: #000;
    content: "";
    display: block;
    height: 1px;
    margin: auto;
    margin-top: 10px;
    transition: all 0.45s ease-in-out;
  }
`

interface NavProps {
  toggled: boolean
  toggle: () => void
}

export const Nav: React.FC<NavProps> = ({ toggled, toggle }) => {
  const [location, setLocation] = useState<any>(null)
  const { t } = useTranslation()
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location)
    }
  }, [])

  return (
    <NavContainer>
      <LanguageSelectContainer>
        <LanguageSelect />
      </LanguageSelectContainer>
      <NavList>
        {routes.map((route: Route, index: number) => {
          let pathname: any = null

          if (location) {
            pathname = location.pathname
          }

          if (pathname && pathname.length === 1 && route.name === "home") {
            return (
              <NavListItem key={index}>
                <NavSelected to={route.to}>
                  {t(`nav.${route.translateKey}`)}
                </NavSelected>
              </NavListItem>
            )
          }

          if (route.name !== "home") {
            if (pathname && pathname.indexOf(route.to) !== -1) {
              return (
                <NavListItem key={index}>
                  <NavSelected to={route.to}>
                    {t(`nav.${route.translateKey}`)}
                  </NavSelected>
                </NavListItem>
              )
            } else {
              return (
                <NavListItem key={index}>
                  <NavLink to={route.to}>
                    {t(`nav.${route.translateKey}`)}
                  </NavLink>
                </NavListItem>
              )
            }
          } else {
            return (
              <NavListItem key={index}>
                <NavLink to={route.to}>
                  {t(`nav.${route.translateKey}`)}
                </NavLink>
              </NavListItem>
            )
          }
        })}
      </NavList>
      <NavHamburguerContainer>
        <Hamburguer toggled={toggled} toggle={toggle} />
      </NavHamburguerContainer>
    </NavContainer>
  )
}
