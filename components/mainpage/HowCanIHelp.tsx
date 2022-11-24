import React from "react"
import styled, { keyframes } from "styled-components"

import { Content, CuiLink, FlexCenter } from "assets/styles/shared"
import { Heading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import derektajiFajdalmak from "images/mainpage/derektaji-fajdalmak.svg"
import nyakiPanaszok from "images/mainpage/nyaki-panaszok.svg"
import vegtagFajdalmak from "images/mainpage/vegtag-fajdalmak.svg"
import tartasJavitas from "images/mainpage/tartasjavitas.svg"
import sportserulesek from "images/mainpage/sportserulesek.svg"
import mutetekUtan from "images/mainpage/mutetek-utan.svg"
import megelozes from "images/mainpage/megelozes.svg"
import { CuiImage } from "assets/styles/styled-components/images"

const FlexContent = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const GridContainer = styled.div`
  margin-top: 8rem;
`
const CustomGrid = styled(Grid)`
  text-align: center;
  margin-bottom: 8rem;
`

const Text = styled.div`
  font-family: Poppins600;
  font-size: 1.6rem;
  margin: 1.6rem;
  color: ${CuiColors.brown(0.8)};
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`
const dotFlashing = keyframes`
    0%  {box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff1;background: #fff1 }
    25% {box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff;background: #fff1}
    50% {box-shadow: 2.6rem 0 #fff1,-2.6rem 0 #fff1; background: #fff}
    75%{box-shadow: 2.6rem 0 #fff,-2.6rem 0 #fff1; background: #fff1 }
    100%{box-shadow: 2.6rem 0 #fff1, -2.6rem 0 #fff1;background: #fff1 }
`
const MoreInfo = styled.div`
    &:hover .dot {
        animation: ${dotFlashing} 0.8s linear infinite;
      }
`
const MoreCuiImage = styled(FlexCenter)`
  background-color: ${CuiColors.darkBeige(1)};
  border-radius: 50%;
  cursor: pointer;
  height: 9.1rem;
  margin: auto;
  width: 9.1rem;
  
`
const Dots = styled.div`
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 2.6rem 0 #fff, -2.6rem 0 #fff;
  background: #fff;
  width: 1.6rem;
`

export const HowCanIHelp = () => {
    return (
        <FlexContent>
            <Heading fontSize={4.5} textAlign="center" color={CuiColors.brown(0.9)} margin="8rem auto auto auto">
        Amiben segíthetek Neked
            </Heading>
            <GridContainer>
                <Grid container justifyContent="center" alignItems="center">
                    <CustomGrid item xs={3}>
                        <CuiImage src={derektajiFajdalmak.src} alt="deréktáji fájdalmak" />
                        <Text>deréktáji fájdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={nyakiPanaszok.src} alt="nyaki panaszok" />
                        <Text>nyaki panaszok</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={vegtagFajdalmak.src} alt="végtag fájdalmak" />
                        <Text>végtag fájdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={tartasJavitas.src} alt="tartásjavítás" />
                        <Text>tartásjavítás</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={sportserulesek.src} alt="sportsérülések" />
                        <Text>sportsérülések</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={mutetekUtan.src} alt="műtétek után" />
                        <Text>műtétek után</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiImage src={megelozes.src} alt="megelőzés" />
                        <Text>megelőzés</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <CuiLink href="/kezelesek">
                            <MoreInfo>
                                <MoreCuiImage>
                                    <Dots className="dot" />
                                </MoreCuiImage>
                                <Text>bővebben</Text>
                            </MoreInfo>
                        </CuiLink>
                    </CustomGrid>
                </Grid>
            </GridContainer>
        </FlexContent>
    )
}
