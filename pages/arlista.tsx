import { CuiColors } from "assets/styles/colors"
import { Layout } from "components/layout/Layout"
import { Navigation } from "components/navigation/Navigation"
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
    padding: 16rem 0;
`
const PricesContainer = styled.div`
    background-color: ${CuiColors.darkBeige(0.1)};
    padding-top: 3.2rem;
    padding-bottom: 8rem;
    position: relative;
 
`
const PriceParagraph = styled(Paragraph)`
    color: ${CuiColors.brown(0.8)};
    font-size: 1.8rem;

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
                        textColor={CuiColors.brown(0.8)}
                        textHover={CuiColors.brown(1)}
                        buttonBackgroundColor={CuiColors.lightBeige(0.7)}
                        buttonBackgroundColorHover={CuiColors.lightBeige(1)}
                        buttonTextColor={CuiColors.white(0.8)}
                        buttonTextColorHover={CuiColors.white(1)}
                    />
                </Content>
                <Container>
                    <PricesContainer>
                        <Content>
                            <Grid container justifyContent="space-between" alignItems="stretch">
                                <Grid item xs={7} alignItems="stretch">
                                    <Heading color={CuiColors.brown(0.9)} fontSize={4.5} margin="0 0 4.5rem 0">
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
                                        <Border pos={{x: -2.4, y: 2.4}}>
                                            <CuiImage src={arlista.src} width={466} height={699} alt="Árlista" pos={{x: 2.4, y: -2.4}}/>
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
