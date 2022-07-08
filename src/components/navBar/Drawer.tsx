import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Route, routes } from "../../routes"
import { LogoImg } from "./Logo"
// import { Social } from "../common/Social"

interface DrawerProps {
  open: boolean
}

const DrawerListItem = styled.li`
  border-top: ${props => props.theme.border};
  width: 100%;
`

const DrawerListItemLink = styled(Link)`
  border-bottom: ${props => props.theme.border};
  color: ${props => props.theme.colors.darkGrey};
  display: block;
  font-size: 14px;
  font-weight: bolder;
  padding: 15px 0;
  padding-left: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.colors.lighterGrey};
  }
`

const DrawerList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const DrawerContainer = styled.div`
  background-color: white;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
  height: 100vh;
  padding: ${props => props.theme.gap}px;
  width: 225px;
`

const RenderItems = (): JSX.Element => {
  const elements: JSX.Element[] = routes.map((route: Route, index: number) => {
    const styles = index === 0 ? { borderTopWidth: 1 } : { zIndex: 10 }
    return (
      <DrawerListItem key={route.name} style={styles}>
        <DrawerListItemLink to={route.to}>{route.name}</DrawerListItemLink>
      </DrawerListItem>
    )
  })
  return <DrawerList>{elements}</DrawerList>
}

const DrawerLogo = styled.div`
  align-items: "center";
  justify-content: flex-start;
  padding: 50px 10px;
  width: 150px;
`

const SocialContainer = styled.div`
  align-items: center;
  height: 180;
  justify-content: flex-start;
  width: 100%;
  margin-top: 40px;
`

export const Drawer: React.FC<DrawerProps> = ({ open = false }) => {
  return (
    <DrawerContainer>
      <DrawerLogo>
        <LogoImg />
      </DrawerLogo>
      <RenderItems />
      <SocialContainer>{/* <Social /> */}</SocialContainer>
    </DrawerContainer>
  )
}
