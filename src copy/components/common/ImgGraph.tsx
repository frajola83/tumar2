import { graphql, useStaticQuery } from "gatsby"
import React, { CSSProperties } from "react"
import Img from "gatsby-image"

interface ImgProviderProps {
  fileName: string
  alt: string | undefined
  style?: CSSProperties
}

/**
 * Imagem encapsulada em um
 * componente que busca a foto com graphql
 */
export const ImgProvider: React.FC<ImgProviderProps> = ({
  fileName,
  alt = "",
  style,
}) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600, quality: 70) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (allImageSharp.nodes.length) {
    const fluid = allImageSharp.nodes.find((n: any) => {
      if (n) {
        return n.fluid.originalName === fileName
      }
      return false
    })
    if (fluid) {
      return <Img fluid={fluid.fluid} alt={alt} style={style} />
    }
  }
  console.log("Nenhuma imagem encontrada")
  return null
}
