import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { CuiColors } from "assets/styles/colors"

import allapotfelmeres1 from "images/conditions-survey/allapotfelmeres-gyakorlat-1.png"
import allapotfelmeres2 from "images/conditions-survey/allapotfelmeres-gyakorlat-2.png"
import allapotfelmeres3 from "images/conditions-survey/allapotfelmeres-gyakorlat-3.png"
import allapotfelmeres4 from "images/conditions-survey/allapotfelmeres-gyakorlat-4.png"
import { Grid } from "@mui/material"
import { CuiImage } from "assets/styles/styled-components/images"

const ImagesContent = styled(Content)`
  position: relative;
  top: -19.2rem;
  margin-bottom: -15.4rem;
`
const Container = styled.div`
  background-color: ${CuiColors.darkBeige(0.15)};
  width: 100%;
`
const Divider = styled.div`
  height: 8rem;
  width: 100%;
  background-color: ${CuiColors.white()};
`

export const Images = () => {
    return (
        <Container>
            <ImagesContent>
                <Grid container justifyContent="space-between">
                    <Grid item xs={4}>
                        <CuiImage src={allapotfelmeres1.src} alt="Állapotfelmérés gyakorlat 1" imgWidth={{ og: 368 }} imgHeight={{ og: 546 }} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={allapotfelmeres2.src} alt="Állapotfelmérés gyakorlat 2" imgWidth={{ og: 368.29 }} imgHeight={{ og: 281.6 }} margin="0 0 1rem 0" />
                        <CuiImage src={allapotfelmeres3.src} alt="Állapotfelmérés gyakorlat 3" imgWidth={{ og: 368 }} imgHeight={{ og: 389 }} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={allapotfelmeres4.src} alt="Állapotfelmérés gyakorlat 4" imgWidth={{ og: 368 }} imgHeight={{ og: 552 }} />
                    </Grid>
                </Grid>
            </ImagesContent>
            <Divider />
        </Container>
    )
}
