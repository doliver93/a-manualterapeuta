import { CuiColors } from "assets/styles/colors"
import { Layout } from "components/layout/Layout"
import { Navigation } from "components/navigation/Navigation"
import React from "react"

import logo from "images/layout/logo-brown.svg"
import { Border, breakPoint, Content } from "assets/styles/shared"
import styled from "styled-components"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"
import { Grid } from "@mui/material"

import arlista from "images/prices/arlista.webp"
import { CuiImage } from "assets/styles/styled-components/images"
import { findViewport } from "helper/findViewport"

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 16rem;
  @media (max-width: ${breakPoint.md.width}px) {
    padding: 0;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding-bottom: 35rem;
  }
  
`
const PricesContainer = styled.div`
  background-color: ${CuiColors.darkBeige(0.1)};
  padding-top: 5rem;
  padding-bottom: 8rem;
  position: relative;
  
`
const PriceParagraph = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};
`
const PriceContent = styled(Grid)`
  margin-bottom: 4rem;
  position: relative;
`
const TimeText = styled.div`
  font-family: Poppins600;
  font-size: 1.4rem;
  color: ${CuiColors.lightBeige()};
  padding-left: 3rem;
  position: absolute;
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 1.1rem;
  }
`
const PriceImageContainer = styled.div`
  position: absolute;
  width: 466px;
  height: 699px;
  right: 0;
  top: 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    position: relative;
    width: auto;
    height: auto;
    margin: 0;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    margin-bottom: -40rem;
  }
`
const Prices = () => {
    const viewport = findViewport()
    return (
        <Layout>
            <>
                <Navigation
                    logo={logo}
                    textColor={CuiColors.brown(0.8)}
                    textHover={CuiColors.brown(1)}
                    buttonBackgroundColor={CuiColors.lightBeige(0.7)}
                    buttonBackgroundColorHover={CuiColors.lightBeige(1)}
                    buttonTextColor={CuiColors.white(0.8)}
                    buttonTextColorHover={CuiColors.white(1)}
                    relative={true}
                />
                <Container>
                    <PricesContainer>
                        <Content>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item sm={7} xs={12} alignItems="stretch">
                                    <Heading color={CuiColors.brown(0.9)} margin={{ md: "0 0 3rem 0" }}>
                    Árlista
                                    </Heading>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Állapotfelmérés</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>15 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Manuálterápia kontroll vizsgálat</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>12 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Kombinált kezelés (gyógytorna és lágyrész)</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>12 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Gyógytorna</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>10 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Kinesiotape felhelyezés</PriceParagraph>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>4 000 Ft-tól</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container justifyContent={viewport === "mobile" && "space-between"}>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Szelektív ingeráram kezelés</PriceParagraph>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>4 000 Ft-tól</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                </Grid>
                                <Grid item sm={5} xs={12} textAlign="right">
                                    <PriceImageContainer>
                                        <Border pos={viewport === "laptop" && { x: -2.4, y: 2.4 }}>
                                            <CuiImage src={arlista.src} imgWidth={{ og: 466, md: 280, sm: 226 }} imgHeight={{ og: 699, sm: 338 }} alt="Árlista" pos={{ x: 2.4, y: -2.4 }} />
                                        </Border>
                                    </PriceImageContainer>
                                </Grid>
                            </Grid>
                        </Content>
                    </PricesContainer>
                </Container>
            </>
        </Layout>
    )
}

export default Prices
