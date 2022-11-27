import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { CuiColors } from "assets/styles/colors"

import allapotfelmeres1 from "images/conditions-survey/allapotfelmeres-gyakorlat-1.webp"
import allapotfelmeres2 from "images/conditions-survey/allapotfelmeres-gyakorlat-2.webp"
import allapotfelmeres3 from "images/conditions-survey/allapotfelmeres-gyakorlat-3.webp"
import allapotfelmeres4 from "images/conditions-survey/allapotfelmeres-gyakorlat-4.webp"
import { Grid } from "@mui/material"
import { CuiImage } from "assets/styles/styled-components/images"

const ImagesContent = styled(Content)`
  position: relative;
  padding-top: 2rem; 
  margin-bottom: -8rem; 
`
const Container = styled.div`
  background-color: ${CuiColors.darkBeige(0.15)};
  width: 100%;
`
const Divider = styled.div`
  height: 10rem;
  width: 100%;
  background-color: ${CuiColors.white()};
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
                    <Grid container flexDirection="column" alignItems="flex-end">
                        <Grid item>
                            <CuiImage src={allapotfelmeres1.src} alt="Állapotfelmérés gyakorlat 1" imgWidth={{ og: 368, md: 310, sm: 155 }} imgHeight={{ og: 546 }} margin={"0 1rem 0 0"}/>
                        </Grid>
                        <Grid item>
                            <CuiImage src={allapotfelmeres3.src} alt="Állapotfelmérés gyakorlat 3" imgWidth={{ og: 368, md: 310, sm: 155 }} imgHeight={{ og: 389 }} margin={"0 1rem 0 0"}/>
                        </Grid>
                    </Grid>
                    <Grid container flexDirection="column">
                        <Grid item>
                            <CuiImage src={allapotfelmeres2.src} alt="Állapotfelmérés gyakorlat 2" imgWidth={{ og: 368.29, md: 310, sm: 155 }} imgHeight={{ og: 281.6 }} margin={"0 0 0 1rem"} />
                        </Grid>
                        <Grid item>
                            <CuiImage src={allapotfelmeres4.src} alt="Állapotfelmérés gyakorlat 4" imgWidth={{ og: 368.29, md: 310, sm: 155 }} imgHeight={{ og: 552 }} margin={"0 0 0 1rem"} />
                        </Grid>
                    </Grid>
                </GridContainer>
            </ImagesContent>
            <Divider />
        </Container>
    )
}
