import React, { useEffect } from "react"
import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiImage } from "assets/styles/styled-components/images"
import styled from "styled-components"

import manualterapia from "images/treatments/kezelesek-manualterapia.png"
import lagyreszKezelesek from "images/treatments/kezelesek-lagyresz-kezelesek.png"
import gyogytorna from "images/treatments/kezelesek-gyogytorna.png"
import haromdimenzios from "images/treatments/kezelesek-haromdimenzios-scoliosis-terapia.png"
import mckenzie from "images/treatments/kezelesek-mckenzie-terapia.png"
import { useRouter } from "next/router"

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
`
const DetailHeading = styled(SubHeading)`
  color: ${CuiColors.brown(0.9)};
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
`
const DetailsParagraph = styled(Paragraph)`
  text-align: justify;
  color: ${CuiColors.brown(0.8)};
  fontsize: 1.8rem;
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
    text-align: center;
    margin-top: 3.2rem;
  }
`
interface DetailsImageProps {
  responsive?: boolean
}
const DetailsImage = styled(CuiImage)<DetailsImageProps>`
  @media (max-width: ${breakPoint.lg.width}px) {
    width: ${({ width = 0, responsive = false }) => `${responsive ? width * breakPoint.lg.imgSize : width}px`};
  }
  @media (max-width: ${breakPoint.md.width}px) {
    width: ${({ width = 0, responsive = false }) => `${responsive ? width * breakPoint.lg.imgSize : width}px`};
  }
`

export const Details = () => {
    const router = useRouter()
    const data = router.query
    useEffect(() => {
        if (router.query && Object.keys(data)[0]) {
            const element = document.getElementById(Object.keys(data)[0])
            console.log(element)
            const timer = setTimeout(() => {
                element && element.scrollIntoView({ behavior: "auto", block: "center", inline: "center" })
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
                            <DetailHeading>Manuálterápia</DetailHeading>
                            <DetailsParagraph>
                A vizsgálatokat és a kezeléseket is a két kezem alapozza. Csigolyáról-csigolyára, ízületről-ízületre, minden kicsi mozdulatot érzékelek. Ha a vizsgált ízületekben, valamelyik mozgás
                irányában blokkot érzékelek, azt megkezelem. Ezt légzés és izommegfeszítések segítségével végezzük el. Ezek az ízületi blokkok, komoly fájdalmakat tudnak okozni, amelyek hatására
                tapasztalhatod például azt a bizonyos „becsípődés” érzést. Nem mellesleg végtagokba kisugárzó fájdalmat, zsibbadást, „hangyamászásérzést” is tapasztalhatsz. A migrénes fejfájások és a
                fülzúgások hátterében is sokszor ezek a blokkok állhatnak. A manuálterápiával a fájdalmaid okait tudjuk felfedezni és kezelni, míg más kezelések sokszor csak a tünetek enyhítésére
                szolgálnak. Hatására a teljes testedet könnyebbnek érezheted, mivel a megbomlott egyensúlyt állítjuk helyre.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <Border>
                                <DetailsImage src={manualterapia.src} alt="Kezelések - Manuálterápia" responsive width={498} pos={{ x: -2.4, y: 2.4 }} />
                            </Border>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="lagyresz-kezelesek" backgroundColor={CuiColors.grey(0.2)} paddingTop={1.6} paddingBottom={1.6}>
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Lágyrész kezelések</DetailHeading>
                            <DetailsParagraph>
                A kezelések során sosem hagyom ki a lágyrészeket. Ez magát a bőrt és a bőr alatti kötőszöveteket jelenti. Ide tartoznak az izmok és az izompólyák kezelése, azaz a különböző fascia
                kezelések, valamint a hegkezelések. A lágyrészekben érzékelem a különböző feszüléseket, az inaktív területeket, amelyek a test csavarodásait és diszharmóniáját okozhatja. Ezzel a
                kezelési módszerrel próbálom visszaállítani az izmok és a kötőszövetek egyensúlyát, a harmonikus mozgás és a fájdalommentes életvitel érdekében.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <MovedImage src={lagyreszKezelesek.src} alt="Kezelések - Lágyrész kezelések" width={365} />
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="gyogytorna">
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Gyógytorna</DetailHeading>
                            <DetailsParagraph>
                Azt gondolom, hogy gyógytorna nélkül elég hosszadalmasra sikerülne a pácienseim gyógyítása, mivel a megkezelt ízületek és lágyrészek vissza-vissza tudnak „blokkosodni”. De éppen ezért
                a gyógytorna sem elég kezelés nélkül, mert a felbomlott egyensúlyú izmokra erősíthetünk rá, avagy nyújthatjuk meg. Úgy építem fel a feladatokat, hogy azok szelektíven a célzott
                izomcsoportra vagy az elérni kívánt funkcióra irányuljon. Ezek lehetnek mozgásterjedelem növelő, stabilizáló, erősítő, nyújtó, stb. feladatok. Ezeket a feladatokat fogom feladni házi
                feladatnak is Neked otthonra, hogy meggyorsítsuk a gyógyulási folyamatot.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <Border pos={{ x: -2.4, y: 0 }}>
                                <DetailsImage src={gyogytorna.src} alt="Kezelések - Gyógytorna" width={480} pos={{ x: 2.4, y: 2.4 }} responsive />
                            </Border>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="haromdimenzios-scoliosis-terapia" backgroundColor={CuiColors.darkBeige(0.15)}>
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>
                Háromdimenziós scoliosis terápia
                                <br />- Schroth terápia
                            </DetailHeading>
                            <DetailsParagraph>
                A scoliosis a gerincferdülés latin megfelelője, amely a gerinc oldalirányú elgörbülését jelenti. A gerincferdülés nem csak ebből az oldalirányú elhajlásból áll, hanem a saját tengelye
                körüli elcsavarodásából is. A nyílirányú görbületeket is érinti ez a jelenség, például a gerinc valamelyik része túlságosan ellaposodik vagy púposodik. Ezért háromdimenziós ez a
                kezelés és ezt különböző, „kitekert” testhelyzetekben, légzőgyakorlatokkal tudjuk korrigálni. Gerincferdülés kezeléséhez ezeket a feladatokat adaptálom személyre szabottan, mivel
                minden gerincferdülés más és más. Kiegészítve manuálterápiával és lágyrész kezelésekkel, mert a „helytelen” testtartás miatt ezek a páciensek tele vannak blokkokkal és
                izomdiszbalanszokkal. Természetesen az erősítő és lazító, nyújtó gyógytorna feladatok sem maradhatnak el ezek mellett.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right">
                            <DetailsImage src={haromdimenzios.src} alt="Kezelések - Háromdimenziós scoliosis terápia - Schroth terápia" width={480} responsive />
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="mckenzie-terapia">
                <Content>
                    <GridContainer container>
                        <Grid item md={6} xs={12}>
                            <DetailHeading>Mckenzie terápia</DetailHeading>
                            <DetailsParagraph>
                Kifejezetten gerincsérvre (hernia disci), a porckorong kiboltosulásra (protrusio disci), valamint a keresztcsont és a medence ízületének, a sacroiliacalis (SI) ízületre irányuló
                terápia. Kikérdezés után teszteket végzek a pácienseken, mely mozdulatok fokozzák vagy csökkentik a fájdalmat. Ezekből leszűrve adom a megfelelő gyakorlatot, melyet otthon, rendkívüli
                gyakorisággal kell elvégezni, hogy csökkentsük a helyi és a kisugárzó panaszokat. A kezelés előtt elengedhetetlen a manuálterápia, a lágyrészkezelés és a testtartás javítás. Így
                napokra leszűkíthető a gyógyulási folyamat, amely hónapokig tartana. Később különböző erősítő feladatokat is adok, hogy a helyreállított ízületet stabilizáljuk és megelőzzük a később
                újonnan kialakulható sérvesedéseket.
                            </DetailsParagraph>
                        </Grid>
                        <ImageGrid item md={6} xs={12} textAlign="right" className="image-grid">
                            <Border pos={{ x: 0, y: -2.4 }}>
                                <DetailsImage src={mckenzie.src} alt="Kezelések - Mckenzie terápia" width={344} pos={{ x: -2.4, y: 2.4 }} />
                            </Border>
                        </ImageGrid>
                    </GridContainer>
                </Content>
            </Container>
        </>
    )
}
