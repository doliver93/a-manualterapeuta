import styled from "styled-components"
import { CuiColors } from "styles/colors"
import { BreakPointsGeneral } from "types/BreakPoints"
import { breakPoint } from "../shared"

interface PrimaryButtonProps {
  backgroundColor?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
  fontSize? :BreakPointsGeneral
}
export const PrimaryButton = styled.div<PrimaryButtonProps>`
  background-color: ${({ backgroundColor = CuiColors.darkBeige(0.8) }) => backgroundColor};
  color: ${({ color = CuiColors.white(0.8) }) => color};
  cursor: pointer;
  font-family: Poppins600;
  font-size: ${({ fontSize = { md: 1.6 } }) => `${fontSize.md}rem`};
  letter-spacing: 0.16rem;
  padding: 1.4rem 1.6rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ backgroundHover = CuiColors.darkBeige(1) }) => backgroundHover};
    color: ${({ colorHover = CuiColors.white(1) }) => colorHover};
  }
  
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: ${({ fontSize = { sm: 0.9 } }) => `${fontSize.sm}rem`};
    padding: 1rem;
  }
`
