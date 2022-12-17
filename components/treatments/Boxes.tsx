import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import { CuiListCollection, CuiListItem, CuiListItemText, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${CuiColors.grey(0.1)};
  padding: 3.2rem 0rem;
`
const BoxesContent = styled(Content)`
  padding: 3.2rem 0rem;
  top: -20rem;
  margin-bottom: -20rem;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: 3.2rem ${breakPoint.lg.padding};
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    width: 100%;
    padding-left: ${breakPoint.sm.padding};
    padding-right: ${breakPoint.sm.padding};
    margin-bottom: -24rem;
  }
`
const Box = styled.div`
  width: 26.7rem;
  min-height: 35.2rem;
  box-shadow: -4px 4px 35px rgba(90, 68, 53, 0.1);
  background-color: ${CuiColors.white()};
  margin: auto;
  padding: 0 1.5rem;
  width: 100%;
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px){
    min-height: 20rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    min-height: auto;
    padding: 1.5rem;
    width: 100%;
  }
`
const BoxesBorder = styled(Border)`
  border: 5px solid transparent;
  border-color: ${CuiColors.brown(0.1)} !important;
  transform: translate(0.8rem, 0.8rem) !important;
  width: calc(100% + 1rem);
  & .box {
    transform: translate(-1.3rem, -1.3rem) !important;
  }
`

const BoxHeading = styled(SubHeading)`
  font-size: 2.5rem;
  color: ${CuiColors.brown(0.9)};
  padding: 2rem 0rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 1.4rem;
    padding: 0 0 1rem 0;
  }
`

export const Boxes = () => {
    return (
        <Container>
            <BoxesContent>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Deréktáji fájdalmak</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>gerincsérv</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>akut derékfájás /”becsípődés”/</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>idült derékfájás /hosszú ideje fennálló/</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>alsó végtagba kisugárzó panaszok</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>instabilitás</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Nyaki panaszok</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>gerincsérv</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>nyaki fájdalmak</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>fejfájás</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>fülzúgás</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>felső végtagba kisugárzó panaszok</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Tartásjavítás</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>gerincferdülés</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>Scheuermann betegség</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>mellkasdeformitások</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>általános helytelen testtartás</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Végtag fájdalmak</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>váll</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>könyök</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>kéz</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>csípő</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>térd</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>boka</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>láb</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Sportsérülések</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>szalagszakadás</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>rándulás</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>ficam</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>törések</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Műtétek után</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>törések</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>gerincműtétek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>hegek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>végtagi műtétek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>egyéb műtétek</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Megelőzés</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>műtétekre való felkészítés</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>célzott terápia a sérülések megelőzésére</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>általános kondicionálás</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>általános kivizsgálás</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                </Grid>
            </BoxesContent>
        </Container>
    )
}
