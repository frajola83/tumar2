import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { ImageProvider } from "../common/ImageProvider"
import "./carousel.css"
import React, { useContext } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import { I18nextContext } from "gatsby-plugin-react-i18next"

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
  console.log("language", context.language);

  if (context.language === "pt") {
      return (
        <>
          <SliderContainer>
            <Carousel showThumbs={false}>
              <Slide to="/produtos/cadeiras/sela">
                <ImageProvider src="sela-banner-desktop-1920" alt="sela" />
              </Slide>
              <Slide to="/produtos/mesa-puff/petra">
                <ImageProvider src="1920-banner-petra-pt" alt="petra" />
              </Slide>
            </Carousel>
          </SliderContainer>
          <SliderMobile>
            <Carousel showThumbs={false}>
              <Slide to="/produtos/cadeiras/sela">
                <ImageProvider src="sela-banner-mobile-768" alt="sela" />
              </Slide>
              <Slide to="/produtos/mesa-puff/petra">
                <ImageProvider src="768-banner-petra-pt" alt="petra" />
              </Slide>
            </Carousel>
          </SliderMobile>
        </>
      )
  }

  if (context.language === "en") {
    return (
      <>
        <SliderContainer>
          <Carousel showThumbs={false}>
            <Slide to="/produtos/cadeiras/sela">
              <ImageProvider src="sela-banner-desktop-1920-en" alt="sela" />
            </Slide>
            <Slide to="/produtos/mesa-puff/petra">
              <ImageProvider src="1920-banner-petra-en" alt="petra" />
            </Slide>
          </Carousel>
        </SliderContainer>
        <SliderMobile>
          <Carousel showThumbs={false}>
            <Slide to="/produtos/cadeiras/sela">
              <ImageProvider src="sela-banner-mobile-768-en" alt="sela" />
            </Slide>
            <Slide to="/produtos/mesa-puff/petra">
              <ImageProvider src="768-banner-petra-en" alt="petra" />
            </Slide>
          </Carousel>
        </SliderMobile>
      </>
    )
  }

  if (context.language === "es") {
    return (
      <>
        <SliderContainer>
          <Carousel showThumbs={false}>
            <Slide to="/produtos/cadeiras/sela">
              <ImageProvider src="sela-banner-desktop-1920-es" alt="sela" />
            </Slide>
            <Slide to="/produtos/mesa-puff/petra">
              <ImageProvider src="1920-banner-petra-es" alt="petra" />
            </Slide>
          </Carousel>
        </SliderContainer>
        <SliderMobile>
          <Carousel showThumbs={false}>
            <Slide to="/produtos/cadeiras/sela">
              <ImageProvider src="sela-banner-mobile-768-es" alt="sela" />
            </Slide>
            <Slide to="/produtos/mesa-puff/petra">
              <ImageProvider src="768-banner-petra-es" alt="petra" />
            </Slide>
          </Carousel>
        </SliderMobile>
      </>
    )
  }

}
