import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { StaticImageData } from "next/image"
import { breakPoint, FlexCenterColumn } from "assets/styles/shared"
import { NavigationElements } from "./NavigationElements"
import { HeaderElements } from "./HeaderElements"
import { CuiColors } from "assets/styles/colors"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import logoStatic from "images/layout/logo-brown.svg"
import { useOutsideClick } from "helper/useOutSideClick"

interface NavigationContainerProps {
  relative: boolean
}
const NavigationContainer = styled.div<NavigationContainerProps>`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  top: 0;
  margin: auto;
  width: 100%;
  max-width: ${({ relative }) => (relative ? "116rem" : "unset")};
  padding: 3.2rem 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: 2rem ${breakPoint.lg.padding};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    flex-direction: column;
    padding: 0;
  }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  transition: 0.3s all ease-out;
  transition-delay: 0.01s;
  @media (max-width: ${breakPoint.md.width}px) {
    padding: 2rem ${breakPoint.md.padding};
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: 2rem ${breakPoint.sm.padding};
  }
`
const ResponsiveContent = styled(FlexCenterColumn)`
  background-color: ${CuiColors.white()};
  border-bottom: 3px solid ${CuiColors.darkBeige(0.2)};
  display: none;
  opacity: 0;
  padding: 2rem 6rem;
  transition: 0.3s all ease-out;
  transition-delay: 0.01s;
  width: 100%;
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: ${breakPoint.sm.padding};
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
  relative?: boolean
}

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover, relative = false }: NavigationProps) => {
    const [responsive, setResponsive] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const { outerWidth: width } = window
        const handleResize = () => {
            const { outerWidth: width } = window
            setResponsive(width <= breakPoint.md.width)
        }
        setResponsive(width <= breakPoint.md.width)
        window.addEventListener("resize", handleResize)
    }, [])

    useOutsideClick({
        ref,
        watch: open,
        onTrigger: () => setOpen(false),
    })

    useEffect(() => {
        if (content.current) {
            if (open) {
                content.current.style.display = "block"
                setTimeout(() => {
                    content.current.style.opacity = "1"
                }, 10)
            } else {
                setTimeout(() => {
                    content.current.style.opacity = "0"
                }, 10)
                setTimeout(() => {
                    content.current.style.display = "none"
                }, 500)
            }
        }
    }, [open])

    return (
        <>
            <NavigationContainer ref={ref} relative={relative}>
                {responsive ? (
                    <>
                        <Header style={open ? { backgroundColor: CuiColors.white() } : { backgroundColor: "transparent" }}>
                            <HeaderElements
                                logo={open ? logoStatic : logo}
                                textColor={open ? CuiColors.brown(0.8) : textColor}
                                textHover={open ? CuiColors.brown(1) : textHover}
                                open={open}
                                setOpen={setOpen}
                                icon={open ? <CloseIcon fontSize="inherit" style={{ pointerEvents: "none" }} /> : <MenuIcon fontSize="inherit" style={{ pointerEvents: "none" }} />}
                            />
                        </Header>
                        <ResponsiveContent style={open ? { zIndex: "1000" } : { zIndex: "-1" }} ref={content}>
                            <NavigationElements
                                logo={logo}
                                textColor={CuiColors.brown(0.8)}
                                textHover={CuiColors.brown(1)}
                                buttonBackgroundColor={CuiColors.darkBeige(0.5)}
                                buttonBackgroundColorHover={CuiColors.darkBeige(1)}
                                buttonTextColor={CuiColors.white(1)}
                                buttonTextColorHover={CuiColors.white(1)}
                                setOpen={setOpen}
                            />
                        </ResponsiveContent>
                    </>
                ) : (
                    <NavigationElements
                        logo={logo}
                        textColor={textColor}
                        textHover={textHover}
                        buttonBackgroundColor={buttonBackgroundColor}
                        buttonBackgroundColorHover={buttonBackgroundColorHover}
                        buttonTextColor={buttonTextColor}
                        buttonTextColorHover={buttonTextColorHover}
                        setOpen={setOpen}
                    />
                )}
            </NavigationContainer>
        </>
    )
}
