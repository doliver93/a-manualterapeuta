import { AmaColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
import { Intro } from "components/about/Intro"
import { Layout } from "components/layout/Layout"
import { Navigation } from "components/layout/Navigation"
import React from "react"
import styled from "styled-components"

import logo from "images/layout/logo-brown.svg"
import { Studies } from "components/about/Studies"
import { Images } from "components/about/Images"

const Container = styled.div`
    padding: 5rem 0;
    background-color: ${AmaColors.white()}
`

const About = () => {
    return (
        <Layout>
            <>
                <Content>
                    <Navigation
                        logo={logo}
                        textColor={AmaColors.brown(0.8)}
                        textHover={AmaColors.brown(1)}
                        buttonBackgroundColor={AmaColors.lightBeige(0.7)}
                        buttonBackgroundColorHover={AmaColors.lightBeige(1)}
                        buttonTextColor={AmaColors.white(0.8)}
                        buttonTextColorHover={AmaColors.white(1)}
                    />
                </Content>
                <Container>
                    <Intro />
                    <Studies />
                    <Images />
                </Container>
            </>
        </Layout>
    )
}

export default About