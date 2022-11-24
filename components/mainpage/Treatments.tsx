import React from "react"
import styled from "styled-components"

import { Border, Content, CuiLink, FlexCenterColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import manualterapia from "images/mainpage/kezelesek-manualterapia.png"
import lagyreszKezelesek from "images/mainpage/kezelesek-lagyresz-kezelesek.png"
import gyogytorna from "images/mainpage/kezelesek-gyogytorna.png"
import haromdimenziosScoliosisTerapia from "images/mainpage/kezelesek-haromdimenzios-scoliosis-terapia.png"
import mckenzieTerapia from "images/mainpage/kezelesek-mckenzie-terapia.png"
import { CuiImage } from "assets/styles/styled-components/images"

const mdRate = 0.7

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
  padding-top: ${({ padding = { top: 6.4 } }) => `${padding.top}rem`};
  padding-bottom: ${({ padding = { bottom: 6.4 } }) => `${padding.bottom}rem`};
`
const LinkDetails = styled(CuiLink)`
  color: ${CuiColors.brown(0.25)};
  cursor: pointer;
  font-family: SourceSansPro700;
  text-decoration: none;
  justify-content: flex-start;
  &:hover {
    color: ${CuiColors.brown(0.5)};
    text-decoration: none;
  }
`
const TreatmentsSubHeading = styled(SubHeading)`
  color: ${CuiColors.brown()};
`
const TreatmentsParagraph = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};
  text-align: justify;
  margin: 3rem 0;
`
interface ExternalImageProps {
  top: number
}
const ExternalImage = styled.div<ExternalImageProps>`
  position: absolute;
  top: ${({ top = 0 }) => `${top}rem`};
`

const Text = styled.div``
export const Treatments = () => {
    return (
        <FlexCenterColumn>
            <Heading fontSize={{ md: 4.5 }} textAlign="center" color={CuiColors.brown(0.9)} margin={{ md: "auto auto 8rem auto" }}>
        Ilyen kezelésekkel találkozhattok nálam
            </Heading>
            <Container backgroundColor={CuiColors.grey(0.2)}>
                <TreatmentsContent>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Border pos={{ x: -2.4, y: -2.4 }}>
                                <CuiImage imgWidth={{lg: 513, md: 513*mdRate}} src={manualterapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Manuálterápia" />
                            </Border>
                        </Grid>
                        <Grid item xs={5}>
                            <Text>
                                <TreatmentsSubHeading>Manuálterápia</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Kézzel végzett diagnosztikai- és terápiás módszer, amely során az egyes ízületekben észlelt blokkokat oldom a páciens által végzett légzési-, és izommunkával. Ha a blokk oldódik, a
                  kezelt ízület és a körülötte lévő izmok helyzete változik és ezzel csökken a fájdalom.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "manualterapia" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6.4, bottom: 22.4 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={5}>
                            <Text>
                                <TreatmentsSubHeading>Lágyrész kezelések</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  A kötőszövetek- azaz a bőr, a bőr alatti kötőszövet, az izompólya (fascia) és az izmok - szintjén végzett diagnosztikai és terápiás módszer, a lágyrész eltérések helyreállítását
                  célzó mozdulatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "lagyresz-kezelesek" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: 2.4, y: 2.4 }}>
                                <CuiImage imgWidth={{ lg: 564, md: 564*mdRate}} src={lagyreszKezelesek.src} pos={{ x: -2.4, y: -2.4 }} alt="Lágyrész kezelések" />
                            </Border>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.darkBeige(0.15)}>
                <TreatmentsContent padding={{ top: 16, bottom: 16 }}>
                    <ExternalImage top={-5}>
                        <Border pos={{ x: 2.4, y: -2.4 }}>
                            <CuiImage imgWidth={{lg: 487, md: 487*mdRate}} src={gyogytorna.src} pos={{ x: -2.4, y: 2.4 }} alt="Gyógytorna" />
                        </Border>
                    </ExternalImage>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item />
                        <Grid item xs={5}>
                            <Text>
                                <TreatmentsSubHeading>Gyógytorna</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Célzott gyógytorna feladatok a fájdalmak csillapítására, az izmok erősítésére, nyújtására és a kezelések utáni korrekció fenntartására. Magába foglalja az óra keretein belül végzett
                  feladatokat és az otthonra adott gyakorlatokat.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "gyogytorna" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6.4, bottom: 6.4 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={5}>
                            <Text>
                                <TreatmentsSubHeading>
                  Háromdimenziós scoliosis terápia <br />- Schroth terápia
                                </TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő
                  gyakorlatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "haromdimenzios-scoliosis-terapia" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: 2.4, y: -2.4 }}>
                                <CuiImage imgWidth={{lg: 488, md: 488*mdRate}} src={haromdimenziosScoliosisTerapia.src} pos={{ x: -2.4, y: 2.4 }} alt="Háromdimenziós scoliosis terápia" />
                            </Border>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.lightBeige(0.15)}>
                <TreatmentsContent padding={{ top: 14, bottom: 14 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item />
                        <Grid item xs={5}>
                            <Text>
                                <TreatmentsSubHeading>Mckenzie terápia</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő
                  gyakorlatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "mckenzie-terapia" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </Grid>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 14, bottom: 14 }}>
                    <ExternalImage top={-48}>
                        <Border pos={{ x: 2.4, y: -2.4 }}>
                            <CuiImage imgWidth={{lg: 417, md: 417*mdRate}} src={mckenzieTerapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Mckenzie terápia" />
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
