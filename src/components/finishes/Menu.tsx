import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

interface MenuProps {

}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-transform: capitalize;
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
  const {t} = useTranslation();
  return (
    <MenuContainer>
      <MenuSectionTitle>{t("pages.finishes.menuWood")}</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="laminas-naturais" currentCategory={category_slug}>{t("finishes.naturalWoodVeener")}</MenuItem>
        <MenuItem category="madeira-macica" currentCategory={category_slug}>{t("finishes.solidWood")}</MenuItem>
      </MenuSection>
      <MenuSectionTitle>{t("pages.finishes.menuFabric")}</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="tecidos-grupo-1" currentCategory={category_slug}>{t("finishes.group01")}</MenuItem>
        <MenuItem category="tecidos-grupo-4" currentCategory={category_slug}>{t("finishes.group04")}</MenuItem>
        <MenuItem category="tecidos-grupo-5" currentCategory={category_slug}>{t("finishes.group05")}</MenuItem>
        <MenuItem category="tecidos-grupo-6" currentCategory={category_slug}>{t("finishes.group06")}</MenuItem>
        <MenuItem category="tecidos-grupo-7" currentCategory={category_slug}>{t("finishes.group07")}</MenuItem>
      </MenuSection>
      <MenuSectionTitle>{t("pages.finishes.menuAny")}</MenuSectionTitle>
      <MenuSection>
        <MenuItem category="couro-natural" currentCategory={category_slug}>{t("finishes.naturalLeather")}</MenuItem>
        <MenuItem category="formica" currentCategory={category_slug}>{t("finishes.formica")}</MenuItem>
        <MenuItem category="laminas-sinteticas" currentCategory={category_slug}>{t("finishes.syntheticVeneer")}</MenuItem>
        <MenuItem category="malha-knit" currentCategory={category_slug}>{t("finishes.fabricKnit")}</MenuItem>
        <MenuItem category="palha-natural" currentCategory={category_slug}>{t("finishes.naturalStraw")}</MenuItem>
        <MenuItem category="pintura-metalica" currentCategory={category_slug}>{t("finishes.metallicPainting")}</MenuItem>
        <MenuItem category="recouro" currentCategory={category_slug}>{t("finishes.reconstitutedLeather")}</MenuItem>
        <MenuItem category="vidros" currentCategory={category_slug}>{t("finishes.paintedGlass")}</MenuItem>
      </MenuSection>
    </MenuContainer>
  );
}