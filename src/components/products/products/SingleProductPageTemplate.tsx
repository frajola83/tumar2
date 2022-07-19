import { I18nextContext, useI18next } from "gatsby-plugin-react-i18next"
import React, { useContext } from "react"
import styled from "styled-components"
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
  TopWrapper,
} from "./ProductStyles"
import ProductSlideShow from "./ProductSlider"
import { ProductComponentSimple } from "./ProductComponentSimple"
import { Product } from "../../../interfaces"

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

export const SingleProcuctPageTemplate = () => {
  return null;
  // const i18nContext = useContext(I18nextContext)
  // const {t} = useI18next();
  // let translatedData: Product | null = null

  // switch (i18nContext.language) {
  //   case "es":
  //     translatedData = data.productEsJson
  //     break
  //   case "en":
  //     translatedData = data.productEnJson
  //     break
  //   default:
  //     translatedData = data.productPtJson
  //     break
  // }

  // const {
  //   ambients,
  //   category_name,
  //   category_slug,
  //   cover_img,
  //   description,
  //   designer_name,
  //   designer_slug,
  //   images,
  //   measurements,
  //   name,
  //   ref,
  //   slug,
  // } = translatedData

  // const breadcrumbLinks = [
  //   { name: "produtos", link: "/produtos" },
  //   { name: category_name, link: `/produtos/${category_slug}` },
  //   { name: name, link: `` },
  // ]

  // return (
  //   <Container>
  //     <PageWrapper>
  //       <Breadcrumbs links={breadcrumbLinks} />
  //       <TopWrapper>
  //         <ProductTitleContainerMobile>
  //           <ProductTitleContent>
  //             <Designative>{t("pages.productSingle.title")}</Designative>
  //             <ProductTitle>
  //               {name} <RefContainer>{ref}</RefContainer>
  //             </ProductTitle>
  //           </ProductTitleContent>
  //           {designer_slug && designer_slug.length ? (
  //             <DesignerContainer>
  //               <Designer
  //                 style={{ height: 15 }}
  //                 to={`/designers/${designer_slug}`}
  //               >
  //                 Designer {designer_name}
  //               </Designer>
  //             </DesignerContainer>
  //           ) : null}
  //         </ProductTitleContainerMobile>
  //         <SliderContainer>
  //           <ProductSlideShow productImages={images} />
  //         </SliderContainer>
  //         <InfoContainer>
  //           <ProductTitleContainerDesktop>
  //             <ProductTitleContent>
  //               <Designative>{t("pages.productSingle.title")}</Designative>
  //               <ProductTitle>
  //                 {name} <RefContainer>{ref}</RefContainer>
  //               </ProductTitle>
  //             </ProductTitleContent>
  //             {designer_slug && designer_slug.length > 0 ? (
  //               <DesignerContainer>
  //                 <Designer
  //                   style={{ height: 15 }}
  //                   to={`/designers/${designer_slug}`}
  //                 >
  //                   Designer {designer_name}
  //                 </Designer>
  //               </DesignerContainer>
  //             ) : null}
  //           </ProductTitleContainerDesktop>
  //           <DescriptionTitle>{t("pages.productSingle.description")}</DescriptionTitle>
  //           <DescriptionText>{description}</DescriptionText>
  //           <MeasurementsSubTitle>{t("pages.productSingle.measurements")}</MeasurementsSubTitle>
  //           {measurements.map((item: string) => (
  //             <MeasurementsText key={item}>{item}</MeasurementsText>
  //           ))}
  //           <MeasurementHelp>{t("pages.productSingle.measurementsCaption")}.</MeasurementHelp>
  //         </InfoContainer>
  //       </TopWrapper>
  //       {ambients.length ? (
  //          <AmbientsWrapper>
  //            <AmbientsTitle>{t("pages.productSingle.ambientsWith")} {name}</AmbientsTitle>
  //            <GalleryWrapper>
  //              <RenderAmbients product={translatedData} />
  //            </GalleryWrapper>
  //          </AmbientsWrapper>
  //        ) : null}
  //     </PageWrapper>
  //   </Container>
  // )
}

// import { I18nextContext } from "gatsby-plugin-react-i18next"
// import React, { useContext } from "react"
// import styled from "styled-components"
// import { Breadcrumbs } from "../common/Breadcrumbs"
// import { Container } from "../common/layout/Boxes"
// import { ProductComponentSimple } from "./ProductComponentSimple"
// import ProductSlideShow from "./ProductSlider"
// import {
//   PageWrapper,
//   TopWrapper,
//   ProductTitleContainerMobile,
//   ProductTitleContent,
//   Designative,
//   ProductTitle,
//   DesignerContainer,
//   Designer,
//   SliderContainer,
//   InfoContainer,
//   ProductTitleContainerDesktop,
//   DescriptionTitle,
//   DescriptionText,
//   MeasurementsSubTitle,
//   MeasurementsText,
//   MeasurementHelp,
//   AmbientsWrapper,
//   AmbientsTitle,
//   GalleryWrapper,
// } from "./ProductStyles"

// const RefContainer = styled.span`
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 18px;
// `

// interface SingleProcuctPageProps {
//   data: any
// }

// interface AmbientProps {
//   product: any
// }

// const RenderAmbients: React.FC<AmbientProps> = ({ product }) => {
//   const elements = product.ambients.map((item: any, i: number) => {
//     const _data = {
//       ...product,
//       cover_img: item,
//     }
//     return <ProductComponentSimple data={_data} key={i} />
//   })
//   return <>{elements}</>
// }

// const RenderVariations: React.FC<AmbientProps> = ({ product }) => {
//   const elements = product.images.map((item: any, i: number) => {
//     const _data = {
//       ...product,
//       cover_img: item,
//     }
//     return <ProductComponentSimple data={_data} key={i} />
//   })
//   return <>{elements}</>
// }

// export const SingleProcuctPage: React.FC<SingleProcuctPageProps> = ({
//   data,
// }) => {

//   const breadcrumbLinks = [
//     { name: "produtos", link: "/produtos" },
//     { name: category_name, link: `/produtos/${category_slug}` },
//     { name: name, link: `` },
//   ]

//   let data: any[] | null = null;

//   const context = useContext(I18nextContext);

//   switch (context.language) {
//     case "en":
//       data =
//       break;

//     default:
//       break;
//   }

//   return (
//     <Container>
//       <PageWrapper>
//         <Breadcrumbs links={breadcrumbLinks} />
//         <TopWrapper>
//           <ProductTitleContainerMobile>
//             <ProductTitleContent>
//               <Designative>produtos tumar</Designative>
//               <ProductTitle>{name} <RefContainer>{ref}</RefContainer></ProductTitle>
//             </ProductTitleContent>
//             {designer_slug && designer_slug.length ? (
//               <DesignerContainer>
//                 <Designer style={{ height: 15 }} to={`/designers/${designer_slug}`}>Designer {designer_name}</Designer>
//               </DesignerContainer>
//             ) : null}
//           </ProductTitleContainerMobile>
//           <SliderContainer>
//             <ProductSlideShow productImages={images} />
//           </SliderContainer>
//           <InfoContainer>
//             <ProductTitleContainerDesktop>
//               <ProductTitleContent>
//                 <Designative>produtos tumar</Designative>
//                 <ProductTitle>{name} <RefContainer>{ref}</RefContainer></ProductTitle>
//               </ProductTitleContent>
//               {designer_slug && designer_slug.length > 0 ? (
//                 <DesignerContainer>
//                   <Designer style={{ height: 15 }} to={`/designers/${designer_slug}`}>Designer {designer_name}</Designer>
//                 </DesignerContainer>
//               ) : null}
//             </ProductTitleContainerDesktop>
//             <DescriptionTitle>Descrição</DescriptionTitle>
//             <DescriptionText>{description}</DescriptionText>
//             <MeasurementsSubTitle>Medidas</MeasurementsSubTitle>
//             {measurements.map((item: string) => (
//               <MeasurementsText key={item}>{item}</MeasurementsText>
//             ))}
//             <MeasurementHelp>Medidas em milímetros.</MeasurementHelp>
//           </InfoContainer>
//         </TopWrapper>
//         {ambients.length ? (
//           <AmbientsWrapper>
//             <AmbientsTitle>Ambientes com {name}</AmbientsTitle>
//             <GalleryWrapper>
//               <RenderAmbients product={data} />
//             </GalleryWrapper>
//           </AmbientsWrapper>
//         ) : null}
//         {/* {variations && variations.length ? (
//           <AmbientsWrapper style={{ marginTop: 40 }}>
//             <AmbientsTitle>Variações {name}</AmbientsTitle>
//             <GalleryWrapper>
//               <RenderVariations product={data} />
//             </GalleryWrapper>
//           </AmbientsWrapper>
//         ) : null} */}
//       </PageWrapper>
//     </Container>
//   )
// }
