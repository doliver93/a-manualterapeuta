import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { breakPoint, FlexCenter } from "../shared"
import { BreakPoints } from "types/BreakPoints"

interface CuiImageProps {
  src: string
  alt: string
  imgWidth?: BreakPoints
  imgHeight?: BreakPoints
  margin?: string
  pos?: { x: number; y: number }
}
export const CuiImage = styled.img<CuiImageProps>`
  display: inline-block;
  height: ${({ imgHeight = { md: "auto" } }) => `${imgHeight.md}px`};
  margin: ${({ margin = "auto" }) => margin};
  pointer-events: none;
  user-select: none;
  width: ${({ imgWidth = { md: "auto" } }) => `${imgWidth.md}px`};
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  @media (max-width: ${breakPoint.lg.width}px) {
    transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x*0.75}rem, ${pos.y*0.75}rem)`};
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    height: ${({ imgHeight = { sm: "auto" } }) => `${imgHeight.sm}px`};
    width: ${({ imgWidth = { sm: "auto" } }) => `${imgWidth.sm}px`};
  }
`

// Img.defaultProps = {
//     layout: "responsive"
// }
