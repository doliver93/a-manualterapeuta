import Link from "next/link"
import styled from "styled-components"
import { CuiColors } from "./colors"

interface BreakPointType {
  [key: string]: {width: number, height?: number, padding?: string, imgSize?: number}
}

export const breakPoint: BreakPointType = {
    xs: {
        width: 375,
    },
    sm: {
        width: 600,
        padding: "2.5rem"
    },
    md: {
        width: 900,
        padding: "3.5rem"
    },
    lg: {
        width: 1200,
        padding: "3.5rem",
        imgSize: 0.8,
    },
    xl: {
        width: 1536,
        padding: ""
    },
    landscape: {
        height: 480,
        width: 900
    },
    custom: {
        width: 1400,
        padding: ""
    }
}

export const FlexCenter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const FlexRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const FlexLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const FlexCenterColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FlexLeftColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Content = styled.div`
  height: 100%;
  margin: auto;
  max-width: 116rem;
  position: relative;
  @media (max-width: ${breakPoint.lg.width}px) {
    width: 100%;
    padding-left: ${breakPoint.lg.padding};
    padding-right: ${breakPoint.lg.padding};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    width: 100%;
    padding-left: ${breakPoint.md.padding};
    padding-right: ${breakPoint.md.padding};
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    width: 100%;
    padding-left: ${breakPoint.sm.padding};
    padding-right: ${breakPoint.sm.padding};
  }
`
interface CuiLinkProps {
  justifyContent?: "flex-start" | "flex-end" | "center"
}
export const CuiLink = styled(Link)<CuiLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  // justify-content: ${({justifyContent = "center"}) => justifyContent};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
interface BorderProps {
  pos?: { x: number; y: number }
  borderColor?: string
  display?: "block" | "inline-block" | "flex"
  justifyContent?: "flex-start" | "center" | "flex-end"
  borderWidth?: number
}
export const Border = styled.div<BorderProps>`
  border-style: solid;
  border-color: transparent;
  border-width: ${({borderWidth = 5}) => `${borderWidth}px` };
  border: 5px solid transparent;
  border-color: ${({ borderColor = CuiColors.brown() }) => borderColor};
  display: ${({ display = "inline-flex" }) => display};
  margin: auto;
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  width: fit-content;
  @media (max-width: ${breakPoint.md.width}px) {
    border-width: ${({borderWidth = 3}) => `${borderWidth}px`};
    border-color: ${({ borderColor = CuiColors.brown(0.8) }) => borderColor};
    justify-content: ${({ justifyContent = "center"}) => justifyContent };
    margin: 0;
  }
`
interface ContainerProps {
  backgroundImage: string
}
export const Container = styled.div<ContainerProps>`
  background-image: ${({backgroundImage = "none"}) => `url(${backgroundImage})`};   
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100%;
  @media (max-width: ${breakPoint.sm.width}px) {
    height: 30vh;
  }
`

export const IntroContainer = styled(FlexLeftColumn)`
  height: 50vh;
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    height: 80vh;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    height: 35vh;
    width: 100%;
  }
`

