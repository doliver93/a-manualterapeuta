import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { StaticImageData } from "next/image"
import { ExternalLinks } from "enums/ExternalLinks"
import { CuiLink } from "assets/styles/shared"
import { CuiImage } from "assets/styles/styled-components/images"

const NavigationContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem 0;
`

const Logo = styled(CuiImage)`
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
`

interface CuiLinkTextProps {
  color: string
  colorHover: string
}
const CuiLinkText = styled.div<CuiLinkTextProps>`
  color: ${({ color = "black"}) => color};
  cursor: pointer;
  font-family: Poppins600;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 0 1.25rem;
  border: 3px solid transparent;
  border-radius: 3px;
  &:hover {
    color: ${({ colorHover = "black" }) => colorHover};
  }
  &.active {
    border-bottom-color: ${({ color = "black"}) => color};
  }
  &.active:hover{
    border-bottom-color: ${({ colorHover = "black"}) => colorHover};
  }
`

const Button = styled(PrimaryButton)`
  margin-left: 1.25rem;
`
interface NavigationProps {
  logo: StaticImageData
  textColor: string
  textHover: string
  buttonBackgroundColor: string
  buttonBackgroundColorHover: string
  buttonTextColor: string
  buttonTextColorHover: string
  active: string
}

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover, active }: NavigationProps) => {
    return (
        <NavigationContainer>
            <CuiLink href="/">
                <Logo src={logo.src} alt="A manualterapeuta" width={56} height={40} />
            </CuiLink>
            <CuiLink href="/kezelesek/">
                <CuiLinkText color={textColor} colorHover={textHover} className={active === "kezelesek" && "active"}>
          Kezelések
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/allapotfelmeres/">
                <CuiLinkText color={textColor} colorHover={textHover} className={active === "allapotfelmeres" && "active"}>
          Állapotfelmérés
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/rolam">
                <CuiLinkText color={textColor} colorHover={textHover}>
          Rólam
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/arlista">
                <CuiLinkText color={textColor} colorHover={textHover}>
          Árlista
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/about">
                <CuiLinkText color={textColor} colorHover={textHover}>
          Kapcsolat
                </CuiLinkText>
            </CuiLink>
            <CuiLink href={ExternalLinks.APPOINTMENT} target="_blank">
                <Button backgroundColor={buttonBackgroundColor} backgroundHover={buttonBackgroundColorHover} color={buttonTextColor} colorHover={buttonTextColorHover}>
          Időpontfoglalás
                </Button>
            </CuiLink>
        </NavigationContainer>
    )
}
