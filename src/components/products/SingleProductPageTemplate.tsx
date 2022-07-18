import React from "react"
import styled from "styled-components"
import { Breadcrumbs } from "../common/Breadcrumbs"
import { Container } from "../common/layout/Boxes"
import { ProductComponentSimple } from "./ProductComponentSimple"
import ProductSlideShow from "./ProductSlider"
import {
  PageWrapper,
  TopWrapper,
  ProductTitleContainerMobile,
  ProductTitleContent,
  Designative,
  ProductTitle,
  DesignerContainer,
  Designer,
  SliderContainer,
  InfoContainer,
  ProductTitleContainerDesktop,
  DescriptionTitle,
  DescriptionText,
  MeasurementsSubTitle,
  MeasurementsText,
  MeasurementHelp,
  AmbientsWrapper,
  AmbientsTitle,
  GalleryWrapper,
} from "./ProductStyles"

const RefContainer = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`

interface SingleProcuctPageProps {
  data: any
}

interface AmbientProps {
  product: any
}

const RenderAmbients: React.FC<AmbientProps> = ({ product }) => {
  const elements = product.ambients.map((item: any, i: number) => {
    const _data = {
      ...product,
      cover_img: item,
    }
    return <ProductComponentSimple data={_data} key={i} />
  })
  return <>{elements}</>
}

const RenderVariations: React.FC<AmbientProps> = ({ product }) => {
  const elements = product.images.map((item: any, i: number) => {
    const _data = {
      ...product,
      cover_img: item,
    }
    return <ProductComponentSimple data={_data} key={i} />
  })
  return <>{elements}</>
}

export const SingleProcuctPage: React.FC<SingleProcuctPageProps> = ({
  data,
}) => {
  const {
    ref,
    name,
    designer_slug,
    designer_name,
    images,
    variations,
    measurements,
    description,
    ambients,
    category_slug,
    category_name
  } = data

  const breadcrumbLinks = [
    { name: "produtos", link: "/produtos" },
    { name: category_name, link: `/produtos/${category_slug}` },
    { name: name, link: `` },
  ]
  console.log('ref :>> ', ref);
  return (
    <Container>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbLinks} />
        <TopWrapper>
          <ProductTitleContainerMobile>
            <ProductTitleContent>
              <Designative>produtos tumar</Designative>
              <ProductTitle>{name} <RefContainer>{ref}</RefContainer></ProductTitle>
            </ProductTitleContent>
            {designer_slug && designer_slug.length ? (
              <DesignerContainer>
                <Designer style={{ height: 15 }} to={`/designers/${designer_slug}`}>Designer {designer_name}</Designer>
              </DesignerContainer>
            ) : null}
          </ProductTitleContainerMobile>
          <SliderContainer>
            <ProductSlideShow productImages={images} />
          </SliderContainer>
          <InfoContainer>
            <ProductTitleContainerDesktop>
              <ProductTitleContent>
                <Designative>produtos tumar</Designative>
                <ProductTitle>{name} <RefContainer>{ref}</RefContainer></ProductTitle>
              </ProductTitleContent>
              {designer_slug && designer_slug.length > 0 ? (
                <DesignerContainer>
                  <Designer style={{ height: 15 }} to={`/designers/${designer_slug}`}>Designer {designer_name}</Designer>
                </DesignerContainer>
              ) : null}
            </ProductTitleContainerDesktop>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <DescriptionText>{description}</DescriptionText>
            <MeasurementsSubTitle>Medidas</MeasurementsSubTitle>
            {measurements.map((item: string) => (
              <MeasurementsText key={item}>{item}</MeasurementsText>
            ))}
            <MeasurementHelp>Medidas em milímetros.</MeasurementHelp>
          </InfoContainer>
        </TopWrapper>
        {ambients.length ? (
          <AmbientsWrapper>
            <AmbientsTitle>Ambientes com {name}</AmbientsTitle>
            <GalleryWrapper>
              <RenderAmbients product={data} />
            </GalleryWrapper>
          </AmbientsWrapper>
        ) : null}
        {/* {variations && variations.length ? (
          <AmbientsWrapper style={{ marginTop: 40 }}>
            <AmbientsTitle>Variações {name}</AmbientsTitle>
            <GalleryWrapper>
              <RenderVariations product={data} />
            </GalleryWrapper>
          </AmbientsWrapper>
        ) : null} */}
      </PageWrapper>
    </Container>
  )
}

