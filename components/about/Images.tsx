import React from "react"
import styled from "styled-components"

import { breakPoint, Content } from "assets/styles/shared"
import { CuiColors } from "assets/styles/colors"

import rolam1 from "images/about/rolam-gyakorlat-1.webp"
import rolam2 from "images/about/rolam-gyakorlat-2.webp"
import rolam3 from "images/about/rolam-gyakorlat-3.webp"
import rolam4 from "images/about/rolam-gyakorlat-4.webp"
import { Grid } from "@mui/material"
import { CuiImage } from "assets/styles/styled-components/images"

const ImagesContent = styled(Content)`
  position: relative;
  top: -40rem;
  margin-bottom: -30rem;
  @media (max-width: ${breakPoint.sm.width}px) {
    top: 0;
    margin: 0;
  }
`
const Container = styled.div`
  background-color: ${CuiColors.white()};
  width: 100%;
`

export const Images = () => {
    return (
        <Container>
            <ImagesContent>
                <Grid container justifyContent="space-between">
                    <Grid item xs={4}>
                        <CuiImage src={rolam1.src} alt="Állapotfelmérés gyakorlat 1" imgWidth={{ og: 367 }} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={rolam2.src} alt="Állapotfelmérés gyakorlat 2" imgWidth={{ og: 364 }} margin="0 0 1rem 0" />
                        <CuiImage src={rolam3.src} alt="Állapotfelmérés gyakorlat 3" imgWidth={{ og: 364 }} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={rolam4.src} alt="Állapotfelmérés gyakorlat 4" imgWidth={{ og: 364 }} />
                    </Grid>
                </Grid>
            </ImagesContent>
        </Container>
    )
}
