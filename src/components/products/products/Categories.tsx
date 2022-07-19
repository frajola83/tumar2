import React, { useContext } from "react"
import styled from "styled-components"
import { Category } from "../../../interfaces"
import { breakpoints } from "../../../utils/styledResponsive"
import { Container } from "../../common/layout/Boxes"
import { CategoryItem } from "./CategoryItem"

interface CategoriesProps {
  categories: Category[];
}

const Wrapper = styled(Container)`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 100%;
  justify-content: "flex-start";
  gap: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 4}px;
  ${breakpoints("flex-direction", ["column", "row", "row", "row"])};
`

export const Categories: React.FC<CategoriesProps> = ({categories}) => {

  const items = categories.map((category, i) => {
    return <CategoryItem key={i} category={category} />
  });

  return (
    <Container>
      <Wrapper>{items}</Wrapper>
    </Container>
  )
}
