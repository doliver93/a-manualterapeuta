import React from "react"
import styled from "styled-components"
import { Img } from "assets/styles/styled-components/images"
import Link from "next/link"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { StaticImageData } from "next/image"
import { ExternalLinks } from "enums/ExternalLinks"

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

const Logo = styled(Img)`
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
`

interface NavLinkTextProps {
  color: string
  colorHover: string
}
const NavLinkText = styled.div<NavLinkTextProps>`
  color: ${({ color = "black"}) => color};
  cursor: pointer;
  font-family: PoppinsSemiBold;
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
const LinkA = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
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
  active: string
}

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover, active }: NavigationProps) => {
    return (
        <NavigationContainer>
            <Link href="/">
                <Logo src={logo.src} alt="A manualterapeuta" width={3.5} height={2.5} />
            </Link>
            <Link href="/kezelesek/">
                <NavLinkText color={textColor} colorHover={textHover} className={active === "kezelesek" && "active"}>
          Kezelések
                </NavLinkText>
            </Link>
            <Link href="/allapotfelmeres/">
                <NavLinkText color={textColor} colorHover={textHover} className={active === "allapotfelmeres" && "active"}>
          Állapotfelmérés
                </NavLinkText>
            </Link>
            <Link href="/about">
                <NavLinkText color={textColor} colorHover={textHover}>
          Rólam
                </NavLinkText>
            </Link>
            <Link href="/about">
                <NavLinkText color={textColor} colorHover={textHover}>
          Árlista
                </NavLinkText>
            </Link>
            <Link href="/about">
                <NavLinkText color={textColor} colorHover={textHover}>
          Kapcsolat
                </NavLinkText>
            </Link>
            <Link href={ExternalLinks.FACEBOOK} target="_blank">
                <LinkA target="_blank" rel="noopener noreferrer">
                    <Button backgroundColor={buttonBackgroundColor} backgroundHover={buttonBackgroundColorHover} color={buttonTextColor} colorHover={buttonTextColorHover}>
          Időpontfoglalás
                    </Button>
                </LinkA>
            </Link>
        </NavigationContainer>
    )
}
