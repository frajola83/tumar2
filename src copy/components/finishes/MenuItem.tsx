import React from 'react'
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from '../../utils/styledResponsive';

interface ContainerProps {
  isSelected: boolean
}

const Container = styled.div<ContainerProps>`
  border-bottom: 2px solid #444;
  transition: .3s all ease-in-out;
  border-bottom-width: ${props => props.isSelected ? "1px" : 0};
`

const CategoryLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.darkGrey};
  text-decoration: none;
  font-size: 11px;
  ${breakpoints("font-size", ["11px", "11px", "16px", "16px"])};
`

interface MenuItemProps {
  category: string
  currentCategory: string
  children: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ category, currentCategory, children }) => {
  const isSelected = category === currentCategory
  console.log('category, currentCategory', category, currentCategory)
  console.log('isSelected', isSelected)
  return (
    <Container isSelected={isSelected}>
      <CategoryLink to={`/acabamentos/${category}`}>{children}</CategoryLink>
    </Container>
  )
}