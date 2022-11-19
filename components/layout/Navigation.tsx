import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { StaticImageData } from "next/image"
import { ExternalLinks } from "enums/ExternalLinks"
import { CuiLink } from "assets/styles/shared"
import { CuiImage } from "assets/styles/styled-components/images"
import { useRouter } from "next/router"

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
}

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover }: NavigationProps) => {
    
    const router = useRouter()
    
    const scrollToFooter = () => {
        const element = document.getElementById("footer")
        console.log(element)
        element && element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }
    
    return (
        <NavigationContainer>
            <CuiLink href="/">
                <Logo src={logo.src} alt="A manualterapeuta" width={56} height={40} />
            </CuiLink>
            <CuiLink href="/kezelesek/">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/kezelesek" && "active"}>
          Kezelések
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/allapotfelmeres/">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/allapotfelmeres" && "active"}>
          Állapotfelmérés
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/rolam">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/rolam" && "active"}>
          Rólam
                </CuiLinkText>
            </CuiLink>
            <CuiLink href="/arlista">
                <CuiLinkText color={textColor} colorHover={textHover} className={router.pathname === "/arlista" && "active"}>
          Árlista
                </CuiLinkText>
            </CuiLink>
            <CuiLinkText color={textColor} colorHover={textHover} onClick={scrollToFooter}>
          Kapcsolat
            </CuiLinkText>
            <CuiLink href={ExternalLinks.APPOINTMENT} target="_blank" rel="noopener noreferrer">
                <Button backgroundColor={buttonBackgroundColor} backgroundHover={buttonBackgroundColorHover} color={buttonTextColor} colorHover={buttonTextColorHover}>
          Időpontfoglalás
                </Button>
            </CuiLink>
        </NavigationContainer>
    )
}
