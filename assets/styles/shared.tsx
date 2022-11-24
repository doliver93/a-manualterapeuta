import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { CuiColors } from "./colors"

interface BreakPointType {
  [key: string]: {width: number, padding?: string, imgSize?: number}
}

export const breakPoint: BreakPointType = {
    xs: {
        width: 375,
    },
    sm: {
        width: 600,
        padding: "1.6rem"
    },
    md: {
        width: 900,
        padding: ""
    },
    lg: {
        width: 1200,
        padding: "3.2rem",
        imgSize: 0.8,
    },
    xl: {
        width: 1536,
        padding: ""
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
  position: relative;
  max-width: 116rem;
  @media (max-width: ${breakPoint.lg.width}px) {
    width: 100%;
    padding-left: ${breakPoint.lg.padding};
    padding-right: ${breakPoint.lg.padding};
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
  display?: "block" | "inline-block"
}
export const Border = styled.div<BorderProps>`
  border: 5px solid transparent;
  border-color: ${({ borderColor = CuiColors.brown() }) => borderColor};
  display: ${({ display = "inline-block" }) => display};
  margin: auto;
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  width: fit-content;
`
