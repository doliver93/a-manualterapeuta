import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const TitleContainer = styled.div`
    width: 100%;
    background-color: ${CuiColors.white()};
    padding 8rem 0;
`
const Container = styled.div`
  width: 100%;
  background-color: ${CuiColors.grey(0.2)};
  padding: 3rem 0;
  padding-bottom: 56rem;
`
const StudiesContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const StudiesItem = styled.li`
    font-family: Poppins500;
    color: ${CuiColors.brown(0.8)};
    display: table;
    &:before {
        content: "•";
        color: ${CuiColors.brown(0.8)};
        font-weight: bold;
        display: inline-block;
        width: 1.6em;
`


export const Studies = () => {
    return (
        <>
            <TitleContainer>
                <Content>
                    <Heading fontSize={4.5} color={CuiColors.brown(0.9)} margin="0 0 0.8rem 0">
            Továbbképzéseim
                    </Heading>
                </Content>
                <Container>
                    <Content>
                        <SubHeading fontSize={2.5} color={CuiColors.brown(0.9)} margin="0 0 4.8rem 0">
              Tanulmányaim segítségével specifikus kezelésekben részesülhetsz
                        </SubHeading>
                        <Grid container spacing={10}>
                            <Grid item xs={6}>
                                <StudiesContainer>
                                    <StudiesItem>Semmelweis Egyetem Általános Orvostudományi  Kara által elfogadott Manuálterápia</StudiesItem>
                                    <StudiesItem>Anatomy Trains (folyamatban)</StudiesItem>
                                    <StudiesItem>McKenzie A kurzus</StudiesItem>
                                    <StudiesItem>Lágyrész technikák, triggerpont kezelés</StudiesItem>
                                    <StudiesItem>Ágyéki Szegmentalis stabilizációs tréning</StudiesItem>
                                </StudiesContainer>
                            </Grid>
                            <Grid item xs={5} justifyContent="flex-end">
                                <StudiesItem>Kinematic Taping</StudiesItem>
                                <StudiesItem>Csecsemő és kisgyermek taping</StudiesItem>
                                <StudiesItem>Sporttaping</StudiesItem>
                                <StudiesItem>SMR henger</StudiesItem>
                                <StudiesItem>3D scoliosis/ Schroth terápia</StudiesItem>
                                <StudiesItem>Neurodinamika</StudiesItem>
                            </Grid>
                        </Grid>
                    </Content>
                </Container>
            </TitleContainer>
        </>
    )
}
