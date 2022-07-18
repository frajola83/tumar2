import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { ImgProvider } from "../common/ImgGraph"
import { Link } from "gatsby"

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
  /* margin-bottom: ${props => props.theme.gap}px; */
  height: auto;
  overflow: hidden;
  /* ${breakpoints("height", ["auto", "auto", "400px", "400px"])}; */
  ${breakpoints("flex-basis", ["100%", "47%", "47%", "47%"])};
`

interface ProductComponentProps {
  data: any
}

export const ProductComponentSimple: React.FC<ProductComponentProps> = ({
  data,
}) => {
  return (
    <Item>
      <ImgProvider
        fileName={`${data.cover_img}.jpg`}
        alt={data.coverImg}
        style={{ width: "100%", display: "block" }}
      />
    </Item>
  )
}
