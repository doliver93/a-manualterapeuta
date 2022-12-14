import React, { useEffect } from "react"
import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiImage } from "assets/styles/styled-components/images"
import styled from "styled-components"

import manualterapia from "images/treatments/kezelesek-manualterapia.webp"
import lagyreszKezelesek from "images/treatments/kezelesek-lagyresz-kezelesek.webp"
import gyogytorna from "images/treatments/kezelesek-gyogytorna.webp"
import haromdimenzios from "images/treatments/kezelesek-haromdimenzios-scoliosis-terapia.webp"
import mckenzie from "images/treatments/kezelesek-mckenzie-terapia.webp"
import { useRouter } from "next/router"
import { ComponentType } from "types/ComponentType"

interface ContainerProps {
  backgroundColor?: string
  paddingTop?: number
  paddingBottom?: number
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor = CuiColors.white() }) => backgroundColor};
  padding-top: ${({ paddingTop = 10 }) => `${paddingTop}rem`};
  padding-bottom: ${({ paddingBottom = 10 }) => `${paddingBottom}rem`};
  @media (max-width: ${breakPoint.md.width}px) {
    &#lagyresz-kezelesek {
      margin-bottom: -24rem;
    }
    &#gyogytorna {
      padding-top: 24rem;
    }
    &#mckenzie-terapia .image-grid {
      margin-top: 9.6rem;
    }
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    &#manualterapia {
      padding: 2.3rem 0;
      padding-bottom: 5rem;
    }
    &#haromdimenzios-scoliosis-terapia {
      padding: 2.3rem 0;
    }
    &#lagyresz-kezelesek {
      margin-bottom: -24rem;
    }
    &#gyogytorna {
      padding-top: 24rem;
      padding-bottom: 5rem;
    }
    &#mckenzie-terapia {
      padding: 2.3rem 0;
      padding-bottom: 5rem;
    }
    &#mckenzie-terapia .image-grid {
      margin-top: 2rem;
    }
  }
`
const DetailHeading = styled(SubHeading)`
  color: ${CuiColors.brown(0.9)};
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
  }
`
const DetailsParagraph = styled(Paragraph)`
  text-align: justify;
  color: ${CuiColors.brown(0.8)};
  @media (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
`

const MovedImage = styled(CuiImage)`
  position: relative;
  top: -8rem;
  @media (max-width: ${breakPoint.md.width}px) {
    top: 0rem;
  }
`

const GridContainer = styled(Grid)`
  justify-content: space-between;
  align-items: center;
`
interface ImageGridProps {
  textAlign?: "center" | "left" | "right" | "justify"
}
const ImageGrid = styled(Grid)<ImageGridProps>`
  text-align: ${({ textAlign = "center" }) => textAlign};
  @media (max-width: ${breakPoint.md.width}px) {
    text-align: center !important;
    margin-top: 3.2rem !important;
  }
  @media (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    text-align: left;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    margin-top: 2rem;
  }
`
const DetailsBorder = styled(Border)`
  border-width: 5px;
`
export const Details = ({ viewport }: ComponentType) => {
    const router = useRouter()
    const data = router.query

    useEffect(() => {
        if (router.query && Object.keys(data)[0]) {
            const element = document.getElementById(Object.keys(data)[0])
            const timer = setTimeout(() => {
                element && element.scrollIntoView({ behavior: "auto", block: "start", inline: "start" })
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [data])
    return (
        <>
            <Container id="manualterapia" paddingBottom={16}>
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Manu??lter??pia</DetailHeading>
                            <DetailsParagraph>
                A vizsg??latokat ??s a kezel??seket is a k??t kezem alapozza. Csigoly??r??l-csigoly??ra, ??z??letr??l-??z??letre, minden kicsi mozdulatot ??rz??kelek. Ha a vizsg??lt ??z??letben, valamelyik mozg??s
                ir??ny??ban blokkot ??rz??kelek, azt megkezelem. Ezt l??gz??si technik??kkal ??s izommegfesz??t??sek seg??ts??g??vel v??gezz??k el. Ezek az ??z??leti blokkok, komoly f??jdalmakat tudnak okozni, amelyek
                hat??s??ra tapasztalhatod, p??ld??ul azt a bizonyos ???becs??p??d??s??? ??rz??st. Nem mellesleg v??gtagokba kisug??rz?? f??jdalmat, zsibbad??st, ???hangyam??sz??s??rz??st??? is tapasztalhatsz. A migr??nes
                fejf??j??sok ??s a f??lz??g??sok h??tter??ben is sokszor ezek a blokkok ??llhatnak. A manu??lter??pi??val a f??jdalmaid okait tudjuk felfedezni ??s kezelni, m??g m??s kezel??sek sokszor csak a t??netek
                enyh??t??s??re szolg??lnak. Hat??s??ra a teljes testedet k??nnyebbnek ??rezheted, mivel a megbomlott egyens??lyt ??ll??tjuk helyre.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <DetailsBorder pos={viewport === "mobile" && { x: 1, y: 0 }}>
                                <CuiImage src={manualterapia.src} alt="Kezel??sek - Manu??lter??pia" imgWidth={{ og: 498, sm: 303 }} pos={{ x: -2.4, y: 2.4 }} />
                            </DetailsBorder>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="lagyresz-kezelesek" backgroundColor={CuiColors.grey(0.2)} paddingTop={1.6} paddingBottom={1.6}>
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>L??gyr??sz kezel??sek</DetailHeading>
                            <DetailsParagraph>
                Kezel??seim legnagyobb r??sz??t a l??gyr??szek kezel??se t??lti ki, mivel ezek a sz??vetek rengeteg fesz??lts??get hordoznak magukban, mely kihat a testtart??sra, a j??r??sra ??s a mindennapi
                tev??kenys??gekre. Ezek a fesz??lts??gek kor??bbi ???traum??k??? hat??s??ra alakulhatnak ki, amelyek nem csak fizikai, hanem lelki eredet??ek is lehetnek. Kezel??s??k hat??s??ra, ??gy nem csak testi,
                hanem ak??r lelki old??d??s is bek??vetkezhet. De mit is takar a l??gyr??sz? A b??r, a b??r alatti k??t??sz??vet, az izom ??s az izomp??lya ??? azaz a fascia. A kezel??s sor??n ??rz??kelem a k??l??nb??z??
                fesz??l??seket, az inakt??v ter??leteket, a test csavarod??sait, amelyek a test diszharm??ni??j??t okozhatj??k. A hegek kezel??se is ide tartozik. Az izmok ??s a k??t??sz??vetek egyens??ly??t pr??b??lom
                helyre??ll??tani, a harmonikus mozg??s ??s a f??jdalommentes ??letvitel ??rdek??ben.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <MovedImage src={lagyreszKezelesek.src} alt="Kezel??sek - L??gyr??sz kezel??sek" imgWidth={{ og: 365, sm: 267 }} />
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="gyogytorna">
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Gy??gytorna</DetailHeading>
                            <DetailsParagraph>
                Gy??gytorna n??lk??l el??g hosszadalmasra siker??lne a p??cienseim gy??gy??t??sa, mivel a megkezelt ??z??letek vissza tudnak ???blokkosodni??? ??s a l??gyr??szek harm??ni??ja is b??rmikor k??nnyen
                megbomlik. De ??ppen ez??rt a gy??gytorna sem el??g kezel??s n??lk??l, mert csak a korrig??lt helyzetben er??s??thet??nk r?? az izmokra. ??gy ??p??tem fel a feladatokat, hogy azok szelekt??ven a
                c??lzott izomcsoportra vagy az el??rni k??v??nt funkci??ra ir??nyuljanak. Ezek lehetnek mozg??sterjedelemet n??vel??, stabiliz??l??, er??s??t??, ny??jt?? feladatok. A kezel??s v??g??n otthon elv??gezhet??
                gyakorlatokb??l ??ll?? gyakorlatsort ??ll??tok Neked ??ssze, majd tan??tok meg, a gy??gyul??si folyamat meggyors??t??s??ra.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <DetailsBorder pos={viewport != "mobile" && { x: -2.4, y: 0 }}>
                                <CuiImage src={gyogytorna.src} alt="Kezel??sek - Gy??gytorna" imgWidth={{ og: 480, sm: 301 }} pos={{ x: 2.4, y: 2.4 }} />
                            </DetailsBorder>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="haromdimenzios-scoliosis-terapia" backgroundColor={CuiColors.darkBeige(0.15)}>
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>
                H??romdimenzi??s scoliosis ter??pia
                                <br />- Schroth ter??pia
                            </DetailHeading>
                            <DetailsParagraph>
                A scoliosis, a gerincferd??l??s latin megfelel??je, amely a gerinc oldalir??ny?? elg??rb??l??se mellett a saj??t tengelye k??r??li elcsavarod??s??t is jelenti. A ny??lir??ny?? g??rb??leteket is
                ??rintettek, p??ld??ul a gerinc valamelyik r??sze oldalr??l n??zve t??ls??gosan ellaposodik (pl. kiegyenesedett lordosis) vagy p??posodik (pl. fokozott kyphosis). A Schroth ter??pia k??l??nb??z??
                speci??lis testhelyzetekben v??gzett l??gz??- ??s er??s??t?? gyakorlatokb??l ??ll?? kezel??s, amely h??romdimenzi??ban hat a gerincre. A gerincferd??l??s kezel??se sor??n a Schroth ter??pi??n k??v??l
                manu??lter??pi??s ??s l??gyr??sz kezel??ses technik??kat, k??l??nb??z?? ??ltal??nos er??s??t??, ny??jt?? gyakorlatokat adok szem??lyre szabottan a p??cienseimnek. Ezek ??ltal javul a testtart??s, valamint
                cs??kkenhet vagy meg??ll??that?? a gerincferd??l??s m??rt??ke.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <CuiImage src={haromdimenzios.src} alt="Kezel??sek - H??romdimenzi??s scoliosis ter??pia - Schroth ter??pia" imgWidth={{ og: 480, sm: 251 }} />
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="mckenzie-terapia">
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Mckenzie ter??pia</DetailHeading>
                            <DetailsParagraph>
                Kifejezetten gerincs??rvre (hernia disci), a porckorong kiboltosul??sra (protrusio disci), valamint a keresztcsont ??s a medence ??z??let??nek, a sacroiliacalis (SI) ??z??letre ir??nyul??
                ter??pia. Kik??rdez??s ut??n teszteket v??gzek a p??cienseken, mely mozdulatok fokozz??k vagy cs??kkentik a f??jdalmat. Ezekb??l lesz??rve adom a megfelel?? gyakorlatot, melyet otthon, rendk??v??li
                gyakoris??ggal kell elv??gezni, hogy cs??kkents??k a helyi ??s a kisug??rz?? panaszokat. A kezel??s el??tt elengedhetetlen a manu??lter??pia, a l??gyr??szkezel??s ??s a testtart??s jav??t??s. ??gy
                napokra lesz??k??thet?? a gy??gyul??si folyamat, amely h??napokig tartana. K??s??bb k??l??nb??z?? er??s??t?? feladatokat is adok, hogy a helyre??ll??tott ??z??letet stabiliz??ljuk ??s megel??zz??k a k??s??bb
                ??jonnan kialakulhat?? s??rvesed??seket.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right" className="image-grid">
                            <DetailsBorder pos={viewport === "mobile" ? { x: 1, y: 0 } : { x: 0, y: -2.4 }}>
                                <CuiImage src={mckenzie.src} alt="Kezel??sek - Mckenzie ter??pia" imgWidth={{ og: 344, sm: 296 }} pos={{ x: -2.4, y: 2.4 }} />
                            </DetailsBorder>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
        </>
    )
}
