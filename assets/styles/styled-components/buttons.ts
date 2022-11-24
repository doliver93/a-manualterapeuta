import styled from "styled-components"
import { CuiColors } from "styles/colors"

interface PrimaryButtonProps {
  backgroundColor?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
}
export const PrimaryButton = styled.div<PrimaryButtonProps>`
  background-color: ${({ backgroundColor = CuiColors.darkBeige(0.8) }) => backgroundColor};
  color: ${({ color = CuiColors.white(0.8) }) => color};
  cursor: pointer;
  font-family: Poppins600;
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  padding: 1.4rem 1.6rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ backgroundHover = CuiColors.darkBeige(1) }) => backgroundHover};
    color: ${({ colorHover = CuiColors.white(1) }) => colorHover};
  }
`
