import styled from "styled-components"

interface FlexProps {
  direction?: string
  justify?: string
  align?: string
  gap?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "flex-start"};
  gap: ${props => props.gap || 0};
`
