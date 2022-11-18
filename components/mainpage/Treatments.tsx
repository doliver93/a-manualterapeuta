import React from "react"
import styled from "styled-components"

import { Border, Content, CuiLink, FlexCenterColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import manualterapia from "images/mainpage/kezelesek-manualterapia.png"
import lagyreszKezelesek from "images/mainpage/kezelesek-lagyresz-kezelesek.png"
import gyogytorna from "images/mainpage/kezelesek-gyogytorna.png"
import haromdimenziosScoliosisTerapia from "images/mainpage/kezelesek-haromdimenzios-scoliosis-terapia.png"
import mckenzieTerapia from "images/mainpage/kezelesek-mckenzie-terapia.png"
import { CuiImage } from "assets/styles/styled-components/images"

interface TranslateProp {
  pos: { x: number; y: number }
}

interface ContainerProps {
  backgroundColor: string
}
const Container = styled.div<ContainerProps>`
  background-color: ${({ backgroundColor = "black" }) => backgroundColor};
  width: 100%;
`
interface TreamnetsContentProps {
  padding?: { top: number; bottom: number }
}
const TreatmentsContent = styled(Content)<TreamnetsContentProps>`
  padding: ${({ padding = { top: 4, bottom: 4 } }) => `${padding.top}rem 0 ${padding.bottom}rem 0`};
`


const LinkDetails = styled(CuiLink)`
  color: ${AmaColors.brown(0.25)};
  cursor: pointer;
  font-family: SourceSansPro700;
  text-decoration: none;
  &:hover {
    color: ${AmaColors.brown(0.5)};
    text-decoration: none;
  }
`
interface ExternalImageProps {
    top: number
}
const ExternalImage = styled.div<ExternalImageProps>`
  position: absolute;
  top: ${({top = 0}) => `${top}rem`}
`

const Text = styled.div``
export const Treatments = () => {
    return (
        <FlexCenterColumn>
            <Heading fontSize={2.813} textAlign="center" color={AmaColors.brown(0.9)} margin="auto auto 5rem auto">
        Ilyen kezelésekkel találkozhattok nálam
            </Heading>
            <Container backgroundColor={AmaColors.grey(0.2)}>
                <TreatmentsContent>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Border pos={{ x: -1.5, y: -1.5 }}>
                                <CuiImage width={513} height={426} src={manualterapia.src} pos={{ x: 1.5, y: 1.5 }} alt="Manuálterápia"/>
                            </Border>
                        </Grid>
                        <Grid item xs={5}>
                            <Text>
                                <SubHeading fontSize={1.563} color={AmaColors.brown()}>
                  Manuálterápia
                                </SubHeading>
                                <Paragraph color={AmaColors.brown(0.8)} fontSize={1.125} textAlign="justify" margin="1.875rem 0">
                  Kézzel végzett diagnosztikai- és terápiás módszer, amely során az egyes ízületekben észlelt blokkokat oldom a páciens által végzett légzési-, és izommunkával. Ha a blokk oldódik, a
                  kezelt ízület és a körülötte lévő izmok helyzete változik és ezzel csökken a fájdalom.
                                </Paragraph>
                                <LinkDetails href="/kezelesek">részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={AmaColors.white()}>
                <TreatmentsContent padding={{ top: 4, bottom: 14 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={5}>
                            <Text>
                                <SubHeading fontSize={1.563} color={AmaColors.brown()}>
                  Lágyrész kezelések
                                </SubHeading>
                                <Paragraph color={AmaColors.brown(0.8)} fontSize={1.125} textAlign="justify" margin="1.875rem 0">
                  A kötőszövetek- azaz a bőr, a bőr alatti kötőszövet, az izompólya (fascia) és az izmok - szintjén végzett diagnosztikai és terápiás módszer, a lágyrész eltérések helyreállítását
                  célzó mozdulatokkal.
                                </Paragraph>
                                <LinkDetails href="/kezelesek">részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: 1.5, y: 1.5 }}>
                                <CuiImage width={564} height={317} src={lagyreszKezelesek.src} pos={{ x: -1.5, y: -1.5 }} alt="Lágyrész kezelések" />
                            </Border>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={AmaColors.darkBeige(0.15)}>
                <TreatmentsContent padding={{top: 10, bottom: 10}}>
                    <ExternalImage top={-5}>
                        <Border pos={{ x: 1.5, y: -1.5 }}>
                            <CuiImage width={487} height={570} src={gyogytorna.src} pos={{ x: -1.5, y: 1.5 }} alt="Gyógytorna" />
                        </Border>
                    </ExternalImage>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item />
                        <Grid item xs={5}>
                            <Text>
                                <SubHeading fontSize={1.563} color={AmaColors.brown()}>
                  Gyógytorna
                                </SubHeading>
                                <Paragraph color={AmaColors.brown(0.8)} fontSize={1.125} textAlign="justify" margin="1.875rem 0">
                  Célzott gyógytorna feladatok a fájdalmak csillapítására, az izmok erősítésére, nyújtására és a kezelések utáni korrekció fenntartására. Magába foglalja az óra keretein belül végzett
                  feladatokat és az otthonra adott gyakorlatokat.
                                </Paragraph>
                                <LinkDetails href="/kezelesek">részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={AmaColors.white()}>
                <TreatmentsContent padding={{ top: 4, bottom: 4 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={5}>
                            <Text>
                                <SubHeading fontSize={1.563} color={AmaColors.brown()}>
                                Háromdimenziós scoliosis terápia <br/>- Schroth terápia
                                </SubHeading>
                                <Paragraph color={AmaColors.brown(0.8)} fontSize={1.125} textAlign="justify" margin="1.875rem 0">
                                Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő gyakorlatokkal.
                                </Paragraph>
                                <LinkDetails href="/kezelesek">részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: 1.5, y: -1.5 }}>
                                <CuiImage width={488} height={518} src={haromdimenziosScoliosisTerapia.src} pos={{ x: -1.5, y: 1.5 }} alt="Háromdimenziós scoliosis terápia"/>
                            </Border>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={AmaColors.lightBeige(0.15)}>
                <TreatmentsContent padding={{ top: 8.75, bottom: 8.75 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item />
                        <Grid item xs={5}>
                            <Text>
                                <SubHeading fontSize={1.563} color={AmaColors.brown()}>
                                Mckenzie terápia
                                </SubHeading>
                                <Paragraph color={AmaColors.brown(0.8)} fontSize={1.125} textAlign="justify" margin="1.875rem 0">
                                Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő gyakorlatokkal.
                                </Paragraph>
                                <LinkDetails href="/kezelesek">részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={AmaColors.white()}>
                <TreatmentsContent padding={{ top: 8.75, bottom: 8.75 }}>
                    <ExternalImage top={-30}>
                        <Border pos={{ x: 1.5, y: -1.5 }}>
                            <CuiImage width={417} height={566} src={mckenzieTerapia.src} pos={{ x: 1.5, y: 1.5 }} alt="Mckenzie terápia" />
                        </Border>
                    </ExternalImage>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item />
                        <Grid item xs={5} />
                    </Grid>
                </TreatmentsContent>
            </Container>
        </FlexCenterColumn>
    )
}
