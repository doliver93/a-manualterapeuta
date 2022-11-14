import React from "react"
import styled from "styled-components"
import { Img } from "assets/styles/styled-components/images"
import Link from "next/link"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { StaticImageData } from "next/image"

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
  height: auto;
  margin: 0;
  pointer-events: auto;
  width: 3.5rem;
`

interface NavLinkTextProps {
  color: string
  colorHover: string
}
const NavLinkText = styled.div<NavLinkTextProps>`
  color: ${({ color }) => color || "black"};
  cursor: pointer;
  font-family: PoppinsSemiBold;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 0 1.25rem;
  &:hover {
    color: ${({ colorHover }) => colorHover || "black"};
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
}

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover }: NavigationProps) => {
    return (
        <NavigationContainer>
            <Link href="/">
                <Logo src={logo.src} alt="A manualterapeuta" />
            </Link>
            <Link href="/about">
                <NavLinkText color={textColor} colorHover={textHover}>
            Kezelések
                </NavLinkText>
            </Link>
            <Link href="/about">
                <NavLinkText color={textColor} colorHover={textHover}>
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
            <Link href="/about">
                <Button backgroundColor={buttonBackgroundColor} backgroundHover={buttonBackgroundColorHover} color={buttonTextColor} colorHover={buttonTextColorHover}>
            Időpontfoglalás
                </Button>
            </Link>
        </NavigationContainer>
    )
}
