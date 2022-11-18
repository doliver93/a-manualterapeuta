import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { FlexCenter } from "../shared"

interface CuiImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  margin?: string
  pos?: { x: number; y: number }
}
export const CuiImage = styled(Image)<CuiImageProps>`
  pointer-events: none;
  user-select: none;
  width: ${({ width = "auto" }) => `${width}px`};
  height: ${({ height = "auto" }) => `${height}px`};
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  margin: ${({ margin = "auto" }) => margin};
`

// Img.defaultProps = {
//     layout: "responsive"
// }
