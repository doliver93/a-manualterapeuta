import React from "react"
import styled from "styled-components"

import background from "images/conditions-survey/allapotfelmeres-intro.png"
import { Navigation } from "components/layout/Navigation"
import { Content, FlexLeftColumn } from "assets/styles/shared"
import { Heading, Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import logo from "images/layout/logo-white.svg"

import allapotfelmeres1 from "images/conditions-survey/allapotfelmeres-gyakorlat-1.png"
import allapotfelmeres2 from "images/conditions-survey/allapotfelmeres-gyakorlat-2.png"
import allapotfelmeres3 from "images/conditions-survey/allapotfelmeres-gyakorlat-3.png"
import allapotfelmeres4 from "images/conditions-survey/allapotfelmeres-gyakorlat-4.png"
import { Grid } from "@mui/material"
import { Img } from "assets/styles/styled-components/images"

const ImagesContent = styled(Content)`
  position: relative;
  top: -12rem;
  margin-bottom: -9.625rem;
`
const Container = styled.div`
  background-color: ${AmaColors.darkBeige(0.15)};
  width: 100%;
`
const Divider = styled.div`
  height: 5rem;
  width: 100%;
  background-color: ${AmaColors.white()};
`

export const Images = () => {
    return (
        <Container>
            <ImagesContent>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Img src={allapotfelmeres1.src} alt="Állapotfelmérés gyakorlat 1" width={23} height={34.125} />
                    </Grid>
                    <Grid item>
                        <Img src={allapotfelmeres2.src} alt="Állapotfelmérés gyakorlat 2" width={23} height={17.6} margin="0 0 1.75rem 0" />
                        <Img src={allapotfelmeres3.src} alt="Állapotfelmérés gyakorlat 3" width={23} height={24.313} />
                    </Grid>
                    <Grid item>
                        <Img src={allapotfelmeres4.src} alt="Állapotfelmérés gyakorlat 4" width={23} height={34.5} />
                    </Grid>
                </Grid>
            </ImagesContent>
            <Divider />
        </Container>
    )
}