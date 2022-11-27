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
import { ComponentType } from "types/ComponentType"

const Container = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  @media (max-width: ${breakPoint.md.width}px) {
    background-position: calc(50% - 15rem) 50%;
  }
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    background-position: center;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    background-position: center;
    height: 37vh;
  }
`

const IntroContainer = styled(FlexLeftColumn)`
  height: 100vh;
  width: 50%;
  @media (max-width: ${breakPoint.lg.width}px) {
    width: 70%;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    height: 40vh;
  }
  @media (max-width: ${breakPoint.xs.width}px) {
    width: 100%;
  }
`

export const Intro = ({ viewport }: ComponentType) => {
    return (
        <Container>
            <Content>
                <Navigation
                    logo={logo}
                    textColor={viewport === "laptop" ? CuiColors.brown(0.8) : CuiColors.white(0.8)}
                    textHover={viewport === "laptop" ? CuiColors.brown(1) : CuiColors.white(1)}
                    buttonBackgroundColor={CuiColors.darkBeige(0.8)}
                    buttonBackgroundColorHover={CuiColors.darkBeige(1)}
                    buttonTextColor={CuiColors.white(0.8)}
                    buttonTextColorHover={CuiColors.white(1)}
                />
                <IntroContainer>
                    <Heading color={CuiColors.brown(0.8)} fontSize={{ md: 4.5, sm: 2 }} margin={{ md: "0 0 1.6rem 0", sm: "0 0" }}>
            Papp Alexandra vagyok,
                    </Heading>

                    {viewport != "mobile" ? (
                        <>
                            <SubHeading color={CuiColors.brown(0.7)} fontSize={{ md: 2.5, sm: 1.4 }} margin={{ md: "0 0 3rem 0" }}>
                manuálterapeuta, gyógytornász-fizioterapeuta,
                                <br />
                gyógy-és sportmasszőr, és WALKenergie edző
                            </SubHeading>
                            <SubHeading color={CuiColors.brown(0.7)} margin={{ md: "0 0 1rem 0" }}>
                Térj vissza a teljes élethez
                            </SubHeading>
                            <Paragraph color={CuiColors.brown(0.7)} margin={{ md: "0 0 3rem 0" }}>
                Segítségemmel megőrizheted mozgásszerveid egészségét. Manuálterápiás és lágyrész kezeléses módszereimmel feltárom a fájdalmaid okát.
                            </Paragraph>
                        </>
                    ) : (
                        <SubHeading color={CuiColors.brown(0.7)} fontSize={{ md: 2.5, sm: 1.4 }} margin={{ sm: "1.2rem 0" }}>
              manuálterapeuta,
                            <br />
              gyógytornász-fizioterapeuta,
                            <br />
              gyógy-és sportmasszőr,
                            <br />
              és WALKenergie edző
                        </SubHeading>
                    )}

                    <CuiLink href={ExternalLinks.APPOINTMENT} target="_blank" rel="noopener noreferrer">
                        <PrimaryButton 
                            backgroundColor={CuiColors.darkBeige(0.7)}
                            backgroundHover={CuiColors.darkBeige(1)}>
                          bejelentkezés állapotfelmérésre
                        </PrimaryButton>
                    </CuiLink>
                </IntroContainer>
            </Content>
        </Container>
    )
}
