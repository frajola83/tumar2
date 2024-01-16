import * as React from "react"
import Img from "gatsby-image"
import { graphql, Link, StaticQuery } from "gatsby"
import "./carousel.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

interface childImageSharpNode {
  childImageSharp: {
    fluid: any
  }
}
interface SlideShowComponentProps {
  nodes: childImageSharpNode[]
}

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

class SlideShowComponent extends React.Component<SlideShowComponentProps> {
  constructor(props: SlideShowComponentProps) {
    super(props)
  }

  render() {
    let banner1Sources: any[] = []
    let banner2Sources: any[] = []
    let banner3Sources: any[] = []
    let banner4Sources: any[] = []
    let banner5Sources: any[] = []


    for (const node of this.props.nodes) {
      const { fluid } = node.childImageSharp
      if (/banner-abbraccio/.test(fluid.src)) {
        if (/768/.test(fluid.src)) {
          banner1Sources = [
            ...banner1Sources,
            { ...fluid, media: "(max-width: 768px)" },
          ]
        } else if (/1920/.test(fluid.src)) {
          banner1Sources = [
            ...banner1Sources,
            { ...fluid, media: "(min-width: 769px)" },
          ]
        }
      }
      if (/banner-jangada/.test(fluid.src)) {
        if (/768/.test(fluid.src)) {
          banner2Sources = [
            ...banner2Sources,
            { ...fluid, media: "(max-width: 768px)" },
          ]
        } else if (/1920/.test(fluid.src)) {
          banner2Sources = [
            ...banner2Sources,
            { ...fluid, media: "(min-width: 769px)" },
          ]
        }
      }
      if (/banner-oroboro/.test(fluid.src)) {
        if (/768/.test(fluid.src)) {
          banner3Sources = [
            ...banner3Sources,
            { ...fluid, media: "(max-width: 768px)" },
          ]
        } else if (/1920/.test(fluid.src)) {
          banner3Sources = [
            ...banner3Sources,
            { ...fluid, media: "(min-width: 769px)" },
          ]
        }
      }
      if (/banner-petra/.test(fluid.src)) {
        if (/768/.test(fluid.src)) {
          banner4Sources = [
            ...banner4Sources,
            { ...fluid, media: "(max-width: 768px)" },
          ]
        } else if (/1920/.test(fluid.src)) {
          banner4Sources = [
            ...banner4Sources,
            { ...fluid, media: "(min-width: 769px)" },
          ]
        }
      }
      if (/banner-sela/.test(fluid.src)) {
        if (/768/.test(fluid.src)) {
          banner5Sources = [
            ...banner5Sources,
            { ...fluid, media: "(max-width: 768px)" },
          ]
        } else if (/1920/.test(fluid.src)) {
          banner5Sources = [
            ...banner5Sources,
            { ...fluid, media: "(min-width: 769px)" },
          ]
        }
      }
    }

    return (
      //infiniteLoop={true} autoPlay={true}
      <SliderContainer>
        <Carousel showThumbs={false} autoPlay>
          {/*@ts-ignore*/}
          <Slide to="/produtos/poltronas/delta">
            <ImageContainer>
              <Img
                fluid={banner1Sources}
                alt="Image"
                style={{ display: "flex", flex: 1 }}
              />
            </ImageContainer>
          </Slide>
          {/*@ts-ignore*/}
          <Slide to="/produtos/cadeiras/levi">
            <ImageContainer>
              <Img
                fluid={banner2Sources}
                alt="Image"
                style={{ display: "flex", flex: 1 }}
              />
            </ImageContainer>
          </Slide>
          {/*@ts-ignore*/}
          <Slide to="/produtos/poltronas/toro">
            <ImageContainer>
              <Img
                fluid={banner3Sources}
                alt="Image"
                style={{ display: "flex", flex: 1 }}
              />
            </ImageContainer>
          </Slide>
          {/*@ts-ignore*/}
          <Slide to="/">
            <ImageContainer>
              <Img
                fluid={banner4Sources}
                alt="Image"
                style={{ display: "flex", flex: 1 }}
              />
            </ImageContainer>
          </Slide>
          {/*@ts-ignore*/}
        </Carousel>
      </SliderContainer>
    )
  }
}

interface StaticQueryProps {
  allFile: {
    nodes: childImageSharpNode[]
  }
}

export const SlideShow: React.FC = () => (
  <StaticQuery
    query={graphql`
      query slideshow {
        allFile(filter: { relativePath: { regex: "/banners/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <SlideShowComponent nodes={data.allFile.nodes}></SlideShowComponent>
    )}
  />
)

export default SlideShow
