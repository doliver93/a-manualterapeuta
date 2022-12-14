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
    &#haromdimenzios-scoliosis-terapia {
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
  @media (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
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
export const TreatmentsResponsive = ({ viewport }: ComponentType) => {
    return (
        <FlexCenterColumn>
            <Content style={{ textAlign: "center" }}>
                <Heading textAlign="center" color={CuiColors.brown(0.9)} margin={{ md: "auto auto 4rem auto", sm: "auto auto 1.5rem auto" }}>
          Ilyen kezel??sekkel tal??lkozhattok n??lam
                </Heading>
            </Content>
            <Container backgroundColor={CuiColors.grey(0.2)}>
                <TreatmentsContent id="manualterapia">
                    <ResponsiveSubHeading>Manu??lter??pia</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border>
                                <CuiImage imgWidth={{ og: 513, sm: 307 }} src={manualterapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Manu??lter??pia" />
                            </Border>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  K??zzel v??gzett diagnosztikai- ??s ter??pi??s m??dszer, amely sor??n az egyes ??z??letekben ??szlelt blokkokat oldom a p??ciens ??ltal v??gzett l??gz??si-, ??s izommunk??val. Ha a blokk old??dik, a
                  kezelt ??z??let ??s a k??r??l??tte l??v?? izmok helyzete v??ltozik ??s ezzel cs??kken a f??jdalom.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "manualterapia" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6, bottom: 18 }} id="lagyresz-kezelesek">
                    <ResponsiveSubHeading>L??gyr??sz kezel??sek</ResponsiveSubHeading>
                    <TreatmentGridContainer container flexDirection="column-reverse">
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  A k??t??sz??vetek- azaz a b??r, a b??r alatti k??t??sz??vet, az izomp??lya (fascia) ??s az izmok - szintj??n v??gzett diagnosztikai ??s ter??pi??s m??dszer, a l??gyr??sz elt??r??sek helyre??ll??t??s??t
                  c??lz?? mozdulatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "lagyresz-kezelesek" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 1 }}>
                                <CuiImage imgWidth={{ og: 564, sm: 309 }} src={lagyreszKezelesek.src} pos={{ x: -2.4, y: -2.4 }} alt="L??gyr??sz kezel??sek" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.darkBeige(0.15)}>
                <TreatmentsContent padding={{ top: 6, bottom: 6 }} id="gyogytorna">
                    <ResponsiveSubHeading>Gy??gytorna</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 0 }}>
                                <CuiImage imgWidth={{ og: 487, sm: 301 }} src={gyogytorna.src} pos={{ x: -2.4, y: 2.4 }} alt="Gy??gytorna" />
                            </Border>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  C??lzott gy??gytorna feladatok a f??jdalmak csillap??t??s??ra, az izmok er??s??t??s??re, ny??jt??s??ra ??s a kezel??sek ut??ni korrekci??k fenntart??s??ra. Mag??ba foglalja az ??ra keretein bel??l v??gzett
                  feladatokat ??s az otthonra adott gyakorlatokat.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "gyogytorna" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 6, bottom: 6 }} id="haromdimenzios-scoliosis-terapia">
                    <ResponsiveSubHeading>H??romdimenzi??s scoliosis ter??pia - Schroth ter??pia</ResponsiveSubHeading>
                    <TreatmentGridContainer container flexDirection="column-reverse">
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsParagraph>
                  Kifejezetten a gerincferd??l??s kezel??s??re ir??nyul?? ter??pia, amelynek c??lja a gerinc h??romdimenzi??s korrig??l??sa speci??lis testhelyzetekben v??gzett er??s??t?? gyakorlatokkal ??s l??gz??si
                  technik??kkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "haromdimenzios-scoliosis-terapia" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: 1, y: 0 }}>
                                <CuiImage imgWidth={{ og: 488, sm: 307 }} src={haromdimenziosScoliosisTerapia.src} pos={{ x: -2.4, y: 2.4 }} alt="H??romdimenzi??s scoliosis ter??pia" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.lightBeige(0.15)}>
                <TreatmentsContent padding={{ top: 6, bottom: 0 }} id="mckenzie">
                    <ResponsiveSubHeading>Mckenzie ter??pia</ResponsiveSubHeading>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border justifyContent="center">
                                <CuiImage imgWidth={{ og: 417, sm: 299 }} src={mckenzieTerapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Mckenzie ter??pia" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={viewport === "mobile" ? { top: 10, bottom: 6 } : { top: 14, bottom: 6 }}>
                    <Grid item md={5} sm={12}>
                        <Text>
                            <TreatmentsParagraph>
                Kifejezetten gerincs??rvre (hernia disci), a porckorong kiboltosul??sra (protrusio disci), valamint a keresztcsont ??s a medence ??z??let??nek, a sacroiliacalis (SI) ??z??letre ir??nyul??
                ter??pia.
                            </TreatmentsParagraph>
                            <LinkDetails href={{ pathname: "/kezelesek", query: "mckenzie-terapia" }}>r??szletes le??r??s</LinkDetails>
                        </Text>
                    </Grid>
                </TreatmentsContent>
            </Container>
        </FlexCenterColumn>
    )
}
