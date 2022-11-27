import styled from "styled-components"
import { breakPoint } from "../shared"
import { BreakPointsImages } from "types/BreakPoints"

interface CuiImageProps {
  src: string
  alt: string
  imgWidth: BreakPointsImages
  imgHeight?: BreakPointsImages
  margin?: string
  pos?: { x: number; y: number }
}
export const CuiImage = styled.img<CuiImageProps>`
  display: inline-block;
  height: ${({ imgHeight }) => (imgHeight && imgHeight.og ? `${imgHeight.og}px` : "auto")};
  margin: ${({ margin = "auto" }) => margin};
  pointer-events: none;
  user-select: none;
  width: ${({ imgWidth }) => (imgWidth && imgWidth.og ? `${imgWidth.og}px` : "auto")};
  transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x}rem, ${pos.y}rem)`};
  @media (max-width: ${breakPoint.lg.width}px) {
    height: ${({ imgHeight }) => (imgHeight && imgHeight.lg ? `${imgHeight.lg}px` : imgHeight && imgHeight.og ? `${+imgHeight.og * breakPoint.lg.imgSize}px` : "auto")};
    width: ${({ imgWidth }) => (imgWidth && imgWidth.lg ? `${imgWidth.lg}px` : imgWidth && imgWidth.og ? `${+imgWidth.og * breakPoint.lg.imgSize}px` : "auto")};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    height: ${({ imgHeight }) => (imgHeight && imgHeight.md ? `${imgHeight.md}px` : "auto")};
    width: ${({ imgWidth }) => (imgWidth && imgWidth.md ? `${imgWidth.md}px` : imgWidth && imgWidth.og ? `${imgWidth.og}px` : "auto")};
    transform: ${({ pos = { x: 0, y: 0 } }) => `translate(${pos.x * 0.5}rem, ${pos.y * 0.5}rem)`};
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    height: ${({ imgHeight }) => (imgHeight && imgHeight.sm ? `${imgHeight.sm}px` : "auto")};
    width: ${({ imgWidth }) => (imgWidth && imgWidth.sm ? `${imgWidth.sm}px` : "auto")};
  }
`

// Img.defaultProps = {
//     layout: "responsive"
// }
