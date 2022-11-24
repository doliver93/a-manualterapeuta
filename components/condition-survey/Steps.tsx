import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { breakPoint, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

import one from "images/conditions-survey/1.svg"
import two from "images/conditions-survey/2.svg"
import three from "images/conditions-survey/3.svg"
import four from "images/conditions-survey/4.svg"
import five from "images/conditions-survey/5.svg"
import six from "images/conditions-survey/6.svg"
import seven from "images/conditions-survey/7.svg"
import eight from "images/conditions-survey/8.svg"
import { CuiImage } from "assets/styles/styled-components/images"

const StepContent = styled(Content)`
  padding: 3.2rem 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: ${breakPoint.lg.padding};
  }
`
const Box = styled.div`
  background-color: ${CuiColors.grey(0.7)};
  margin: 1.6rem 0;
  padding: 2rem 0;
  width: 100%;
`
const Number = styled(CuiImage)`
  margin: 2.4rem auto;
`
const BoxHeading = styled(SubHeading)`
  color: ${CuiColors.brown()};
  font-size: 2.5rem;
`
const BoxParagraph = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};
  font-size: 1.8rem;
  padding-left: 4rem;
`
const NumberContainer = styled(Grid)`
  text-align: center;
`
const TextContainer = styled(Grid)`
    padding-left 3.2rem;
`

export const Steps = () => {
    return (
        <StepContent>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={one.src} alt="Állapotfelmérés - 1" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>anamnézis felvétel</BoxHeading>
                        <BoxParagraph>a jelenlegi és korábbi panaszok, sérülések, betegségek kikérdezése és a korábbi leletek áttekintése</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={two.src} alt="Állapotfelmérés - 2" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>megtekintés, tapintás</BoxHeading>
                        <BoxParagraph>teljes test megtekintése, majd az észlelt változások érzékelése tapintással</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={three.src} alt="Állapotfelmérés - 3" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>aktív és passzív mozgás vizsgálat</BoxHeading>
                        <BoxParagraph>a vizsgálni kívánt ízületek mozgásterjedelmének vizsgálata aktívan és passzívan</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={four.src} alt="Állapotfelmérés - 4" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>funkcionális teszt</BoxHeading>
                        <BoxParagraph>speciális tesztek az ízületek és az izmok állapotánának felmérésére</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={five.src} alt="Állapotfelmérés - 5" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>fizioterápiás diagnózis</BoxHeading>
                        <BoxParagraph>a vizsgálatok által meghatározott diagnózis</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={six.src} alt="Állapotfelmérés - 6" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>kezelés</BoxHeading>
                        <BoxParagraph>az észlelt eltérések kezelése és visszatesztelése</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={seven.src} alt="Állapotfelmérés - 7" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>otthon végezhető gyakorlatsor</BoxHeading>
                        <BoxParagraph>otthon elvégzendő feladatok betanítása a korrekciók fenntartása</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={eight.src} alt="Állapotfelmérés - 8" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>kontroll</BoxHeading>
                        <BoxParagraph>a korábbi panaszokat okozó blokkok, eltérések újratesztelése és az esetleges új panaszok felmérése a következő alkalmakkor</BoxParagraph>
                    </TextContainer>
                </Grid>
            </Box>
        </StepContent>
    )
}
