import React from "react"
import { theme } from "../../../../theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset"
import { Section, Container } from "./Boxes"
import { Footer } from "../../footer/Footer"
import { NavBar } from "../../navBar/NavBar"

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${theme.colors.sand};
    font-family: Raleway, "Arial Narrow", Arial, sans-serif!important;
    font-size: 16px;
    font-weight: normal;
  }
  p {
    line-height: 24px;
  }
  .gatsby-image-wrapper {
      /* transition: 1s all ease-in-out!important; */
      img {
        /* transition: 1s all ease-in-out!important; */
      }
  }
  .carousel .control-dots .dot {
    width: 30px;
    height: 30px;
    box-shadow: none;
    opacity: .6;
    background-color: #e4e4e4;
    &.selected {
      background-color: #ccc;
    }
  }
`

interface LayoutProps {
  children?: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Section style={{ background: "#fff" }}>
          <Container>
            <NavBar />
          </Container>
        </Section>
        <Section>{children}</Section>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
