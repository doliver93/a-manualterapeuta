import React from "react"
import styled from "styled-components"

// import background from "images/mainpage/test3.png"
import background from "images/mainpage/a-manualterapeuta-intro2.webp"
import { Navigation } from "components/navigation/Navigation"
import { breakPoint, Content, CuiLink, FlexLeftColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import logo from "images/layout/logo-white.svg"
import { ExternalLinks } from "enums/ExternalLinks"

const Container = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  @media (max-width: ${breakPoint.custom.width}px) {
    background-position: 50% calc(50% + 3.2rem);
  }
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
                    textColor={CuiColors.brown(0.8)}
                    textHover={CuiColors.brown(1)}
                    buttonBackgroundColor={CuiColors.darkBeige(0.8)}
                    buttonBackgroundColorHover={CuiColors.darkBeige(1)}
                    buttonTextColor={CuiColors.white(0.8)}
                    buttonTextColorHover={CuiColors.white(1)}
                />
                <IntroContainer>
                    <Heading color={CuiColors.brown(0.8)} fontSize={4.5} margin="1.6rem 0">
            Papp Alexandra vagyok,
                    </Heading>
                    <SubHeading color={CuiColors.brown(0.7)} fontSize={2.5} margin="0 0 3.2rem 0">
            manuálterapeuta, gyógytornász-fizioterapeuta,
                        <br />
            gyógy-és sportmasszőr, és WALKenergie edző
                    </SubHeading>
                    <SubHeading color={CuiColors.brown(0.7)} fontSize={2.5} margin="0 0 1rem 0">
            Térj vissza a teljes élethez
                    </SubHeading>
                    <Paragraph color={CuiColors.brown(0.7)} fontSize={1.8} margin="0 0 3.2rem 0">
            Segítségemmel megőrizheted mozgásszerveid egészségét. Manuálterápiás és lágyrész kezeléses módszereimmel feltárom a fájdalmaid okát.
                    </Paragraph>
                    <CuiLink href={ExternalLinks.APPOINTMENT} target="_blank" rel="noopener noreferrer">
                        <PrimaryButton>bejelentkezés állapotfelmérésre</PrimaryButton>
                    </CuiLink>
                </IntroContainer>
            </Content>
        </Container>
    )
}
