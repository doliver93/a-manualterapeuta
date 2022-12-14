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

const mdRate = 0.7
const lgRate = 0.9

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
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: 1.5rem ${breakPoint.sm.padding} !important;
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
  @media (max-width: ${breakPoint.sm.width}px) {
    margin: 0.7rem 0;
    margin-top: 1.5rem;
  }
`
interface ExternalImageProps {
  top: number
}
const ExternalImage = styled.div<ExternalImageProps>`
  position: absolute;
  top: ${({ top = 0 }) => `${top}rem`};
`
const TreatmentGridContainer = styled(Grid)`
  align-items: center;
  justify-content: space-between;
`
const Text = styled.div``

export const Treatments = () => {
    return (
        <FlexCenterColumn>
            <Content style={{ textAlign: "center" }}>
                <Heading textAlign="center" color={CuiColors.brown(0.9)} margin={{ md: "auto auto 8rem auto", sm: "auto auto 1.5rem auto" }}>
          Ilyen kezel??sekkel tal??lkozhattok n??lam
                </Heading>
            </Content>
            <Container backgroundColor={CuiColors.grey(0.2)}>
                <TreatmentsContent>
                    <TreatmentGridContainer container>
                        <Grid item md={7} sm={12}>
                            <Border pos={{ x: -2.4, y: -2.4 }}>
                                <CuiImage imgWidth={{ og: 513 }} src={manualterapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Manu??lter??pia" />
                            </Border>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsSubHeading>Manu??lter??pia</TreatmentsSubHeading>
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
                <TreatmentsContent padding={{ top: 6.4, bottom: 22.4 }}>
                    <TreatmentGridContainer container>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsSubHeading>L??gyr??sz kezel??sek</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  A k??t??sz??vetek- azaz a b??r, a b??r alatti k??t??sz??vet, az izomp??lya (fascia) ??s az izmok - szintj??n v??gzett diagnosztikai ??s ter??pi??s m??dszer, a l??gyr??sz elt??r??sek helyre??ll??t??s??t
                  c??lz?? mozdulatokkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "lagyresz-kezelesek" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12} textAlign="right">
                            <Border pos={{ x: 2.4, y: 2.4 }}>
                                <CuiImage imgWidth={{ og: 564, lg: 564 * lgRate, md: 564 * mdRate }} src={lagyreszKezelesek.src} pos={{ x: -2.4, y: -2.4 }} alt="L??gyr??sz kezel??sek" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.darkBeige(0.15)}>
                <TreatmentsContent padding={{ top: 16, bottom: 16 }}>
                    <ExternalImage top={-5}>
                        <Border pos={{ x: 2.4, y: -2.4 }}>
                            <CuiImage imgWidth={{ og: 487, md: 487 * mdRate }} src={gyogytorna.src} pos={{ x: -2.4, y: 2.4 }} alt="Gy??gytorna" />
                        </Border>
                    </ExternalImage>
                    <TreatmentGridContainer container>
                        <Grid item />
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsSubHeading>Gy??gytorna</TreatmentsSubHeading>
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
                <TreatmentsContent padding={{ top: 6.4, bottom: 6.4 }}>
                    <TreatmentGridContainer container>
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsSubHeading>
                  H??romdimenzi??s scoliosis ter??pia <br />- Schroth ter??pia
                                </TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Kifejezetten a gerincferd??l??s kezel??s??re ir??nyul?? ter??pia, amelynek c??lja a gerinc h??romdimenzi??s korrig??l??sa speci??lis testhelyzetekben v??gzett er??s??t?? gyakorlatokkal ??s l??gz??si
                  technik??kkal.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "haromdimenzios-scoliosis-terapia" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                        <Grid item md={7} sm={12} textAlign="right">
                            <Border pos={{ x: 2.4, y: -2.4 }}>
                                <CuiImage imgWidth={{ og: 488, md: 488 * mdRate }} src={haromdimenziosScoliosisTerapia.src} pos={{ x: -2.4, y: 2.4 }} alt="H??romdimenzi??s scoliosis ter??pia" />
                            </Border>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.lightBeige(0.15)}>
                <TreatmentsContent padding={{ top: 14, bottom: 14 }}>
                    <TreatmentGridContainer container>
                        <Grid item />
                        <Grid item md={5} sm={12}>
                            <Text>
                                <TreatmentsSubHeading>Mckenzie ter??pia</TreatmentsSubHeading>
                                <TreatmentsParagraph>
                  Kifejezetten gerincs??rvre (hernia disci), a porckorong kiboltosul??sra (protrusio disci), valamint a keresztcsont ??s a medence ??z??let??nek, a sacroiliacalis (SI) ??z??letre ir??nyul??
                  ter??pia.
                                </TreatmentsParagraph>
                                <LinkDetails href={{ pathname: "/kezelesek", query: "mckenzie-terapia" }}>r??szletes le??r??s</LinkDetails>
                            </Text>
                        </Grid>
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
            <Container backgroundColor={CuiColors.white()}>
                <TreatmentsContent padding={{ top: 14, bottom: 14 }}>
                    <ExternalImage top={-48}>
                        <Border pos={{ x: 2.4, y: -2.4 }}>
                            <CuiImage imgWidth={{ og: 417, md: 417 * mdRate }} src={mckenzieTerapia.src} pos={{ x: 2.4, y: 2.4 }} alt="Mckenzie ter??pia" />
                        </Border>
                    </ExternalImage>
                    <TreatmentGridContainer container>
                        <Grid item />
                        <Grid item md={5} sm={12} />
                    </TreatmentGridContainer>
                </TreatmentsContent>
            </Container>
        </FlexCenterColumn>
    )
}
