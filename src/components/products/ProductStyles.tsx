import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { LinkCta } from "../common/Buttons"
import { Container } from "../common/layout/Boxes"

const Flex = styled.div`
  display: flex;
`

const PageWrapper = styled(Flex)`
  margin-bottom: ${props => props.theme.gap * 4}px;
  /* margin-top: ${props => props.theme.gap * 4}px; */
  flex: 1;
  flex-direction: column;
`
const TopWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  margin-bottom: ${props => props.theme.gap * 2}px;
  gap: 0;
  ${breakpoints("gap", ["0", "40px", "40px", "40px"])}
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])}
`
const SliderContainer = styled(Flex)`
  flex: 1 1 100%;
  width: 100%;
  /* height: 400px; */
  ${breakpoints("flex-basis", ["100%", "100%", "48%", "48%"])}
`
const InfoContainer = styled(Flex)`
  flex-direction: column;
  margin-top: 40px;
  ${breakpoints("flex-basis", ["100%", "100%", "48%", "48%"])}
  ${breakpoints("margin-top", ["40px", "40px", "inherit", "inherit"])}
`

const ProductTitleContainerMobile = styled(Flex)`
  justify-content: space-between;
  ${breakpoints("display", ["flex", "none", "none", "none"])}
`

const ProductTitleContainerDesktop = styled(Flex)`
  display: none;
  flex-direction: column;
  margin-bottom: ${props => props.theme.gap * 4.5}px;
  ${breakpoints("display", ["none", "flex", "flex", "flex"])}
`

const ProductTitleContent = styled(Flex)`
  flex-direction: column;
`
const Designative = styled.h3`
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 9px;
  /* ${breakpoints("margin-bottom", ["10px", "10px", "10px", "10px"])} */
  ${breakpoints("font-size", ["11px", "11px", "16px", "18px"])}
`

const ProductTitle = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: ${props => props.theme.gap / 2}px;
  ${breakpoints("font-size", ["22px", "28px", "28px", "34px"])}
`
const Designer = styled(LinkCta)`
  padding: 10px;
  font-size: 11px;
  height: inherit;
  margin-top: 5px;
  font-weight: 100;
  opacity: 0.4;
  ${breakpoints("font-size", ["11px", "13px", "16px", "16px"])}
  ${breakpoints("height", ["inherit", "inherit", "20px", "36px"])}
`

const DesignerContainer = styled(Flex)`
  height: 33px;
`

const DescriptionTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.gap / 2}px;
  ${breakpoints("font-size", ["inherit", "inherit", "18px", "22px"])}
`
const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: ${props => props.theme.gap * 2}px;
  ${breakpoints("font-size", ["16px", "16px", "16px", "18px"])}
  ${breakpoints("line-height", ["19px", "19px", "22px", "25px"])}
`
const MeasurementsTitle = styled(DescriptionTitle)`
  text-transform: uppercase;
  font-weight: 100;
  color: ${props => props.theme.colors.mediumGrey};
  margin-bottom: ${props => props.theme.gap / 3.5}px;
`
const MeasurementsSubTitle = styled.h4`
  font-weight: 900;
  font-size: 14px;
  margin-bottom: 20px;
  ${breakpoints("font-size", ["14px", "16px", "16px", "18px"])}
`
const MeasurementsText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  margin-top: 2px;
  opacity: .6;
  ${breakpoints("font-size", ["11px", "11px", "13px", "13px"])}
`
const MeasurementHelp = styled.p`
  font-size: 11px;
  /* opacity: .6; */
`

const AmbientsWrapper = styled(Flex)`
  flex-direction: column;
  margin-top: ${props => props.theme.gap * 4}px;
`
const AmbientsTitle = styled(DescriptionTitle)``

const GalleryWrapper = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1 1 100%;
  flex-wrap: no-wrap;
  justify-content: "flex-start";
  gap: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  margin-top: ${props => props.theme.gap}px;
  ${breakpoints("flex-wrap", ["no-wrap", "no-wrap", "wrap", "wrap"])};
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
  padding: 0;
`

export {
  GalleryWrapper,
  AmbientsTitle,
  MeasurementsText,
  MeasurementsSubTitle,
  MeasurementsTitle,
  DescriptionText,
  DescriptionTitle,
  DesignerContainer,
  AmbientsWrapper,
  Designer,
  PageWrapper,
  TopWrapper,
  SliderContainer,
  InfoContainer,
  ProductTitleContainerMobile,
  ProductTitleContainerDesktop,
  ProductTitleContent,
  Designative,
  ProductTitle,
  MeasurementHelp
}