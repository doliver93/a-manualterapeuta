import React, { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import { StaticImageData } from "next/image"
import { breakPoint, CuiLink, FlexCenter } from "assets/styles/shared"
import { CuiImage } from "assets/styles/styled-components/images"

const Logo = styled(CuiImage)`
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
  width: 3rem;
  height: auto;
  text-align: left;
  @media (max-width: ${breakPoint.md.width}px) {
    width: 5rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    width: 3rem
  }
`
interface CuiMenuIconProps {
  color: string
  colorHover: string
}
const CuiMenuIcon = styled(FlexCenter)<CuiMenuIconProps>`
  color: ${({ color = "black" }) => color};
  font-size: 4rem;
  z-index: 1000;
  position: relative;
  &:hover {
    color: ${({ colorHover = "black" }) => colorHover};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    font-size: 5rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 3.5rem;
  }
`

interface HeaderfProps {
  logo: StaticImageData
  textColor: string
  textHover: string
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  icon: JSX.Element
}
export const HeaderElements = ({ logo, textColor, textHover, setOpen, open, icon }: HeaderfProps) => {

    return (
        <>
            <CuiLink href="/">
                <Logo src={logo.src} alt="A manualterapeuta" imgWidth={{og: 56}} imgHeight={{og: 40}} />
            </CuiLink>
            <CuiMenuIcon color={textColor} colorHover={textHover} onClick={() => setOpen(!open)}>
                {icon}
            </CuiMenuIcon>
        </>
    )
}
