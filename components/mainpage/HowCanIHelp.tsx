import React from "react"
import styled, { keyframes } from "styled-components"

import { breakPoint, Content, CuiLink, FlexCenter, FlexLeftColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import derektajiFajdalmak from "images/mainpage/derektaji-fajdalmak.png"
import nyakiPanaszok from "images/mainpage/nyaki-panaszok.png"
import vegtagFajdalmak from "images/mainpage/vegtag-fajdalmak.png"
import tartasJavitas from "images/mainpage/tartasjavitas.png"
import sportserulesek from "images/mainpage/sportserulesek.png"
import mutetekUtan from "images/mainpage/mutetek-utan.png"
import megelozes from "images/mainpage/megelozes.png"
import { CuiImage } from "assets/styles/styled-components/images"
import { ComponentType } from "types/ComponentType"

const FlexContent = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const GridContainer = styled.div``
const CustomGrid = styled(Grid)`
  text-align: center;
  margin-bottom: 8rem !important;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    margin-bottom: 2rem !important;
  }
`

const Text = styled.div`
  font-family: Poppins600;
  font-size: 1.6rem;
  margin: 1.6rem 0;
  color: ${CuiColors.brown(0.8)};
  text-transform: uppercase;
  letter-spacing: 0.16rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
`
const dotFlashing = keyframes`
    0%  {box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff1;background: #fff1 }
    25% {box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff;background: #fff1}
    50% {box-shadow: 2.6rem 0 #fff1,-2.6rem 0 #fff1; background: #fff}
    75%{box-shadow: 2.6rem 0 #fff,-2.6rem 0 #fff1; background: #fff1 }
    100%{box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff1;background: #fff1 }
`
const MoreInfo = styled.div`
  & .text {
    margin-top: 2.5rem !important;
  }
  &:hover .dot {
    animation: ${dotFlashing} 0.8s linear infinite;
  }
  &:hover .text {
    color: ${CuiColors.brown(1)};
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    & .text {
      margin-top: 2.4rem !important;
    }
    &:hover .dot {
      animation: none;
    }
  }
`
const MoreCuiImage = styled(FlexCenter)`
  background-color: ${CuiColors.darkBeige(1)};
  border-radius: 50%;
  cursor: pointer;
  height: 9.1rem;
  margin: auto;
  width: 9.1rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`
const Dots = styled.div`
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 2.6rem 0 #fff, -2.6rem 0 #fff;
  background: #fff;
  width: 1.6rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    box-shadow: 1.3rem 0 #fff, -1.3rem 0 #fff;
    background-position: center;
    width: 1rem;
  }
`

const ResponsiveParagraph = styled(Paragraph)`
  line-height: 1.8rem
`

export const HowCanIHelp = ({ viewport }: ComponentType) => {
    return (
        <FlexContent>
            {viewport === "mobile" ? (
                <FlexLeftColumn>
                    <SubHeading fontSize={{ sm: 1.4 }} color={CuiColors.brown(0.7)} textAlign="left" margin={{sm: "2rem 0"}}>T??rj vissza a teljes ??lethez</SubHeading>
                    <ResponsiveParagraph fontSize={{ sm: 1.2 }} color={CuiColors.brown(0.7)} textAlign="justify">Seg??ts??gemmel meg??rizheted mozg??sszerveid eg??szs??g??t. Manu??lter??pi??s ??s l??gyr??sz kezel??ses m??dszereimmel felt??rom a f??jdalmaid ok??t, amelyek akad??lyozhatnak a mindennapi tev??kenys??geidben.</ResponsiveParagraph>
                </FlexLeftColumn>
            ) : null}
            <Heading textAlign="center" color={CuiColors.brown(0.9)} margin={{ md: "6rem auto", sm: "3rem auto" }}>
        Amiben seg??thetek Neked
            </Heading>
            <GridContainer>
                <Grid container justifyContent="center" alignItems="flex-start">
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={derektajiFajdalmak.src} alt="der??kt??ji f??jdalmak" />
                        <Text>der??kt??ji f??jdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={nyakiPanaszok.src} alt="nyaki panaszok" />
                        <Text>nyaki panaszok</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={vegtagFajdalmak.src} alt="v??gtag f??jdalmak" />
                        <Text>v??gtag f??jdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={tartasJavitas.src} alt="tart??sjav??t??s" />
                        {viewport === "mobile" ? (
                            <Text>
                tart??s-
                                <br />
                jav??t??s
                            </Text>
                        ) : (
                            <Text>tart??sjav??t??s </Text>
                        )}
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={sportserulesek.src} alt="sports??r??l??sek" />
                        {viewport === "mobile" ? (
                            <Text>
                sport-
                                <br />
                s??r??l??sek
                            </Text>
                        ) : (
                            <Text>sports??r??l??sek </Text>
                        )}
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={mutetekUtan.src} alt="m??t??tek ut??n" />
                        <Text>m??t??tek ut??n</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage imgWidth={{ og: 91, sm: 45 }} src={megelozes.src} alt="megel??z??s" />
                        <Text>megel??z??s</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiLink href="/kezelesek">
                            <MoreInfo>
                                <MoreCuiImage><Dots className="dot" /></MoreCuiImage>
                                <Text className="text">b??vebben</Text>
                            </MoreInfo>
                        </CuiLink>
                    </CustomGrid>
                </Grid>
            </GridContainer>
        </FlexContent>
    )
}
