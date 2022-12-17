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
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
  @media (max-width: ${breakPoint.sm.width}px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`
const Box = styled.div`
  background-color: ${CuiColors.grey(0.7)};
  margin: 1.6rem 0;
  padding: 2rem 0;
  width: 100%;
  @media (max-width: ${breakPoint.sm.width}px) {
    margin: 0.8rem 0;
    padding: 0.8rem;
  }
`
const Number = styled(CuiImage)`
  margin: 2.4rem auto;
  @media (max-width: ${breakPoint.sm.width}px) {
    margin: 1rem 0 0 0;
    width: 75%;
  }
`
const BoxHeading = styled(SubHeading)`
  color: ${CuiColors.brown()};
`
const BoxParagraph = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};
  padding-left: 4rem;
  @media (max-width: ${breakPoint.sm.width}px) {
    padding-left: 0;
  }
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
`
const NumberContainer = styled(Grid)`
  text-align: center;
  align-item: flex-start;
  justify-content: flex-start;
`
const TextContainer = styled(Grid)`
  padding: 0 3.2rem;
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: 0 2rem;
  }
`
const GridContainer = styled(Grid)`
  align-items: center;
  @media (max-width: ${breakPoint.sm.width}px) {
    align-items: flex-start;
  }
`

export const Steps = () => {
    return (
        <StepContent>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={one.src} imgWidth={{og: 31 }}alt="Állapotfelmérés - 1" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>anamnézis felvétel</BoxHeading>
                        <BoxParagraph>a jelenlegi és korábbi panaszok, sérülések, betegségek kikérdezése és a korábbi leletek áttekintése</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={two.src} imgWidth={{og: 46 }} alt="Állapotfelmérés - 2" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>megtekintés, tapintás</BoxHeading>
                        <BoxParagraph>teljes test megtekintése, majd az észlelt változások érzékelése tapintással</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={three.src} imgWidth={{og: 43 }}alt="Állapotfelmérés - 3" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>aktív és passzív mozgás vizsgálat</BoxHeading>
                        <BoxParagraph>a vizsgálni kívánt ízületek mozgásterjedelmének vizsgálata aktívan és passzívan</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={four.src} imgWidth={{og: 50 }} alt="Állapotfelmérés - 4" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>funkcionális teszt</BoxHeading>
                        <BoxParagraph>speciális tesztek az ízületek és az izmok állapotánának felmérésére</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={five.src} imgWidth={{og: 41 }} alt="Állapotfelmérés - 5" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>fizioterápiás diagnózis</BoxHeading>
                        <BoxParagraph>a vizsgálatok által meghatározott diagnózis</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={six.src} imgWidth={{og: 50 }} alt="Állapotfelmérés - 6" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>kezelés</BoxHeading>
                        <BoxParagraph>az észlelt eltérések kezelése és visszatesztelése</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={seven.src} imgWidth={{og: 45 }} alt="Állapotfelmérés - 7" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>otthon végezhető gyakorlatsor</BoxHeading>
                        <BoxParagraph>otthon elvégzendő feladatok betanítása a korrekciók fenntartására</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
            <Box>
                <GridContainer container>
                    <NumberContainer item xs={1}>
                        <Number src={eight.src} imgWidth={{og: 50 }} alt="Állapotfelmérés - 8" />
                    </NumberContainer>
                    <TextContainer item xs={11}>
                        <BoxHeading>kontroll</BoxHeading>
                        <BoxParagraph>a korábbi panaszokat okozó blokkok, eltérések újratesztelése és az esetleges új panaszok felmérése a következő alkalmakkor</BoxParagraph>
                    </TextContainer>
                </GridContainer>
            </Box>
        </StepContent>
    )
}
