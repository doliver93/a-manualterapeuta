import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${CuiColors.grey(0.1)};
  padding: 3.2rem 0rem;
`
const BoxesContent = styled(Content)`
  padding: 3.2rem 0rem;
  top: -10rem;
  margin-bottom: -10rem;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: 3.2rem ${breakPoint.lg.padding};
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    width: 100%;
    padding-left: ${breakPoint.sm.padding};
    padding-right: ${breakPoint.sm.padding};
    margin-bottom: -12rem;
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
const BoxListCollection = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`
const BoxListItem = styled.li`
  display: flex;
  align-items: flex-start;
  &:before {
    content: "•";
    color: ${CuiColors.brown(0.8)};
    font-weight: bold;
    display: inline-block;
    margin-right: 1.6rem;
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    align-items: center;
  }
`

const BoxListItemText = styled(Paragraph)`
  font-size: 1.8rem;
  color: ${CuiColors.brown(0.8)};
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 1.2rem;
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
                            <BoxListCollection>
                                <BoxListItem>
                                    <BoxListItemText>gerincsérv</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>akut derékfájás /”becsípődés”/</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>idült derékfájás /hosszú ideje fennálló/</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>alsó végtagba kisugárzó panaszok</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>instabilitás</BoxListItemText>
                                </BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Nyaki panaszok</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem>
                                        <BoxListItemText>gerincsérv</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>nyaki fájdalmak</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>fejfájás</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>fülzúgás</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>felső végtagba kisugárzó panaszok</BoxListItemText>
                                    </BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Tartásjavítás</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem>
                                    <BoxListItemText>gerincferdülés</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>Scheuermann betegség</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>mellkasdeformitások</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>általános helytelen tartás</BoxListItemText>
                                </BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Végtag fájdalmak</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem>
                                        <BoxListItemText>váll</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>könyök</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>kéz</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>csípő</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>térd</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>boka</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>láb</BoxListItemText>
                                    </BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Sportsérülések</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem>
                                    <BoxListItemText>szalagszakadás</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>rándulás</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>ficam</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>törések</BoxListItemText>
                                </BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Műtétek után</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem>
                                    <BoxListItemText>törések</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>gerincműtétek</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>hegek</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>végtagi műtétek</BoxListItemText>
                                </BoxListItem>
                                <BoxListItem>
                                    <BoxListItemText>egyéb műtétek</BoxListItemText>
                                </BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Meglőzés</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem>
                                        <BoxListItemText>műtéteket megelőzően</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>sérülések elkerülése érdekében</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>általános kondicionálás</BoxListItemText>
                                    </BoxListItem>
                                    <BoxListItem>
                                        <BoxListItemText>általnos kivizsgálás</BoxListItemText>
                                    </BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                </Grid>
            </BoxesContent>
        </Container>
    )
}
