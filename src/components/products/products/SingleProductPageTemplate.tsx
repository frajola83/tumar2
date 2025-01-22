import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"
import React, { useContext } from "react"
import styled from "styled-components"
import { Product } from "../../../interfaces"
import { Container } from "../../common/layout/Boxes"
import { ProductComponentSimple } from "./ProductComponentSimple"
import ProductSlideShow from "./ProductSlider"
import {
  AmbientsTitle,
  AmbientsWrapper,
  DescriptionText,
  DescriptionTitle,
  Designative,
  Designer,
  DesignerContainer,
  GalleryWrapper,
  InfoContainer,
  MeasurementHelp,
  MeasurementsSubTitle,
  MeasurementsText,
  PageWrapper,
  ProductTitle,
  ProductTitleContainerDesktop,
  ProductTitleContainerMobile,
  ProductTitleContent,
  SliderContainer,
  TopWrapper
} from "./ProductStyles"
import { ProductConcept } from "./ProductConcept"

const RefContainer = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`

interface AmbientProps {
  product: Product;
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

interface Props {
  product: Product;
}

export const SingleProcuctPageTemplate:React.FC<Props> = ({product}) => {
  const {
    ambients,
    category_name,
    category_slug,
    cover_img,
    description,
    descriptionEn,
    descriptionEs,
    designer_name,
    designer_slug,
    images,
    measurements,
    measurementsEn,
    measurementsEs,
    concept,
    conceptEs,
    conceptEn,
    name,
    nameEn,
    nameEs,
    nameEs_,
    ref,
    slug,
  } = product

  const { t } = useTranslation()
  const context = useContext(I18nextContext)
  // const breadcrumbLinks = [
  //   { name: "produtos", link: "/produtos" },
  //   { name: category_name, link: `/produtos/${category_slug}` },
  //   { name: name, link: `` },
  // ]
  let productMeasurements = measurements
  let productDescription: string = description
  let productName = name
  let productConcept = concept

  if (context.language === "en") {
    productDescription = descriptionEn
    productMeasurements = measurementsEn
    productConcept = conceptEn
    if (nameEn) {
      productName = nameEn
    }
  }
  if (context.language === "es") {
    productDescription = descriptionEs
    productMeasurements = measurementsEs
    productConcept = conceptEs
    if (nameEs) {
      productName = nameEs
    }
    if (nameEs_) {
      productName = nameEs_
    }
  }

  let conceptMarkup: any


  const descriptionMarkup = {
    __html: productDescription.replace(/\n/g, "<br/>"),
  }

  if (productConcept) {
    conceptMarkup = {
      __html: productConcept.replace(/\n/g, "<br/>"),
    }
  }


  return (
    <Container>
      <PageWrapper>
        <div style={{ width: "100%", height: 64 }}></div>
        {/* <Breadcrumbs links={breadcrumbLinks} /> */}
        <TopWrapper>
          <ProductTitleContainerMobile>
            <ProductTitleContent>
              <Designative>{t("pages.productSingle.title")}</Designative>
              <ProductTitle>
                {productName}
                <RefContainer>{ref}</RefContainer>
              </ProductTitle>
            </ProductTitleContent>
            {designer_slug && designer_slug.length ? (
              <DesignerContainer>
                <Designer
                  style={{ height: 15 }}
                  to={`/designers/${designer_slug}`}
                >
                  Designer {designer_name}
                </Designer>
              </DesignerContainer>
            ) : null}
          </ProductTitleContainerMobile>
          <SliderContainer>
            <ProductSlideShow productImages={images} />
          </SliderContainer>
          <InfoContainer>
            <ProductTitleContainerDesktop>
              <ProductTitleContent>
                <Designative>{t("pages.productSingle.title")}</Designative>
                <ProductTitle>
                  {productName} <RefContainer>{ref}</RefContainer>
                </ProductTitle>
              </ProductTitleContent>
              {designer_slug && designer_slug.length > 0 ? (
                <DesignerContainer>
                  <Designer
                    style={{ height: 15 }}
                    to={`/designers/${designer_slug}`}
                  >
                    Designer {designer_name}
                  </Designer>
                </DesignerContainer>
              ) : null}
            </ProductTitleContainerDesktop>
            <DescriptionTitle>
              {t("pages.productSingle.description")}
            </DescriptionTitle>
            <DescriptionText dangerouslySetInnerHTML={descriptionMarkup} />
            {/* {productDescription.replace(/\n/g, "<br/>")} */}
            <MeasurementsSubTitle>
              {t("pages.productSingle.measurements")}
            </MeasurementsSubTitle>
            {productMeasurements.map((item: string) => (
              <MeasurementsText key={item}>{item}</MeasurementsText>
            ))}
            <MeasurementHelp>
              {t("pages.productSingle.measurementsCaption")}.
            </MeasurementHelp>
          </InfoContainer>
        </TopWrapper>
        {!!product.concept && <div>
          <DescriptionTitle>{t("concept.title")}</DescriptionTitle>
          <DescriptionText dangerouslySetInnerHTML={conceptMarkup} />
        </div>}
        {ambients.length ? (
          <AmbientsWrapper>
            <AmbientsTitle>
              {t("pages.productSingle.ambientsWith")} {productName}
            </AmbientsTitle>
            <GalleryWrapper>
              <RenderAmbients product={product} />
            </GalleryWrapper>
          </AmbientsWrapper>
        ) : null}
      </PageWrapper>
    </Container>
  )
}

