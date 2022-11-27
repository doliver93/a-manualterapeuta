import React from "react"
import styled from "styled-components"

import { Border, breakPoint, Content, CuiLink, FlexCenterColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import manualterapia from "images/mainpage/kezelesek-manualterapia.webp"
import lagyreszKezelesek from "images/mainpage/kezelesek-lagyresz-kezelesek.webp"
import gyogytorna from "images/mainpage/kezelesek-gyogytorna.webp"
import haromdimenziosScoliosisTerapia from "images/mainpage/kezelesek-haromdimenzios-scoliosis-terapia.webp"
import mckenzieTerapia from "images/mainpage/kezelesek-mckenzie-terapia.webp"
import { CuiImage } from "assets/styles/styled-components/images"
import { ComponentType } from "types/ComponentType"

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
  &#gyogytorna {
    top: -20rem;
    margin-bottom: -20rem;
  }
  &#mckenzie {
    top: 15rem;
    margin-top: -15rem;
  }
  padding-top: ${({ padding = { top: 6.4 } }) => `${padding.top}rem`};
  padding-bottom: ${({ padding = { bottom: 6.4 } }) => `${padding.bottom}rem`};
  @media (max-width: ${breakPoint.sm.width}px) {
    &#manualterapia {
        padding: 2rem ${breakPoint.sm.padding};
    }
    &#lagyresz-kezelesek {
        padding-top: 2rem;
    }
    &#haromdimenzios-scoliosis-terapia{
        padding-top: 2rem;
    }
    &#mckenzie {
      top: 10rem;
      margin-top: -15rem;
    }
  }
`
const LinkDetails = styled(CuiLink)`
  color: ${CuiColors.brown(0.25)};
  cursor: pointer;
  display: inline-block;
  font-family: SourceSansPro700;
  text-decoration: none;
  justify-content: flex-start;
  &:hover {
    color: ${CuiColors.brown(0.5)};
    text-decoration: none;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 1.4rem;
  }
`
const TreatmentsSubHeading = styled(SubHeading)`
  color: ${CuiColors.brown()};
`
const TreatmentsParagraph = styled(Paragraph)`
  color: ${CuiColors.brown(0.8)};
  text-align: justify;
  margin: 3rem 0;
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    margin: 0.7rem 0;
    margin-top: 1.5rem;
    
  }
`
const TreatmentGridContainer = styled(Grid)`
  align-items: left;
  justify-content: flex-start;
`
const ResponsiveSubHeading = styled(TreatmentsSubHeading)`
  margin-bottom: 0.9rem;
`
const Text = styled.div``
export const TreatmentsResponsive = ({viewport}: ComponentType) => {
    return (
        <FlexCenterColumn>
            <Content style={{textAlign: "center"}}>
                <Heading textAlign="center" color={CuiColors.brown(0.9)} margin={{ md: "auto auto 4rem auto", sm: "auto auto 1.5rem auto" }}>
        Ilyen kezelésekkel találkozhattok nálam
                </Heading>
            </Content>
            <Container backgroundColor={CuiColors.grey(0.2)}>
                <TreatmentsContent id="manualterapia">
                    <ResponsiveSubHeading>Manuálterápia</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border>
                                <CuiImage imgWidth={{ og: 513, sm: 307 }} src={manualterapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Manuálterápia" />
                            </Border>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  Kézzel végzett diagnosztikai- és terápiás módszer, amely során az egyes ízületekben észlelt blokkokat oldom a páciens által végzett légzési-, és izommunkával. Ha a blokk oldódik, a
                  kezelt ízület és a körülötte lévő izmok helyzete változik és ezzel csökken a fájdalom.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "manualterapia" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6, bottom: 18 }} id="lagyresz-kezelesek">
                    <ResponsiveSubHeading>Lágyrész kezelések</ResponsiveSubHeading>
                    <TreatmentGridContainer container flexDirection="column-reverse">
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  A kötőszövetek- azaz a bőr, a bőr alatti kötőszövet, az izompólya (fascia) és az izmok - szintjén végzett diagnosztikai és terápiás módszer, a lágyrész eltérések helyreállítását
                  célzó mozdulatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "lagyresz-kezelesek" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 1 }}>
                                <CuiImage imgWidth={{ og: 564, sm: 309 }} src={lagyreszKezelesek.src} pos={{ x: -2.4, y: -2.4 }} alt="Lágyrész kezelések" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.darkBeige(0.15)}>
                <TreatmentsContent padding={{ top: 6, bottom: 6 }} id="gyogytorna">
                    <ResponsiveSubHeading>Gyógytorna</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 0 }}>
                                <CuiImage imgWidth={{ og: 487, sm: 301 }} src={gyogytorna.src} pos={{ x: -2.4, y: 2.4 }} alt="Gyógytorna" />
                            </Border>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  Célzott gyógytorna feladatok a fájdalmak csillapítására, az izmok erősítésére, nyújtására és a kezelések utáni korrekció fenntartására. Magába foglalja az óra keretein belül végzett
                  feladatokat és az otthonra adott gyakorlatokat.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "gyogytorna" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6, bottom: 6 }} id="haromdimenzios-scoliosis-terapia">
                    <ResponsiveSubHeading>Háromdimenziós scoliosis terápia - Schroth terápia</ResponsiveSubHeading>
                    <TreatmentGridContainer container flexDirection="column-reverse">
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő
                  gyakorlatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "haromdimenzios-scoliosis-terapia" }}>részletes leírás</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 0 }}>
                                <CuiImage imgWidth={{ og: 488, sm: 307 }} src={haromdimenziosScoliosisTerapia.src} pos={{ x: -2.4, y: 2.4 }} alt="Háromdimenziós scoliosis terápia" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.lightBeige(0.15)}>
                <TreatmentsContent padding={{ top: 6, bottom: 0 }} id="mckenzie">
                    <ResponsiveSubHeading>Mckenzie terápia</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border justifyContent="center">
                                <CuiImage imgWidth={{ og: 417, sm: 299 }} src={mckenzieTerapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Mckenzie terápia" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={viewport === "landscape" ? { top: 14, bottom: 6 } : { top: 10, bottom: 6 }}>
                    <Grid item md={5} sm={12}>
                        <Text>
                            <TreatmentsParagraph>
                Kifejezetten a gerincferdülés kezelésére irányuló terápia, amelynek célja a gerinc háromdimenziós korrigálása légzési technikákkal és speciális testhelyzetekben végzett erősítő
                gyakorlatokkal.
                            </TreatmentsParagraph>
                            <LinkDetails href={{ pathname: "/kezelesek", query: "mckenzie-terapia" }}>részletes leírás</LinkDetails>
                        </Text>
                    </Grid>
                </TreatmentsContent>
            </Container>
        </FlexCenterColumn>
    )
}
