import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { ImageProvider } from "../common/ImageProvider"
import "./carousel.css"
import React, { useContext } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"

const Slide = styled(Link)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
`

const SliderContainer = styled.div`
  height: auto;
  width: 100%;
  display: none;
  ${breakpoints("display", ["none", "none", "block", "block"])}
`

const SliderMobile = styled.div`
  height: auto;
  width: 100%;
  display: block;
  ${breakpoints("display", ["block", "block", "none", "none"])}
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`

export const GalugaSlider = () => {
  const context = useContext(I18nextContext)
  console.log("language", context.language)

  switch (context.language) {
    case "pt":
      console.log("pt =======================")
      return (
        <>
          <SliderContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-desktop-1920-pt.jpg"
                  alt="delta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderContainer>
          <SliderMobile>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderMobile>
        </>
      )
    case "en":
      console.log("en =======================")
      return (
        <>
          <SliderContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-desktop-1920-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-desktop-1920-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-desktop-1920-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-desktop-1920-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderContainer>
          <SliderMobile>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-mobile-768-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-mobile-768-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-mobile-768-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-mobile-768-en.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderMobile>
        </>
      )
    case "es":
      console.log("es =======================")
      return (
        <>
          <SliderContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-desktop-1920-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-desktop-1920-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-desktop-1920-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-desktop-1920-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderContainer>
          <SliderMobile>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/goat">
                <StaticImage
                  src="../../images/home/banners/dom-banner-mobile-768-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/gamboa">
                <StaticImage
                  src="../../images/home/banners/gamboa-banner-mobile-768-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/carena-cad">
                <StaticImage
                  src="../../images/home/banners/bodo-banner-mobile-768-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/poltronas/ferrero">
                <StaticImage
                  src="../../images/home/banners/mitti-banner-mobile-768-es.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderMobile>
        </>
      )
    default:
      return (
        <>
          <SliderContainer>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/delta">
                <StaticImage
                  src="../../images/home/banners/delta-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/levi">
                <StaticImage
                  src="../../images/home/banners/levi-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                />
              </Slide>
              <Slide to="/produtos/poltronas/toro">
                <StaticImage
                  src="../../images/home/banners/toro-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                />
              </Slide>
              <Slide to="/">
                <StaticImage
                  src="../../images/home/banners/manifesto-banner-desktop-1920-pt.jpg"
                  alt="Trenta"
                />
              </Slide>
            </Carousel>
          </SliderContainer>
          <SliderMobile>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <Slide to="/produtos/poltronas/trenta">
                <StaticImage
                  src="../../images/home/banners/trenta-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
              <Slide to="/produtos/cadeiras/sela">
                <StaticImage
                  src="../../images/home/banners/sela-banner-mobile-768-pt.jpg"
                  alt="Trenta"
                  quality={100}
                />
              </Slide>
            </Carousel>
          </SliderMobile>
        </>
      )
  }
}
