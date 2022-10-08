import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const extractImageNode = (imageName: string, data: any) => {
  const filter = (edge) => {
    const imageData = edge.node.childImageSharp;
    if (imageData) {
      if (imageData.gatsbyImageData.images.sources[0].srcSet) {
        return imageData.gatsbyImageData.images.sources[0].srcSet.includes(imageName);
      }
      return false;
    }
    return false;
  }

  if (data.edges.find(filter)) {
    const {node} = data.edges.find(filter);
    return node.childImageSharp;
  }
  console.log("Image not found", imageName);
  return null;
}

interface ImageProviderProps {
  src: string;
  alt: string;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({src, alt}) => {
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: { absolutePath: { regex: "/images/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const imageSharp = extractImageNode(src, data.allFile);
  const image = getImage(imageSharp);

  return <GatsbyImage image={image!} alt={alt} />
}
