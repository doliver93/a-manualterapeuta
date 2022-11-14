import styled from "styled-components"
import { AmaColors } from "styles/colors"

interface PrimaryButtonProps {
  backgroundColor?: string
  backgroundHover?: string
  color?: string
  colorHover?: string
}
export const PrimaryButton = styled.div<PrimaryButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || AmaColors.darkBeige(0.8)};
  color: ${({ color }) => color || AmaColors.white(0.8)};
  cursor: pointer;
  font-family: PoppinsSemiBold;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 0.875rem 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || AmaColors.darkBeige(1)};
    color: ${({ colorHover }) => colorHover || AmaColors.white(1)};
  }
`
