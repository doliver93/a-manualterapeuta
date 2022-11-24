import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { breakPoint, FlexCenter } from "../shared"

interface CuiImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  margin?: string
  pos?: { x: number; y: number }
}
export const CuiImage = styled.img<CuiImageProps>`
  display: inline-block;
  height: ${({ height = "auto" }) => `${height}px`};
  margin: ${({ margin = "auto" }) => margin};
  pointer-events: none;
  user-select: none;
  width: ${({ width = "auto" }) => `${width}px`};
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  @media (max-width: ${breakPoint.lg.width}px) {
    transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x*0.75}rem, ${pos.y*0.75}rem)`};
  }
`

// Img.defaultProps = {
//     layout: "responsive"
// }
