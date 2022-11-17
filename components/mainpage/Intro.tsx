import React from "react"
import styled from "styled-components"

// import background from "images/mainpage/test3.png"
import background from "images/mainpage/a-manualterapeuta-intro2.webp"
import { Navigation } from "components/layout/Navigation"
import { Content, FlexLeftColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import logo from "images/layout/logo-white.svg"

const Container = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: 50% calc(50% + 2rem);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`

const IntroContainer = styled(FlexLeftColumn)`
  height: 100vh;
  width: 50%;
`

export const Intro = () => {
    return (
        <Container>
            <Content>
                <Navigation
                    logo={logo}
                    textColor={AmaColors.brown(0.8)}
                    textHover={AmaColors.brown(1)}
                    buttonBackgroundColor={AmaColors.darkBeige(0.8)}
                    buttonBackgroundColorHover={AmaColors.darkBeige(1)}
                    buttonTextColor={AmaColors.white(0.8)}
                    buttonTextColorHover={AmaColors.white(1)}
                    active=""
                />
                <IntroContainer>
                    <Heading color={AmaColors.brown(0.8)} fontSize={2.813} margin="1rem 0">
            Papp Alexandra vagyok,
                    </Heading>
                    <SubHeading color={AmaColors.brown(0.7)} fontSize={1.563} margin="0 0 2rem 0">
            manuálterapeuta, gyógytornász-fizioterapeuta,
                        <br />
            gyógy-és sportmasszőr, és WALKenergie edző
                    </SubHeading>
                    <SubHeading color={AmaColors.brown(0.7)} fontSize={1.563} margin="0 0 0.625rem 0">
            Térj vissza a teljes élethez
                    </SubHeading>
                    <Paragraph color={AmaColors.brown(0.7)} fontSize={1.125} margin="0 0 2rem 0">
            Segítségemmel megőrizheted mozgásszerveid egészségét. Manuálterápiás és lágyrész kezeléses módszereimmel feltárom a fájdalmaid okát.
                    </Paragraph>
                    <PrimaryButton>bejelentkezés állapotfelmérésre</PrimaryButton>
                </IntroContainer>
            </Content>
        </Container>
    )
}
