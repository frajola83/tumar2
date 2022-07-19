import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { ImageProvider } from "../common/ImageProvider"
import "./carousel.css"
import React from "react";

const Slide = styled(Link)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
`

const SliderContainer = styled.div`
  height: auto;
  width: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`


export const GalugaSlider = () => {
  return (
    <SliderContainer>
      <Carousel showThumbs={false}>
        <Slide to="/produtos/poltronas/abraccio">
            <ImageProvider src="1920-banner-abbraccio" alt="Poltrona Abbraccio" />
        </Slide>
        <Slide to="/produtos/poltronas/abraccio">
            <ImageProvider src="1920-banner-natai" alt="Natai" />
        </Slide>
      </Carousel>
    </SliderContainer>
  )
}
