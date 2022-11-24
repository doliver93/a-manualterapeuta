import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { CuiColors } from "assets/styles/colors"

import rolam1 from "images/about/rolam-gyakorlat-1.png"
import rolam2 from "images/about/rolam-gyakorlat-2.png"
import rolam3 from "images/about/rolam-gyakorlat-3.png"
import rolam4 from "images/about/rolam-gyakorlat-4.png"
import { Grid } from "@mui/material"
import { CuiImage } from "assets/styles/styled-components/images"

const ImagesContent = styled(Content)`
  position: relative;
  top: -56rem;
  margin-bottom: -48rem;
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
                        <CuiImage src={rolam1.src} alt="Állapotfelmérés gyakorlat 1" width={367} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={rolam2.src} alt="Állapotfelmérés gyakorlat 2" width={364} margin="0 0 1rem 0" />
                        <CuiImage src={rolam3.src} alt="Állapotfelmérés gyakorlat 3" width={364} />
                    </Grid>
                    <Grid item xs={4}>
                        <CuiImage src={rolam4.src} alt="Állapotfelmérés gyakorlat 4" width={364} />
                    </Grid>
                </Grid>
            </ImagesContent>
        </Container>
    )
}
