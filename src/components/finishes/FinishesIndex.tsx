import React, { useContext } from "react"
import { breakpoints } from "../../utils/styledResponsive"
import styled from "styled-components"
import { PageTitle } from "../common/PageTitle"
import { FinishBox } from "./FinishBox"
import { Menu } from "./Menu"
import { useTranslation } from "react-i18next"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import { Container } from "../common/layout/Boxes"
import { FinishGroup } from "../../interfaces"

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
  data: FinishGroup[]
}

export const FinishesIndex: React.FC<FinishesIndexProps> = ({ data }) => {
  const { t } = useTranslation()
  const context = useContext(I18nextContext)

  const { category_name, category_name_en, category_name_es, category_slug, finishes } =
    data[0]

  let categoryName = category_name
  if (context.language === "en") {
    categoryName = category_name_en
  }
  if (context.language === "es") {
    categoryName = category_name_es
  }

  return (
    <Container>
      <PageTitle>{t("pages.finishes.title")}</PageTitle>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <Content>
        <ColLeft>
          <Menu category_slug={category_slug} />
        </ColLeft>
        <ColRight>
          {finishes.map(item => (
            <FinishBox title={item.name} slug={item.slug} key={item.slug} />
          ))}
        </ColRight>
      </Content>
    </Container>
  )
}
