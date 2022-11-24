import React, { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import { StaticImageData } from "next/image"
import { CuiLink, FlexCenter } from "assets/styles/shared"
import { CuiImage } from "assets/styles/styled-components/images"
const Logo = styled(CuiImage)`
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
`


interface CuiMenuIconProps {
  color: string
  colorHover: string
}
const CuiMenuIcon = styled(FlexCenter)<CuiMenuIconProps>`
  color: ${({ color = "black" }) => color};
  font-size: 5.6rem;
  z-index: 1000;
  
  position: relative;
  &:hover {
    color: ${({ colorHover = "black" }) => colorHover};
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
                <Logo src={logo.src} alt="A manualterapeuta" width={56} height={40} />
            </CuiLink>
            <CuiMenuIcon color={textColor} colorHover={textHover} onClick={() => setOpen(!open)}>
                {icon}
            </CuiMenuIcon>
        </>
    )
}
