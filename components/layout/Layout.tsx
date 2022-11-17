import React from "react"
import styled from "styled-components"
import { Footer } from "./Footer"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
`

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <StyledLayout>
            {children}
            <Footer />
        </StyledLayout>
    )
}
