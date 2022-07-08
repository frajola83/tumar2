import React from "react"

interface PictureProps {
  image768: string
  image992: string
  image1200: string
  image1920: string
}

export const Picture: React.FC<PictureProps> = ({
  image768,
  image992,
  image1200,
  image1920,
}) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={image992} />
      <source media="(min-width: 992px)" srcSet={image1200} />
      <source media="(min-width: 1200px)" srcSet={image1920} />
      {/* <img src={image768} alt="Lançamentos 2021" /> */}
    </picture>
  )
}
