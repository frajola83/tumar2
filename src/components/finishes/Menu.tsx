import React from 'react'
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

interface MenuProps {

}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const MenuSectionTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: ${props => props.theme.gap}px;
  `
const MenuSection = styled.div`
  display: flex;
  gap: ${props => props.theme.gap}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.gap * 2}px;
`
interface MenuProps {
  category_slug: string
}

export const Menu: React.FC<MenuProps> = ({ category_slug }) => {
  return (
    <MenuContainer>
      <MenuSectionTitle>Madeira</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="laminas-naturais" currentCategory={category_slug}>Lâminas naturais</MenuItem>
        <MenuItem category="madeira-macica" currentCategory={category_slug}>Madeira maciça</MenuItem>
      </MenuSection>
      <MenuSectionTitle>Tecido</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="tecidos-grupo-1" currentCategory={category_slug}>Grupo 01</MenuItem>
        <MenuItem category="tecidos-grupo-4" currentCategory={category_slug}>Grupo 04</MenuItem>
        <MenuItem category="tecidos-grupo-5" currentCategory={category_slug}>Grupo 05</MenuItem>
        <MenuItem category="tecidos-grupo-6" currentCategory={category_slug}>Grupo 06</MenuItem>
        <MenuItem category="tecidos-grupo-7" currentCategory={category_slug}>Grupo 07</MenuItem>
      </MenuSection>
      <MenuSectionTitle>Diversos</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="couro-natural" currentCategory={category_slug}>Couro</MenuItem>
        <MenuItem category="formica" currentCategory={category_slug}>Fórmica</MenuItem>
        <MenuItem category="laminas-sinteticas" currentCategory={category_slug}>Lâmina sintética</MenuItem>
        <MenuItem category="malha-knit" currentCategory={category_slug}>Malha Knit</MenuItem>
        <MenuItem category="palha-natural" currentCategory={category_slug}>Palha</MenuItem>
        <MenuItem category="pintura-metalica" currentCategory={category_slug}>Pintura metálica</MenuItem>
        {/* <MenuItem category="porcelanato" currentCategory={category_slug}>Porcelanato</MenuItem> */}
        <MenuItem category="recouro" currentCategory={category_slug}>Recouro</MenuItem>
        {/* <MenuItem category="tachinha" currentCategory={category_slug}>Tachinha</MenuItem> */}
        <MenuItem category="vidros" currentCategory={category_slug}>Vidro</MenuItem>
      </MenuSection>
    </MenuContainer>
  );
}