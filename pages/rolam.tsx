import { CuiColors } from "assets/styles/colors"
import { Intro } from "components/about/Intro"
import { Layout } from "components/layout/Layout"
import { Navigation } from "components/navigation/Navigation"
import React from "react"
import styled from "styled-components"

import logo from "images/layout/logo-brown.svg"
import { Studies } from "components/about/Studies"
import { Images } from "components/about/Images"
import { findViewport } from "helper/findViewport"
import { ImagesResponsive } from "components/about/ImagesResponsive"
import { breakPoint } from "assets/styles/shared"

const Container = styled.div`
    background-color: ${CuiColors.white()};
    @media (max-width: ${breakPoint.md.width}px) {
        padding-top: 10rem;
    }
    @media (max-width: ${breakPoint.sm.width}px) {
        padding-top: 6rem;
    }
`

const About = () => {
    const viewport = findViewport()
    return (
        <Layout>
            <>
                <Navigation
                    logo={logo}
                    textColor={viewport === "laptop" ? CuiColors.brown(0.8) : CuiColors.darkBeige()}
                    textHover={viewport === "laptop" ? CuiColors.brown(1) : CuiColors.darkBeige()}
                    buttonBackgroundColor={CuiColors.lightBeige(0.7)}
                    buttonBackgroundColorHover={CuiColors.lightBeige(1)}
                    buttonTextColor={CuiColors.white(0.8)}
                    buttonTextColorHover={CuiColors.white(1)}
                    relative={true}
                />
                <Container>
                    <Intro viewport={viewport} />
                    <Studies />
                    {viewport === "laptop" ? <Images /> : <ImagesResponsive />}
                </Container>
            </>
        </Layout>
    )
}

export default About