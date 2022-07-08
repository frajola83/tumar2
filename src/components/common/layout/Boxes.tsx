import { breakpoints } from "../../../utils/styledResponsive"
import styled from "styled-components"

export const SiteWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  ${breakpoints("width", ["90%", "90%", "80%", "960px"])}
`

export const Filler = styled.div`
  background-color: #666;
  height: 200px;
  width: 100%;
`
export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`
