import styled from "styled-components"

interface ImgProps {
  alt: string
}
export const Img = styled.img<ImgProps>`
  margin: auto;
  pointer-events: none;
  user-select: none;
`
