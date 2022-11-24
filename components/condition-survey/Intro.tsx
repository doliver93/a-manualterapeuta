import React from "react"
import styled from "styled-components"

import background from "images/conditions-survey/allapotfelmeres-intro.png"
import { Navigation } from "components/navigation/Navigation"
import { Content, FlexLeftColumn } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import logo from "images/layout/logo-white.svg"

const Container = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: top;
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
                    textColor={CuiColors.white(0.8)}
                    textHover={CuiColors.white(1)}
                    buttonBackgroundColor={CuiColors.white(0.8)}
                    buttonBackgroundColorHover={CuiColors.white(1)}
                    buttonTextColor={CuiColors.brown(0.8)}
                    buttonTextColorHover={CuiColors.brown(1)}
                />
                <IntroContainer>
                    <Heading color={CuiColors.white(0.9)}>
                    Állapotfelmérés
                    </Heading>
                    <SubHeading color={CuiColors.white()}>
                    Maximális figyelem és empátia, amely csak rád irányul…
                    </SubHeading>
                </IntroContainer>
            </Content>
        </Container>
    )
}
