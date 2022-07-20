import { breakpoints } from "../../utils/styledResponsive";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  /* gap: 30px; */
  justify-content: flex-start;
  width: 100%;
  padding: 15px;
  margin: -30px;
`
export const ItemContainer = styled.div`
  width: 100%;
  ${breakpoints("width", ["100%", "100%", "45%", "30%"])}
`