import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { theme } from "../../../theme"
import { breakpoints } from "../../utils/styledResponsive"
import { LinkCta } from "../common/Buttons"
import { ImageProvider } from "../common/ImageProvider"

const ImgInner = styled.div`
  overflow: hidden;
  transition: 1s all ease-in-out;
  width: 100%;
`

const ImageContainerTitle = styled.h6`
  color: ${props => props.theme.colors.darkGrey};
  font-weight: 900;
  position: absolute;
  text-transform: uppercase;
  font-size: 13px;
  z-index: 1;
  transition: 1s all ease-in-out;
`
const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  &:hover {
    ${ImgInner} {
      transform: scale(1.1);
    }
    ${ImageContainerTitle} {
      text-shadow: 1px 1px 0 #000;
    }
  }
`

const Banquetas = styled(ImageContainer)`
  ${breakpoints("height", ["100%", "280px", "280px", "280px"])}
  ${breakpoints("width", ["100%", "40%", "35%", "30%"])}
`
const Cadeiras = styled(ImageContainer)`
  ${breakpoints("height", ["100%", "280px", "280px", "280px"])}
  ${breakpoints("width", ["100%", "60%", "65%", "70%"])}
`
const Mesas = styled(ImageContainer)`
  ${breakpoints("height", ["100%", "300px", "300px", "300px"])}
  width: 100%;
`
const Bancos = styled(ImageContainer)`
  ${breakpoints("height", ["100%", "310px", "300px", "300px"])}
  ${breakpoints("width", ["100%", "65%", "50%", "60%"])}
`

const Poltronas = styled(ImageContainer)`
  ${breakpoints("height", ["100%", "310px", "300px", "300px"])}
  ${breakpoints("width", ["100%", "35%", "50%", "40%"])}
`

const ImgInnerPoltrona = styled(ImgInner)`
  margin-top: inherit;
  ${breakpoints("margin-top", ["inherit", "inherit", "-82px", "-82px"])}
`

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.gap}px;
  margin: auto;
  margin-top: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 2}px;
  max-width: 768px;
  ${breakpoints("margin-bottom", [
    `${theme.gap * 2}px`,
    `${theme.gap * 2}px`,
    `${theme.gap * 3}px`,
    `${theme.gap * 4}px`,
  ])}
  ${breakpoints("margin-top", [
    `${theme.gap * 2}px`,
    `${theme.gap * 2}px`,
    `${theme.gap * 3}px`,
    `${theme.gap * 4}px`,
  ])}
`
const GalleryGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.gap}px;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])}
`

const CtaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;
`

const titleStyles = {
  topRight: {
    right: theme.gap,
    top: theme.gap,
  },
  topLeft: {
    left: theme.gap,
    top: theme.gap,
  },
  bottomRight: {
    right: theme.gap,
    bottom: theme.gap,
  },
  bottomLeft: {
    left: theme.gap,
    bottom: theme.gap,
  },
}

export const HomeGallery: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Gallery>
      <GalleryGroup>
        <Banquetas>
          <Link to="/produtos/banquetas">
            <ImageContainerTitle style={titleStyles.topRight}>
              {t("pages.home.gallery.stools")}
            </ImageContainerTitle>
            <ImgInner>
              <StaticImage
                src="../../images/home/tie-home.jpg"
                alt="Banquetas"
              />
            </ImgInner>
          </Link>
        </Banquetas>
        <Cadeiras>
          <Link to="/produtos/cadeiras">
            <ImageContainerTitle style={titleStyles.topRight}>
              {t("pages.home.gallery.chairs")}
            </ImageContainerTitle>
            <ImgInner>
              <StaticImage
                src="../../images/home/sela-home.jpg"
                alt="Banquetas"
              />
            </ImgInner>
          </Link>
        </Cadeiras>
      </GalleryGroup>
      <GalleryGroup>
        <Mesas>
          <Link to="/produtos/mesas-de-jantar">
            <ImageContainerTitle style={titleStyles.topLeft}>
              {t("pages.home.gallery.tables")}
            </ImageContainerTitle>
            <ImgInner>
              <StaticImage
                src="../../images/home/nebula-home.jpg"
                alt="Banquetas"
              />
            </ImgInner>
          </Link>
        </Mesas>
      </GalleryGroup>
      <GalleryGroup>
        <Bancos>
          <Link to="/produtos/bancos-e-puffs">
            <ImageContainerTitle style={titleStyles.topLeft}>
              {t("pages.home.gallery.benchesAndOttomans")}
            </ImageContainerTitle>
            <ImgInner>
              <StaticImage
                src="../../images/home/blu-home.jpg"
                alt="Banquetas"
              />
            </ImgInner>
          </Link>
        </Bancos>
        <Poltronas>
          <Link to="/produtos/poltronas">
            <ImageContainerTitle style={titleStyles.topRight}>
              {t("pages.home.gallery.armchairs")}
            </ImageContainerTitle>
            <ImgInnerPoltrona>
              <StaticImage
                src="../../images/home/abbraccio-home.jpg"
                alt="Banquetas"
              />
            </ImgInnerPoltrona>
          </Link>
        </Poltronas>
      </GalleryGroup>
      <CtaContainer>
        <LinkCta to="/produtos">{t("pages.home.btnMoreProducts")}</LinkCta>
      </CtaContainer>
    </Gallery>
  )
}
