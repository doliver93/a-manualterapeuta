import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { AmaColors } from "assets/styles/colors"

import allapotfelmeres1 from "images/conditions-survey/allapotfelmeres-gyakorlat-1.png"
import allapotfelmeres2 from "images/conditions-survey/allapotfelmeres-gyakorlat-2.png"
import allapotfelmeres3 from "images/conditions-survey/allapotfelmeres-gyakorlat-3.png"
import allapotfelmeres4 from "images/conditions-survey/allapotfelmeres-gyakorlat-4.png"
import { Grid } from "@mui/material"
import { CuiImage } from "assets/styles/styled-components/images"

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
                        <CuiImage src={allapotfelmeres1.src} alt="Állapotfelmérés gyakorlat 1" width={368} height={546} />
                    </Grid>
                    <Grid item>
                        <CuiImage src={allapotfelmeres2.src} alt="Állapotfelmérés gyakorlat 2" width={368.29} height={281.6} margin="0 0 1.75rem 0" />
                        <CuiImage src={allapotfelmeres3.src} alt="Állapotfelmérés gyakorlat 3" width={368} height={389} />
                    </Grid>
                    <Grid item>
                        <CuiImage src={allapotfelmeres4.src} alt="Állapotfelmérés gyakorlat 4" width={368} height={552} />
                    </Grid>
                </Grid>
            </ImagesContent>
            <Divider />
        </Container>
    )
}
