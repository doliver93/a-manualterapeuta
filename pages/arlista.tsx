import { AmaColors } from "assets/styles/colors"
import { Layout } from "components/layout/Layout"
import { Navigation } from "components/layout/Navigation"
import React from "react"

import logo from "images/layout/logo-brown.svg"
import { Border, Content } from "assets/styles/shared"
import styled from "styled-components"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"
import { Grid } from "@mui/material"

import arlista from "images/prices/arlista.png"
import { CuiImage } from "assets/styles/styled-components/images"

const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 10rem 0;
`
const PricesContainer = styled.div`
    background-color: ${AmaColors.darkBeige(0.1)};
    padding-top: 2rem;
    padding-bottom: 5rem;
    position: relative;
 
`
const PriceParagraph = styled(Paragraph)`
    color: ${AmaColors.brown(0.8)};
    font-size: 1.125rem;

`
const PriceContent = styled(Grid)`
    margin-bottom: 2.5rem;
    position: relative;
`
const TimeText = styled.div`
    font-family: Poppins600;
    font-size: 0.875rem;
    color: ${AmaColors.lightBeige()};
    padding-left: 1.875rem;
    position: absolute;
`
const PriceImageContainer = styled.div`
    position: absolute;
    width: 466px;
    height: 699px;
    right: 0;
    top: 0;
`
const Prices = () => {
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
                        active="arlista"
                    />
                </Content>
                <Container>
                    <PricesContainer>
                        <Content>
                            <Grid container justifyContent="space-between" alignItems="stretch">
                                <Grid item xs={7} alignItems="stretch">
                                    <Heading color={AmaColors.brown(0.9)} fontSize={2.875} margin="0rem 0rem 2.813rem 0rem">
                                Árlista  
                                    </Heading>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Állapotfelmérés</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>15 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Manuálterápia kontroll vizsgálat</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>12 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Kombinált kezelés (gyógytorna és lágyrész)</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>12 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Gyógytorna</PriceParagraph>
                                            <TimeText>50 perc</TimeText>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>10 000 Ft</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Kinesiotape felhelyezés</PriceParagraph>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>4 000 Ft-tól</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                    <PriceContent container>
                                        <Grid item xs={8}>
                                            <PriceParagraph>Szelektív ingeráram kezelés</PriceParagraph>
                                        </Grid>
                                        <Grid>
                                            <PriceParagraph>4 000 Ft-tól</PriceParagraph>
                                        </Grid>
                                    </PriceContent>
                                </Grid>
                                <Grid>
                                    <PriceImageContainer>
                                        <Border pos={{x: -1.5, y: 1.5}}>
                                            <CuiImage src={arlista.src} width={466} height={699} alt="Árlista" pos={{x: 1.5, y: -1.5}}/>
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
