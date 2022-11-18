import styled from "styled-components"

interface TypographyProps {
  color?: string
  fontSize?: number
  margin?: string
  textAlign?: "center" | "left" | "right" | "justify"
}

export const Heading = styled.div<TypographyProps>`
  color: ${({ color = "black" }) => color};
  display: inline-block;
  font-family: PlayfairDisplay800;
  font-size: ${({ fontSize = 1}) => `${fontSize}rem`};
  margin: ${({ margin }) => margin || 0};
  text-align: ${({ textAlign = "left" }) => textAlign};
`

export const SubHeading = styled(Heading)<TypographyProps>`
  font-family: PlayfairDisplay700;
`

export const Paragraph = styled.div<TypographyProps>`
  color: ${({ color = "black" }) => color};
  font-family: Poppins500;
  font-size: ${({ fontSize = 1 }) => `${fontSize}rem`};
  line-height: 2rem;
  margin: ${({ margin = 0 }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`