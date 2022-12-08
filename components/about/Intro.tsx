import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import React from "react"

import styled from "styled-components"
import { Grid } from "@mui/material"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"

import portrait from "images/about/Papp Alexandra.webp"
import { CuiImage } from "assets/styles/styled-components/images"
import { ComponentType } from "types/ComponentType"

const Container = styled.div`
  background-color: ${CuiColors.darkBeige(0.1)};
  padding-top: 5.4rem;
  padding-bottom: 9.6rem;
  position: relative;
  @media (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    padding-top: 0rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding-top: 0rem;
    margin-bottom: 10rem;
  }
`
const PortraitContainer = styled.div`
  position: absolute;
  width: 365.75px;
  height: 472px;
  right: 0;
  top: 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    right: 3.5rem;
  }
  @media (max-width: ${breakPoint.md.width}px) {
    position: relative;
    right: unset;
    height: auto;
    width: auto;
    text-align: right;
  }
  @media (max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    width: 100%;
    margin-bottom: -15rem;
  }
`
const PortraitBorder = styled(Border)`
  @media (max-width: ${breakPoint.sm.width}px) {
    width: 100%;
  }
`
const PortraitImage = styled(CuiImage)`
  @media (max-width: ${breakPoint.md.width}px) {
    transform: translate(-1.6rem, 1.6rem);
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    padding: 0 2rem;
    width: 100%;
    height: 100%;
    transform: translate(0rem, 2.5rem);
  }
`

export const Intro = ({ viewport }: ComponentType) => {
    return (
        <Container>
            <Content>
                <Grid container justifyContent={viewport === "mobile" ? "center" : "space-between"} alignItems="center">
                    <Grid item md={7} sm={6} xs={12}>
                        <Heading color={CuiColors.brown(0.9)} margin={{ md: "0 0 4.5rem 0", sm: "2rem 0" }}>
              Rólam
                        </Heading>
                        <Paragraph color={CuiColors.brown(0.8)} textAlign="justify" margin={{ sm: "0 0 2rem 0" }}>
              A sport mindig is fontos része volt az életemnek, így mindig is tudtam hogy ezzel szeretnék foglalkozni. Korábban szertornáztam, trambulinoztam. Jelenleg rendszeresen futok terepen és
              ariel silk-re járok. A Semmelweis Egyetemen végeztem, mint gyógytornász-fizioterapeuta 2017-ben. Ezalatt gyógymasszőrként praktizáltam és egy NBIII-as foci csapat sportmasszőre is
              voltam. A diplomaszerzésem óta egy állami kórházban dolgozom a magánpraxisom mellett.
                        </Paragraph>
                    </Grid>
                    <Grid item md={5} sm={6} xs={12}>
                        <PortraitContainer>
                            <PortraitBorder>
                                <PortraitImage
                                    src={portrait.src}
                                    imgWidth={{ og: 365.75, md: 300, sm: 225 }}
                                    imgHeight={{ og: 472 }}
                                    pos={viewport === "mobile" ? { x: 0, y: 2.5 } : { x: -1.6, y: 1.6 }}
                                    alt="Papp Alexandra"
                                />
                            </PortraitBorder>
                        </PortraitContainer>
                    </Grid>
                </Grid>
            </Content>
        </Container>
    )
}
