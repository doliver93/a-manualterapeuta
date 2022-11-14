import React from "react"
import styled, { keyframes } from "styled-components"

import { Img } from "assets/styles/styled-components/images"
import { Content, FlexCenter } from "assets/styles/shared"
import { Heading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"
import Grid from "@mui/material/Grid"

import derektajiFajdalmak from "images/mainpage/derektaji-fajdalmak.svg"
import nyakiPanaszok from "images/mainpage/nyaki-panaszok.svg"
import vegtagFajdalmak from "images/mainpage/vegtag-fajdalmak.svg"
import tartasJavitas from "images/mainpage/tartasjavitas.svg"
import sportserulesek from "images/mainpage/sportserulesek.svg"
import mutetekUtan from "images/mainpage/mutetek-utan.svg"
import megelozes from "images/mainpage/megelozes.svg"
import Link from "next/link"

const FlexContent = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const GridContainer = styled.div`
  margin: 7rem 0;
`
const CustomGrid = styled(Grid)`
  text-align: center;
`
const Icon = styled(Img)`
  height: 91px;
  width: 91px;
`
const Text = styled.div`
  font-family: PoppinsSemiBold;
  font-size: 1rem;
  margin: 1rem;
  color: ${AmaColors.brown(0.8)};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`
const dotFlashing = keyframes`
    0%  {box-shadow: 1.5rem 0 #fff1, -1.5rem 0 #fff1;background: #fff1 }
    25% {box-shadow: 1.5rem 0 #fff1, -1.5rem 0 #fff;background: #fff1}
    50% {box-shadow: 1.5rem 0 #fff1,-1.5rem 0 #fff1; background: #fff}
    75%{box-shadow: 1.5rem 0 #fff,-1.5rem 0 #fff1; background: #fff1 }
    100%{box-shadow: 1.5rem 0 #fff1, -1.5rem 0 #fff1;background: #fff1 }
`
const MoreIcon = styled(FlexCenter)`
  background-color: ${AmaColors.darkBeige(1)};
  border-radius: 50%;
  cursor: pointer;
  height: 91px;
  margin: auto;
  width: 91px;
  &:hover .dot {
    animation: ${dotFlashing} 1.5s linear infinite;
  }
`
const Dots = styled.div`
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 1.5rem 0 #fff, -1.5rem 0 #fff;
  background: #fff;
  width: 1rem;
`

export const HowCanIHelp = () => {
    return (
        <FlexContent>
            <Heading fontSize={2.813} textAlign="center" color={AmaColors.brown(0.9)} margin="3rem auto">
        Amiben segíthetek Neked
            </Heading>
            <GridContainer>
                <CustomGrid container justifyContent="center" alignItems="center" spacing={10}>
                    <CustomGrid item xs={3}>
                        <Icon src={derektajiFajdalmak.src} />
                        <Text>deréktáji fájdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={nyakiPanaszok.src} />
                        <Text>nyaki panaszok</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={vegtagFajdalmak.src} />
                        <Text>végtag fájdalmak</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={tartasJavitas.src} />
                        <Text>tartásjavítás</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={sportserulesek.src} />
                        <Text>sportsérülések</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={mutetekUtan.src} />
                        <Text>műtétek után</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Icon src={megelozes.src} />
                        <Text>megelőzés</Text>
                    </CustomGrid>
                    <CustomGrid item xs={3}>
                        <Link href="/about">
                            <MoreIcon>
                                <Dots className="dot" />
                            </MoreIcon>
                        </Link>
                        <Text>bővebben</Text>
                    </CustomGrid>
                </CustomGrid>
            </GridContainer>
        </FlexContent>
    )
}
