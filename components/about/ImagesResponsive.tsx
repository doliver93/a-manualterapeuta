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
  top: -20rem;
  margin-bottom: -15rem;
`
const Container = styled.div`
  background-color: ${CuiColors.white()};
  width: 100%;
`

const GridContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`

export const ImagesResponsive = () => {
    return (
        <Container>
            <ImagesContent>
                <GridContainer>
                    <Grid container flexDirection="column" alignItems="flex-end" justifyContent="flex-start">
                        <Grid item>
                            <CuiImage src={rolam1.src} alt="Állapotfelmérés gyakorlat 1" imgWidth={{ og: 367, md: 310, sm: 155 }} imgHeight={{ og: 571 }} margin={"0 1rem 0 0"} />
                        </Grid>
                        <Grid item>
                            <CuiImage src={rolam3.src} alt="Állapotfelmérés gyakorlat 3" imgWidth={{ og: 364, md: 310, sm: 155 }} imgHeight={{ og: 263 }} margin={"0 1rem 0 0"} />
                        </Grid>
                    </Grid>
                    <Grid container flexDirection="column">
                        <Grid item>
                            <CuiImage src={rolam2.src} alt="Állapotfelmérés gyakorlat 2" imgWidth={{ og: 364, md: 310, sm: 155 }} imgHeight={{ og: 243 }} margin={"0 1rem 0 0"} />
                        </Grid>
                        <Grid item>
                            <CuiImage src={rolam4.src} alt="Állapotfelmérés gyakorlat 4" imgWidth={{ og: 364, md: 310, sm: 155 }} imgHeight={{ og: 571 }} margin={"0 1rem 0 0"} />
                        </Grid>
                    </Grid>
                </GridContainer>
            </ImagesContent>
        </Container>
    )
}
