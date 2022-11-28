import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { breakPoint, Content } from "assets/styles/shared"
import { CuiListCollection, CuiListItem, CuiListItemText, Heading, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

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

export const Studies = () => {
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
                            <CuiListCollection>
                                <CuiListItem><CuiListItemText>Semmelweis Egyetem Általános Orvostudományi Kara által elfogadott Manuálterápia</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Anatomy Trains (folyamatban)</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>McKenzie A kurzus</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Lágyrész technikák, triggerpont kezelés</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Ágyéki Szegmentalis stabilizációs tréning</CuiListItemText></CuiListItem>
                            </CuiListCollection>
                        </Grid>
                        <Grid item md={5} xs={12} justifyContent="flex-end">
                            <CuiListCollection>
                                <CuiListItem><CuiListItemText>Kinematic Taping</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Csecsemő és kisgyermek taping</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Sporttaping</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>SMR henger</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>3D scoliosis/ Schroth terápia</CuiListItemText></CuiListItem>
                                <CuiListItem><CuiListItemText>Neurodinamika</CuiListItemText></CuiListItem> 
                            </CuiListCollection>
                        </Grid>
                    </Grid>
                </Content>
            </Container>
            
        </>
    )
}
