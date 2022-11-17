import { Grid } from "@mui/material"
import { AmaColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
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
import { Img } from "assets/styles/styled-components/images"

const StepContent = styled(Content)`
  padding: 2rem 0;
`
const Box = styled.div`
  background-color: ${AmaColors.grey(0.7)};
  width: 100%;
  margin: 1rem 0;
`
const Number = styled(Img)`
  margin: 1.5rem auto;
`
const BoxHeading = styled(SubHeading)`
  color: ${AmaColors.brown()};
  font-size: 1.563rem;
`
const BoxParagraph = styled(Paragraph)`
  color: ${AmaColors.brown(0.8)};
  font-size: 1.125rem;
  padding-left: 2.5rem;
`
const NumberContainer = styled(Grid)``
const TextContainer = styled(Grid)`
    padding-left 2rem;
`

export const Steps = () => {
    return (
        <StepContent>
            <Box>
                <Grid container alignItems="center">
                    <NumberContainer item xs={1}>
                        <Number src={one} alt="Állapotfelmérés - 1" className="local-image" />
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
                        <Number src={two.src} alt="Állapotfelmérés - 2" width={2.813} height={3.25} />
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
                        <Number src={three.src} alt="Állapotfelmérés - 3" width={2.688} height={4.125} />
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
                        <Number src={four.src} alt="Állapotfelmérés - 4" width={3.063} height={4.063} />
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
                        <Number src={five.src} alt="Állapotfelmérés - 5" width={2.563} height={4.25} />
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
                        <Number src={six.src} alt="Állapotfelmérés - 6" width={3.063} height={4.438} />
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
                        <Number src={seven.src} alt="Állapotfelmérés - 7" width={2.688} height={4.063} />
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
                        <Number src={eight.src} alt="Állapotfelmérés - 8" width={3.063} height={4.438} />
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
