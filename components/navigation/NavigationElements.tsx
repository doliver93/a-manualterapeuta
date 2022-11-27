import React, { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { StaticImageData } from "next/image"
import { ExternalLinks } from "enums/ExternalLinks"
import { breakPoint, CuiLink } from "assets/styles/shared"
import { CuiImage } from "assets/styles/styled-components/images"
import { useRouter } from "next/router"
import { CuiColors } from "assets/styles/colors"

const Logo = styled(CuiImage)`
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
  @media (max-width: ${breakPoint.md.width}px) {
    display: none;
  }
`

interface CuiLinkTextProps {
  color: string
  colorHover: string
}

const CuiLinkText = styled.div<CuiLinkTextProps>`
  border: 3px solid transparent;
  border-radius: 3px;
  color: ${({ color = "black" }) => color};
  cursor: pointer;
  font-family: Poppins600;
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  margin: 0;
  text-transform: uppercase;
  
  &:hover {
    color: ${({ colorHover = "black" }) => colorHover};
  }
  &.active {
    border-bottom-color: ${({ color = "black" }) => color};
  }
  &.active:hover {
    border-bottom-color: ${({ colorHover = "black" }) => colorHover};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    border-bottom-color: transparent !important;
    padding-bottom: 1rem;
    padding-left: 1.6rem;
    text-align: left;
    width: 100%;
  }
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
`

const NavLink = styled(CuiLink)`
  @media (max-width: ${breakPoint.md.width}px) {
    margin: 1.6rem 0;
    width: 100%;
    border-bottom: 5px solid ${CuiColors.darkBeige(0.2)};
    &:last-of-type {
      border-bottom-color: transparent;
    }
    @media (max-width: ${breakPoint.sm.width}px) {
      border-bottom: 3px solid ${CuiColors.darkBeige(0.2)};
    }
  }
`
const NonLink = styled.div`
  text-align: center;
  @media (max-width: ${breakPoint.md.width}px) {
    margin: 1.6rem 0;
    width: 100%;
    border-bottom: 5px solid ${CuiColors.darkBeige(0.2)};
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    border-bottom: 3px solid ${CuiColors.darkBeige(0.2)};
  }
`
const LogoLink = styled(CuiLink)`
  @media (max-width: ${breakPoint.md.width}px) {
    display: none;
  }
`
const NavButton = styled(PrimaryButton)`
  text-align: center;
  @media (max-width: ${breakPoint.md.width}px) {
    width: 100%;
  }
`
interface NavigationProps {
  logo: StaticImageData
  textColor: string
  textHover: string
  buttonBackgroundColor: string
  buttonBackgroundColorHover: string
  buttonTextColor: string
  buttonTextColorHover: string
  setOpen: Dispatch<SetStateAction<boolean>>
}
export const NavigationElements = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover, setOpen }: NavigationProps) => {
    const router = useRouter()

    const scrollToFooter = () => {
        const element = document.getElementById("footer")
        element && element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        setOpen(false)
    }
    return (
        <>
            <LogoLink href="/">
                <Logo src={logo.src} alt="A manualterapeuta" imgWidth={{og: 56}} imgHeight={{og: 40}} />
            </LogoLink>
            <NavLink href="/kezelesek/">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/kezelesek" && "active"}>
          Kezelések
                </CuiLinkText>
            </NavLink>
            <NavLink href="/allapotfelmeres/">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/allapotfelmeres" && "active"}>
          Állapotfelmérés
                </CuiLinkText>
            </NavLink>
            <NavLink href="/rolam">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/rolam" && "active"}>
          Rólam
                </CuiLinkText>
            </NavLink>
            <NavLink href="/arlista">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/arlista" && "active"}>
          Árlista
                </CuiLinkText>
            </NavLink>
            <NonLink>
                <CuiLinkText color={textColor} colorHover={textHover} onClick={scrollToFooter}>
          Kapcsolat
                </CuiLinkText>
            </NonLink>
            <NavLink href={ExternalLinks.APPOINTMENT} target="_blank" rel="noopener noreferrer">
                <NavButton backgroundColor={buttonBackgroundColor} backgroundHover={buttonBackgroundColorHover} color={buttonTextColor} colorHover={buttonTextColorHover}>
          Időpontfoglalás
                </NavButton>
            </NavLink>
        </>
    )
}
