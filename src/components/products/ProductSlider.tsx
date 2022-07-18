import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./slider.css"
import { Carousel } from "react-responsive-carousel"
import { ImgProvider } from "../common/ImgGraph"

interface SlideShowComponentProps {
  productImages: string[]
}

class SlideShowComponent extends React.Component<SlideShowComponentProps> {
  constructor(props: SlideShowComponentProps) {
    super(props)
  }

  render() {
    const images: any[] = []
    for (const productImage of this.props.productImages) {
      images.push(
        <div key={productImage}>
          <ImgProvider
            fileName={`${productImage}.jpg`}
            alt="Tumar design"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      )
    }

    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        {images}
      </Carousel>
    )
  }
}

interface SlideShowProps {
  productImages: string[]
}

const ProductSlideShow: React.FC<SlideShowProps> = ({ productImages }) => (
  <SlideShowComponent productImages={productImages}></SlideShowComponent>
)

export default ProductSlideShow
