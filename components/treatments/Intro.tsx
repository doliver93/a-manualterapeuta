import React from "react"
import styled from "styled-components"

import background from "images/treatments/kezelesek-intro.png"
import { Navigation } from "components/navigation/Navigation"
import { breakPoint, Content, FlexLeftColumn } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import logo from "images/layout/logo-white.svg"

const Container = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100%;
  @media (max-width: ${breakPoint.sm.width}px) {
    height: 100vh;
  }
`

const IntroContainer = styled(FlexLeftColumn)`
  height: 50vh;
  @media (max-width: ${breakPoint.sm.width}px) {
    height: 100vh;
  }
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
            Kezelések
                    </Heading>
                    <SubHeading color={CuiColors.white()}>
            Részletes leírás, hogy könnyebben eligazodj
                    </SubHeading>
                </IntroContainer>
            </Content>
        </Container>
    )
}
