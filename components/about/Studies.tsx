import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { breakPoint, Content } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"
import { ComponentType } from "types/ComponentType"

const TitleContainer = styled.div`
    width: 100%;
    background-color: ${CuiColors.white()};
    @media (max-width: ${breakPoint.sm.width}px) {
        padding: 0;
    }
`
const Container = styled.div`
  width: 100%;
  background-color: ${CuiColors.grey(0.2)};
  padding-bottom: 60rem;
  margin-bottom: -20rem;
  @media (max-width: ${breakPoint.md.width}px) {
    padding-bottom: 33rem;
    margin-bottom: -10rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding-bottom: 31rem;
    margin-bottom: -10rem;
  }
  
`
const StudiesContainer = styled.ul`
  list-style: none;
  margin: 0 0 4.8rem 0;
  padding: 0;
  @media (max-width: ${breakPoint.md.width}px) {
    margin: 0;
  }
`
const StudiesItem = styled.li`
    font-family: Poppins500;
    color: ${CuiColors.brown(0.8)};
    font-size: 1.8rem;
    &:before {
        content: "•";
        color: ${CuiColors.brown(0.8)};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: 0rem;
    }
    @media (max-width: ${breakPoint.sm.width}px) {
        font-size: 1.2rem;
    }
`

export const Studies = ({ viewport }: ComponentType) => {
    return (
        <>
            <TitleContainer>
                <Content>
                    <Heading color={CuiColors.brown(0.9)} margin={{ md: "8rem 0 1.7rem 0", sm: "3rem 0 1.7rem 0" }}>
            Továbbképzéseim
                    </Heading>
                </Content>
            </TitleContainer>
            <Container>
                <Content>
                    <SubHeading color={CuiColors.brown(0.9)} margin={{ md: "3rem 0 4.8rem 0", sm: "3rem 0" }}>
              Tanulmányaim segítségével specifikus kezelésekben részesülhetsz
                    </SubHeading>
                    <Grid container justifyContent="space-between">
                        <Grid item md={5} xs={12}>
                            <StudiesContainer>
                                <StudiesItem>Semmelweis Egyetem Általános Orvostudományi Kara által elfogadott Manuálterápia</StudiesItem>
                                <StudiesItem>Anatomy Trains (folyamatban)</StudiesItem>
                                <StudiesItem>McKenzie A kurzus</StudiesItem>
                                <StudiesItem>Lágyrész technikák, triggerpont kezelés</StudiesItem>
                                <StudiesItem>Ágyéki Szegmentalis stabilizációs tréning</StudiesItem>
                            </StudiesContainer>
                        </Grid>
                        <Grid item md={5} xs={12} justifyContent="flex-end">
                            <StudiesContainer>
                                <StudiesItem>Kinematic Taping</StudiesItem>
                                <StudiesItem>Csecsemő és kisgyermek taping</StudiesItem>
                                <StudiesItem>Sporttaping</StudiesItem>
                                <StudiesItem>SMR henger</StudiesItem>
                                <StudiesItem>3D scoliosis/ Schroth terápia</StudiesItem>
                                <StudiesItem>Neurodinamika</StudiesItem> 
                            </StudiesContainer>
                        </Grid>
                    </Grid>
                </Content>
            </Container>
            
        </>
    )
}
