import { Grid } from "@mui/material"
import { AmaColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
import { Heading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${AmaColors.grey(1)};
  padding: 2rem;
`
const BoxesContent = styled(Content)`
top: -6.5rem;
margin-bottom: -6.5rem;

`
const Box = styled.div`
  width: 16.688rem;
  height: 19.25rem;
  box-shadow: -4px 4px 35px rgba(90, 68, 53, 0.1);
  background-color: ${AmaColors.white()};
`
const Border = styled.div`
  border: 5px solid ${AmaColors.brown()};
//   transform: translate(0.5rem, 0.5rem);
  & .box{
    // transform: translate(0rem, 0rem);
  }
`

export const Boxes = () => {
    return (
        <Container>
            <BoxesContent>
                <Grid container>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Border>
                            <Box className="box">
                                <Heading>Deréktáji fájdalmak</Heading>
                                <ul>
                                    <li>gerincsérv</li>
                                    <li>akut derékfájás /”becsípődés”/</li>
                                    <li>idült derékfájás /hosszú ideje fennálló/</li>
                                    <li>alsó végtagba kisugárzó panaszok</li>
                                    <li>instabilitás</li>
                                </ul>
                            </Box>
                        </Border>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="box">
                            <Heading>Deréktáji fájdalmak</Heading>
                            <ul>
                                <li>gerincsérv</li>
                                <li>akut derékfájás /”becsípődés”/</li>
                                <li>idült derékfájás /hosszú ideje fennálló/</li>
                                <li>alsó végtagba kisugárzó panaszok</li>
                                <li>instabilitás</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </BoxesContent>
        </Container>
    )
}
