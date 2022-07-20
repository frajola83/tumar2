import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { ImageProvider } from "../common/ImageProvider"
import "./carousel.css"
import React from "react";
import { breakpoints } from "../../utils/styledResponsive"

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
  return (
    <>
    <SliderContainer>
      <Carousel showThumbs={false}>
        <Slide to="/produtos/poltronas/abraccio">
            <ImageProvider src="1920-banner-abbraccio" alt="Poltrona Abbraccio" />
        </Slide>
        <Slide to="/produtos/poltronas/jangada">
            <ImageProvider src="1920-banner-jangada" alt="jangada" />
        </Slide>
        <Slide to="/produtos/luminarias/oroboro">
            <ImageProvider src="1920-banner-oroboro" alt="jangada" />
        </Slide>
      </Carousel>
    </SliderContainer>
    <SliderMobile>
    <Carousel showThumbs={false}>
      <Slide to="/produtos/poltronas/abraccio">
          <ImageProvider src="768-banner-abbraccio" alt="Poltrona Abbraccio" />
      </Slide>
      <Slide to="/produtos/poltronas/jangada">
          <ImageProvider src="768-banner-jangada" alt="jangada" />
      </Slide>
      <Slide to="/produtos/luminarias/oroboro">
          <ImageProvider src="768-banner-oroboro" alt="jangada" />
      </Slide>
    </Carousel>
  </SliderMobile>
  </>
  )
}
