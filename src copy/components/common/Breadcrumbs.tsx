import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';


const BreadcrumbsContainer = styled.p`
  border-bottom: 1px solid ${props => props.theme.colors.mediumGrey};
  padding-bottom: ${props => props.theme.gap / 2}px;
  margin-top: ${props => props.theme.gap * 2}px;
  margin-bottom: ${props => props.theme.gap * 2}px;
  width: "100%";
`
const BreadcrumbsItem = styled(Link)`
  color: ${props => props.theme.colors.darkGrey};
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
`
const BreadcrumbsItemActive = styled.span`
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: lowercase;
`
interface ILink {
  name: string, link: string
}
interface BreadcrumbsProps {
  links: ILink[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  const lastElemIndex = links.length - 1
  return (
    <BreadcrumbsContainer>
      {links.map((item: ILink, index: number) => {
        if (index !== lastElemIndex) {
          return (
            <span key={index}>
              <BreadcrumbsItem to={item.link}>
                {item.name}
              </BreadcrumbsItem>
              &gt;
            </span>
          )
        }
        return (
          <BreadcrumbsItemActive key={index}>{item.name}</BreadcrumbsItemActive>
        )
      })}
    </BreadcrumbsContainer>
  );
}