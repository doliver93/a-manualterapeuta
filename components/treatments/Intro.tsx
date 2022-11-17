import React from "react"
import styled from "styled-components"

import background from "images/treatments/kezelesek-intro.png"
import { Navigation } from "components/layout/Navigation"
import { Content, FlexLeftColumn } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"
import logo from "images/layout/logo-white.svg"

const Container = styled.div`
background-image: url(${background.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 80vh;
width: 100%;
`

const IntroContainer = styled(FlexLeftColumn)`
height: 50vh;
`

export const Intro = () => {
    return (
        <Container>
            <Content>
                <Navigation
                    logo={logo}
                    textColor={AmaColors.white(0.8)}
                    textHover={AmaColors.white(1)}
                    buttonBackgroundColor={AmaColors.white(0.8)}
                    buttonBackgroundColorHover={AmaColors.white(1)}
                    buttonTextColor={AmaColors.brown(0.8)}
                    buttonTextColorHover={AmaColors.brown(1)}
                    active="kezelesek"
                />
                <IntroContainer>
                    <Heading color={AmaColors.white(0.9)} fontSize={2.813} margin="1.375rem 0">
                    Kezelések
                    </Heading>
                    <SubHeading color={AmaColors.white()} fontSize={1.563} margin="0 0 2rem 0">
                    Részletes leírás, hogy könnyebben eligazodj
                    </SubHeading>
                </IntroContainer>
            </Content>
        </Container>
    )
}
