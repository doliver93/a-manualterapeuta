import styled from "styled-components"
import { AmaColors } from "styles/colors"

interface PrimaryButtonProps {
  backgroundColor?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
}
export const PrimaryButton = styled.div<PrimaryButtonProps>`
  background-color: ${({ backgroundColor = AmaColors.darkBeige(0.8) }) => backgroundColor};
  color: ${({ color = AmaColors.white(0.8) }) => color};
  cursor: pointer;
  font-family: Poppins600;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 0.875rem 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ backgroundHover = AmaColors.darkBeige(1) }) => backgroundHover};
    color: ${({ colorHover = AmaColors.white(1) }) => colorHover};
  }
`
