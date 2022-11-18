import React, { useEffect } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Fade } from "@mui/material"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
`
interface LayoutProps {
  children: JSX.Element
}


export const Layout = ({ children }: LayoutProps) => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
  
    return (
        <StyledLayout>
            <Fade in={true} timeout={750}>
                <div>
                    {children}
                    <Footer />
                </div>
            </Fade>
        </StyledLayout>
    )
}
