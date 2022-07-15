import React from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { PageTitle } from "../common/PageTitle"
import { Container } from "../layout/Boxes"
import { FinishBox } from "./FinishBox"
import { Menu } from "./Menu"

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`
const CategoryTitle = styled.h3`
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.gap * 2}px;
  text-align: right;
  font-size: 20px;
  padding-left: 0;
  ${breakpoints("padding-left", ["0", "0", "25%", "25%"])};
  ${breakpoints("text-align", ["right", "right", "left", "left"])};
`

const ColRight = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-wrap: wrap;
  gap: 20px 40px;
  /* ${breakpoints("gap", ["10px", "10px", "60px", "60px"])}; */
  ${breakpoints("flex-basis", ["50%", "50%", "75%", "75%"])};
`

const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  ${breakpoints("flex-basis", ["50%", "50%", "25%", "25%"])};
`

interface FinishesIndexProps {
  data: any
}

export const FinishesIndex: React.FC<FinishesIndexProps> = ({ data }) => {
  if (data && data.allFinishesJson) {
    const { category_slug, category_name, finishes } = data.allFinishesJson.nodes[0]
    return (
      <Container>
        <PageTitle>Acabamentos</PageTitle>
        <CategoryTitle>{category_name}</CategoryTitle>
        <Content>
          <ColLeft>
            <Menu category_slug={category_slug} />
          </ColLeft>
          <ColRight>
            {finishes.map((item: any) => <FinishBox title={item.name} slug={item.slug} key={item.slug} />)}
          </ColRight>
        </Content>
      </Container>
    )
  } return null
}
