import React, { useEffect } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Fade } from "@mui/material"

const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
  z-index: 1;
`
interface LayoutProps {
  children: JSX.Element
}


export const Layout = ({ children }: LayoutProps) => {
 
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
