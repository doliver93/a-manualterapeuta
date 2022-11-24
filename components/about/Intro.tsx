import { CuiColors } from "assets/styles/colors"
import { Border, Content } from "assets/styles/shared"
import React from "react"

import styled from "styled-components"
import { Grid } from "@mui/material"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"

import portrait from "images/about/Papp Alexandra.png"
import { CuiImage } from "assets/styles/styled-components/images"

const Container = styled.div`
  background-color: ${CuiColors.darkBeige(0.1)};
  margin-top: 8rem;
  padding-top: 5.4rem;
  padding-bottom: 9.6rem;
  position: relative;
`
const PortraitContainer = styled.div`
    position: absolute;
    width: 365.75px;
    height: 472px;
    right: 0;
    top: 0;
`

export const Intro = () => {
    return (
        <Container>
            <Content>
                <Grid container justifyContent="space-between">
                    <Grid item xs={7}>
                        <Heading color={CuiColors.brown(0.9)} margin={{md: "0 0 4.5rem 0"}}>
              Rólam
                        </Heading>
                        <Paragraph color={CuiColors.brown(0.8)} textAlign="justify">
              A sport mindig is fontos része volt az életemnek, így mindig is tudtam hogy ezzel szeretnék foglalkozni. Korábban szertornáztam, trambulinoztam. Jelenleg rendszeresen futok terepen és
              ariel silk-re járok. A Semmelweis Egyetemen végeztem, mint gyógytornász-fizioterapeuta 2017-ben. Ezalatt gyógymasszőrként praktizáltam és egy NBIII-as foci csapat sportmasszőre is
              voltam. A diplomaszerzésem óta egy állami kórházban dolgozom a magánpraxisom mellett.
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <PortraitContainer>
                            <Border>
                                <CuiImage src={portrait.src} width={365.75} height={472} alt="Papp Alexandra" pos={{x: -1.6, y: 1.6}}/>
                            </Border>
                        </PortraitContainer>
                    </Grid>
                </Grid>
            </Content>
        </Container>
    )
}
