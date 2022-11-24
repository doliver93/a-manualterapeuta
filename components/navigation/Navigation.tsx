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

const NavigationContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 3.2rem 0;
  
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: ${breakPoint.lg.padding};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    flex-direction: column;
    padding: 0;
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
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  transition: 0.5s all ease-out;
  @media (max-width: ${breakPoint.md.width}px) {
    padding: 3.2rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: 1rem 2rem;
  }
`
const ResponsiveContent = styled(FlexCenterColumn)`
    background-color: ${CuiColors.white()};
    width: 100%;
    padding: 2rem 6rem;
    transition: 0.5s all ease-out;
    @media (max-width: ${breakPoint.sm.width}px) {
      padding: 3.2rem;
    }
  `

export const Navigation = ({ logo, textColor, textHover, buttonBackgroundColor, buttonBackgroundColorHover, buttonTextColor, buttonTextColorHover }: NavigationProps) => {

    const [responsive, setResponsive ] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
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
        onTrigger: () => setOpen(false)
    })


    return (
        <>
            <NavigationContainer  ref={ref}>
                { responsive 
                    ? <>
                        <Header style={open ? {backgroundColor: CuiColors.white()} : {backgroundColor: "transparent"} } >
                            <HeaderElements
                                logo={open ? logoStatic : logo}
                                textColor={open ? CuiColors.brown(0.8) : textColor}
                                textHover={open ? CuiColors.brown(1) : textHover}
                                open={open}
                                setOpen={setOpen}
                                icon={ open ? <CloseIcon fontSize="inherit" style={{pointerEvents: "none"}} /> : <MenuIcon fontSize="inherit" style={{pointerEvents: "none"}} /> }
                            />
                        </Header>
                        <ResponsiveContent style={open ? {opacity: "1", zIndex: "1000"}  : {opacity: "0", zIndex: "-1"}}>
                            <NavigationElements 
                                responsive={responsive}
                                logo={logo} 
                                textColor={CuiColors.brown(0.8)}
                                textHover={CuiColors.brown(1)}
                                buttonBackgroundColor={CuiColors.lightBeige(0.7)}
                                buttonBackgroundColorHover={CuiColors.lightBeige(1)}
                                buttonTextColor={CuiColors.white(0.8)}
                                buttonTextColorHover={CuiColors.white(1)} 
                                setOpen={setOpen} />
                        </ResponsiveContent>
                    </>
                    : <NavigationElements 
                        responsive={responsive}
                        logo={logo} 
                        textColor={textColor}
                        textHover={textHover}
                        buttonBackgroundColor={buttonBackgroundColor}
                        buttonBackgroundColorHover={buttonBackgroundColorHover}
                        buttonTextColor={buttonTextColor}
                        buttonTextColorHover={buttonTextColorHover} 
                        setOpen={setOpen} /> }
            </NavigationContainer>
        </>
    )
}
