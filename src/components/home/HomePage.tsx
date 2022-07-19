import React from "react"
import { Container, Section } from "../common/layout/Boxes"
// import { GalugaSlider } from "../slider/GalugaSlider"
import { HomeDesigners } from "./HomeDesigners"
import { HomeGallery } from "./HomeGallery"

export const HomePage: React.FC = ({ }) => {
  return (
    <>
      {/* <GalugaSlider /> */}
      <Section>
        <Container>
          <HomeGallery />
        </Container>
        <Container>
          <HomeDesigners />
        </Container>
      </Section>
    </>
  )
}
