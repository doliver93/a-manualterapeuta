import React, { useEffect } from "react"
import { Grid } from "@mui/material"
import { AmaColors } from "assets/styles/colors"
import { Border, Content } from "assets/styles/shared"
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
  background-color: ${({ backgroundColor = AmaColors.white() }) => backgroundColor};
  padding-top: ${({ paddingTop = 6.25 }) => `${paddingTop}rem`};
  padding-bottom: ${({ paddingBottom = 6.25 }) => `${paddingBottom}rem`};
`
const DetailHeading = styled(SubHeading)`
  color: ${AmaColors.brown(0.9)};
  font-size: 1.563rem;
  margin: 0rem 0rem 1.875rem 0rem;
`
const DetailsParagraph = styled(Paragraph)`
  text-align: justify;
  color: ${AmaColors.brown(0.8)};
  fontsize: 1.125rem;
`

const MovedImage = styled(CuiImage)`
  position: relative;
  top: -5rem;
`

const GridContainer = styled(Grid)`
  justify-content: space-between;
  align-items: center;
`

export const Details = () => {
    const router = useRouter()
    const data = router.query
    useEffect(()=>{
        if (router.query && Object.keys(data)[0]){
            const element = document.getElementById(Object.keys(data)[0])
            console.log(element)
            const timer = setTimeout(() => {
                element && element.scrollIntoView({behavior: "auto", block: "center", inline: "center"})
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [data])
    return (
        <>
            <Container id="manualterapia" paddingBottom={10}>
                <Content>
                    <GridContainer container>
                        <Grid item xs={6}>
                            <DetailHeading>Manuálterápia</DetailHeading>
                            <DetailsParagraph>
                A vizsgálatokat és a kezeléseket is a két kezem alapozza. Csigolyáról-csigolyára, ízületről-ízületre, minden kicsi mozdulatot érzékelek. Ha a vizsgált ízületekben, valamelyik mozgás
                irányában blokkot érzékelek, azt megkezelem. Ezt légzés és izommegfeszítések segítségével végezzük el. Ezek az ízületi blokkok, komoly fájdalmakat tudnak okozni, amelyek hatására
                tapasztalhatod például azt a bizonyos „becsípődés” érzést. Nem mellesleg végtagokba kisugárzó fájdalmat, zsibbadást, „hangyamászásérzést” is tapasztalhatsz. A migrénes fejfájások és a
                fülzúgások hátterében is sokszor ezek a blokkok állhatnak. A manuálterápiával a fájdalmaid okait tudjuk felfedezni és kezelni, míg más kezelések sokszor csak a tünetek enyhítésére
                szolgálnak. Hatására a teljes testedet könnyebbnek érezheted, mivel a megbomlott egyensúlyt állítjuk helyre.
                            </DetailsParagraph>
                        </Grid>
                        <Grid item>
                            <Border>
                                <CuiImage src={manualterapia.src} alt="Kezelések - Manuálterápia" width={498} height={390} pos={{ x: -1.5, y: 1.5 }} />
                            </Border>
                        </Grid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="lagyresz-kezelesek" backgroundColor={AmaColors.grey(0.2)} paddingTop={1} paddingBottom={1}>
                <Content>
                    <GridContainer container>
                        <Grid item xs={6}>
                            <DetailHeading>Lágyrész kezelések</DetailHeading>
                            <DetailsParagraph>
                A kezelések során sosem hagyom ki a lágyrészeket. Ez magát a bőrt és a bőr alatti kötőszöveteket jelenti. Ide tartoznak az izmok és az izompólyák kezelése, azaz a különböző fascia
                kezelések, valamint a hegkezelések. A lágyrészekben érzékelem a különböző feszüléseket, az inaktív területeket, amelyek a test csavarodásait és diszharmóniáját okozhatja. Ezzel a
                kezelési módszerrel próbálom visszaállítani az izmok és a kötőszövetek egyensúlyát, a harmonikus mozgás és a fájdalommentes életvitel érdekében.
                            </DetailsParagraph>
                        </Grid>
                        <Grid item>
                            <MovedImage src={lagyreszKezelesek.src} alt="Kezelések - Lágyrész kezelések" width={365} height={488} />
                        </Grid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="gyogytorna">
                <Content>
                    <GridContainer container>
                        <Grid item xs={6}>
                            <DetailHeading>Gyógytorna</DetailHeading>
                            <DetailsParagraph>
                Azt gondolom, hogy gyógytorna nélkül elég hosszadalmasra sikerülne a pácienseim gyógyítása, mivel a megkezelt ízületek és lágyrészek vissza-vissza tudnak „blokkosodni”. De éppen ezért
                a gyógytorna sem elég kezelés nélkül, mert a felbomlott egyensúlyú izmokra erősíthetünk rá, avagy nyújthatjuk meg. Úgy építem fel a feladatokat, hogy azok szelektíven a célzott
                izomcsoportra vagy az elérni kívánt funkcióra irányuljon. Ezek lehetnek mozgásterjedelem növelő, stabilizáló, erősítő, nyújtó, stb. feladatok. Ezeket a feladatokat fogom feladni házi
                feladatnak is Neked otthonra, hogy meggyorsítsuk a gyógyulási folyamatot.
                            </DetailsParagraph>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: -1.5, y: 0 }}>
                                <CuiImage src={gyogytorna.src} alt="Kezelések - Gyógytorna" width={480} height={435} pos={{ x: 1.5, y: 1.5 }} />
                            </Border>
                        </Grid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="haromdimenzios-scoliosis-terapia" backgroundColor={AmaColors.darkBeige(0.15)}>
                <Content>
                    <GridContainer container>
                        <Grid item xs={6}>
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
                        <Grid item>
                            <CuiImage src={haromdimenzios.src} alt="Kezelések - Háromdimenziós scoliosis terápia - Schroth terápia" width={480} height={435} />
                        </Grid>
                    </GridContainer>
                </Content>
            </Container>
            <Container id="mckenzie-terapia">
                <Content>
                    <GridContainer container>
                        <Grid item xs={6}>
                            <DetailHeading>Mckenzie terápia</DetailHeading>
                            <DetailsParagraph>
                Kifejezetten gerincsérvre (hernia disci), a porckorong kiboltosulásra (protrusio disci), valamint a keresztcsont és a medence ízületének, a sacroiliacalis (SI) ízületre irányuló
                terápia. Kikérdezés után teszteket végzek a pácienseken, mely mozdulatok fokozzák vagy csökkentik a fájdalmat. Ezekből leszűrve adom a megfelelő gyakorlatot, melyet otthon, rendkívüli
                gyakorisággal kell elvégezni, hogy csökkentsük a helyi és a kisugárzó panaszokat. A kezelés előtt elengedhetetlen a manuálterápia, a lágyrészkezelés és a testtartás javítás. Így
                napokra leszűkíthető a gyógyulási folyamat, amely hónapokig tartana. Később különböző erősítő feladatokat is adok, hogy a helyreállított ízületet stabilizáljuk és megelőzzük a később
                újonnan kialakulható sérvesedéseket.
                            </DetailsParagraph>
                        </Grid>
                        <Grid item>
                            <Border pos={{ x: 0, y: -1.5 }}>
                                <CuiImage src={mckenzie.src} alt="Kezelések - Háromdimenziós scoliosis terápia - Schroth terápia" width={344} height={488} pos={{ x: -1.5, y: 1.5 }} />
                            </Border>
                        </Grid>
                    </GridContainer>
                </Content>
            </Container>
        </>
    )
}
