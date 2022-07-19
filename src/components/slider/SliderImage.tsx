import React from "react"
import Img, { FluidObject } from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import { Container } from "../common/layout/Boxes"

interface SliderImageProps {
  alt?: string
}

export const SliderImage: React.FC<SliderImageProps> = ({
  alt = "Tumar Design - todos os direitos reservados",
}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          image768: file(relativePath: { regex: "/768.jpg/" }) {
            childImageSharp {
              fluid(maxWidth: 768, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
          image992: file(relativePath: { regex: "/992.jpg/" }) {
            childImageSharp {
              fluid(maxWidth: 992, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
          image1200: file(relativePath: { regex: "/1200.jpg/" }) {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
          # image1920: file(relativePath: { regex: "/1920.jpg/" }) {
          #   childImageSharp {
          #     fluid(maxWidth: 1920, quality: 100) {
          #       originalName
          #       ...GatsbyImageSharpFluid
          #     }
          #   }
          # }
        }
      `}
    >
      {data => {
        const sources = [
          data.image768.childImageSharp.fluid,
          {
            ...data.image992.childImageSharp.fluid,
            media: "(min-width: 768px)",
          },
          {
            ...data.image1200.childImageSharp.fluid,
            media: "(min-width: 992px)",
          },
          // {
          //   ...data.image1920.childImageSharp.fluid,
          //   media: "(min-width: 1200px)",
          // },
        ]
        return (
          <>
            <Container>
              <Img
                fluid={sources}
                alt={alt}
                style={{ width: 100 + "%", display: "block" }}
              />
            </Container>
          </>
        )
      }}
    </StaticQuery>
  )
}
