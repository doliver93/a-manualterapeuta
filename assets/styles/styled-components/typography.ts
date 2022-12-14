import styled from "styled-components"
import { BreakPointsGeneral } from "types/BreakPoints"
import { CuiColors } from "../colors"
import { breakPoint } from "../shared"
interface TypographyProps {
  color?: string
  fontSize?: BreakPointsGeneral
  margin?: BreakPointsGeneral
  textAlign?: "center" | "left" | "right" | "justify"
}

export const Heading = styled.div<TypographyProps>`
  color: ${({ color = "black" }) => color};
  display: inline-block;
  font-family: PlayfairDisplay800;
  font-size: ${({ fontSize = { og: 4.5 } }) => `${fontSize.og}rem`};
  margin: ${({ margin = { md: "3rem 0" } }) => margin.md};
  text-align: ${({ textAlign = "left" }) => textAlign};
  @media (max-width: ${breakPoint.md.width}px) {
    font-size: ${({ fontSize = { md: 3 } }) => `${fontSize.md}rem`};
    margin: ${({ margin = { md: "0" } }) => margin.md};
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: ${({ fontSize = { sm: 2 } }) => `${fontSize.sm}rem`};
    line-height: 2.6rem;
    margin: ${({ margin = { sm: "0" } }) => margin.sm};
  }
`

export const SubHeading = styled(Heading)<TypographyProps>`
  font-family: PlayfairDisplay700;
  font-size: ${({ fontSize = { og: 2.5 } }) => `${fontSize.og}rem`};
  margin: ${({ margin = { md: "0" } }) => margin.md};
  @media (max-width: ${breakPoint.md.width}px) {
    font-size: ${({ fontSize = { md: 2 } }) => `${fontSize.md}rem`};
    margin: ${({ margin = { md: "0" } }) => margin.md};
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: ${({ fontSize = { sm: 1.4 } }) => `${fontSize.sm}rem`};
    line-height: 2.5rem;
    margin: ${({ margin = { sm: "0" } }) => margin.sm};
  }
`

export const Paragraph = styled.div<TypographyProps>`
  color: ${({ color = "black" }) => color};
  font-family: Poppins500;
  font-size: ${({ fontSize = { og: 1.8 } }) => `${fontSize.og}rem`};
  line-height: 3.2rem;
  margin: ${({ margin = { md: "0" } }) => margin.md};
  text-align: ${({ textAlign = "left" }) => textAlign};
  @media (max-width: ${breakPoint.md.width}px) {
    font-size: ${({ fontSize = { md: 1.5 } }) => `${fontSize.md}rem`};
    margin: ${({ margin = { md: "0" } }) => margin.md};
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: ${({ fontSize = { sm: 1.2 } }) => `${fontSize.sm}rem`};
    line-height: 1.8rem;
    margin: ${({ margin = { sm: "0" } }) => margin.sm};
  }
`

export const CuiListCollection = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`
export const CuiListItem = styled.li`
  display: flex;
  align-items: flex-start;
  &:before {
    align-items: center;
    content: "???";
    color: ${CuiColors.brown(0.8)};
    display: flex;
    font-weight: bold;
    justify-content: flex-start;
    margin-right: 1.6rem;
    
    @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
      height: 10px;
      width: 10px;
      margin-top: 0.4rem;
    }
  }
`
export const CuiListItemText = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};

`
