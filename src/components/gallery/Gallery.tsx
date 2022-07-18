import React from "react"
import { ProductImage } from "src/types/productImageTypes"
import { Item } from "./Item"
import { Container } from "./StyledGallery"

interface GalleryProps {
  data: ProductImage[]
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <Container>
      {data && data.length
        ? (data as any).map((item: ProductImage) => {
          return <Item {...item} />
        })
        : null}
    </Container>
  )
}
