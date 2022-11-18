import { Grid } from "@mui/material"
import { AmaColors } from "assets/styles/colors"
import { Border, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${AmaColors.grey(0.1)};
  padding: 2rem;
`
const BoxesContent = styled(Content)`
padding: 2rem 0rem;
  top: -10rem;
  margin-bottom: -10rem;
`
const Box = styled.div`
  width: 16.688rem;
  height: 22rem;
  box-shadow: -4px 4px 35px rgba(90, 68, 53, 0.1);
  background-color: ${AmaColors.white()};
  margin: auto;
  padding: 0 0.938rem;
`
const BoxesBorder = styled(Border)`
  transform: translate(0.5rem, 0.5rem);
  border-color: ${AmaColors.brown(0.1)};
  & .box {
    transform: translate(-0.813rem, -0.813rem);
  }
`

const BoxHeading = styled(SubHeading)`
  font-size: 1.563rem;
  color: ${AmaColors.brown(0.9)};
  padding: 1.25rem 0rem;
`
const BoxListCollection = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`
const BoxListItem = styled.li`
display: flex;
  &:before {
    content: "•";
    color: ${AmaColors.brown(0.8)};
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`

const BoxListItemText = styled(Paragraph)`
font-size: 1.125rem;
color: ${AmaColors.brown(0.8)};
`

export const Boxes = () => {
    return (
        <Container>
            <BoxesContent>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Box className="box">
                            <BoxHeading>Deréktáji fájdalmak</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem><BoxListItemText>gerincsérv</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>akut derékfájás /”becsípődés”/</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>idült derékfájás /hosszú ideje fennálló/</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>alsó végtagba kisugárzó panaszok</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>instabilitás</BoxListItemText></BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Nyaki panaszok</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem><BoxListItemText>gerincsérv</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>nyaki fájdalmak</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>fejfájás</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>fülzúgás</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>felső végtagba kisugárzó panaszok</BoxListItemText></BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <BoxHeading>Tartásjavítás</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem><BoxListItemText>gerincferdülés</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>Scheuermann betegség</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>mellkasdeformitások</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>általános helytelen tartás</BoxListItemText></BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Végtag fájdalmak</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem><BoxListItemText>váll</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>könyök</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>kéz</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>csípő</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>térd</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>boka</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>láb</BoxListItemText></BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <BoxHeading>Sportsérülések</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem><BoxListItemText>szalagszakadás</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>rándulás</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>ficam</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>törések</BoxListItemText></BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <BoxHeading>Műtétek után</BoxHeading>
                            <BoxListCollection>
                                <BoxListItem><BoxListItemText>törések</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>gerincműtétek</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>hegek</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>végtagi műtétek</BoxListItemText></BoxListItem>
                                <BoxListItem><BoxListItemText>egyéb műtétek</BoxListItemText></BoxListItem>
                            </BoxListCollection>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Meglőzés</BoxHeading>
                                <BoxListCollection>
                                    <BoxListItem><BoxListItemText>műtéteket megelőzően</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>sérülések elkerülése érdekében</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>általános kondicionálás</BoxListItemText></BoxListItem>
                                    <BoxListItem><BoxListItemText>általnos kivizsgálás</BoxListItemText></BoxListItem>
                                </BoxListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                </Grid>
            </BoxesContent>
        </Container>
    )
}
