import Image from "next/image"
import styled from "styled-components"

interface ImgProps {
  alt: string
  width?: number
  height?: number
  margin?: string
}
export const Img = styled(Image)<ImgProps>`
  margin: ${({margin = "auto"}) => margin};
  pointer-events: none;
  user-select: none;
  width: ${({width = "auto"}) => `${width}rem`};
  height: ${({height = "auto" }) => `${height}rem`};
`
// Img.defaultProps = {
//     layout: "responsive"
// }