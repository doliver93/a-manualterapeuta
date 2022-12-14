import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { Border, breakPoint, Content } from "assets/styles/shared"
import { CuiListCollection, CuiListItem, CuiListItemText, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${CuiColors.grey(0.1)};
  padding: 3.2rem 0rem;
`
const BoxesContent = styled(Content)`
  padding: 3.2rem 0rem;
  top: -20rem;
  margin-bottom: -20rem;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: 3.2rem ${breakPoint.lg.padding};
  }
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    width: 100%;
    padding-left: ${breakPoint.sm.padding};
    padding-right: ${breakPoint.sm.padding};
    margin-bottom: -24rem;
  }
`
const Box = styled.div`
  width: 26.7rem;
  min-height: 35.2rem;
  box-shadow: -4px 4px 35px rgba(90, 68, 53, 0.1);
  background-color: ${CuiColors.white()};
  margin: auto;
  padding: 0 1.5rem;
  width: 100%;
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px){
    min-height: 20rem;
  }
  @media (max-width: ${breakPoint.sm.width}px) {
    min-height: auto;
    padding: 1.5rem;
    width: 100%;
  }
`
const BoxesBorder = styled(Border)`
  border: 5px solid transparent;
  border-color: ${CuiColors.brown(0.1)} !important;
  transform: translate(0.8rem, 0.8rem) !important;
  width: calc(100% + 1rem);
  & .box {
    transform: translate(-1.3rem, -1.3rem) !important;
  }
`

const BoxHeading = styled(SubHeading)`
  font-size: 2.5rem;
  color: ${CuiColors.brown(0.9)};
  padding: 2rem 0rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 1.4rem;
    padding: 0 0 1rem 0;
  }
`

export const Boxes = () => {
    return (
        <Container>
            <BoxesContent>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Der??kt??ji f??jdalmak</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>gerincs??rv</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>akut der??kf??j??s /???becs??p??d??s???/</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>id??lt der??kf??j??s /hossz?? ideje fenn??ll??/</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>als?? v??gtagba kisug??rz?? panaszok</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>instabilit??s</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Nyaki panaszok</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>gerincs??rv</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>nyaki f??jdalmak</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>fejf??j??s</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>f??lz??g??s</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>fels?? v??gtagba kisug??rz?? panaszok</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Tart??sjav??t??s</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>gerincferd??l??s</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>Scheuermann betegs??g</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>mellkasdeformit??sok</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>??ltal??nos helytelen testtart??s</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>V??gtag f??jdalmak</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>v??ll</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>k??ny??k</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>k??z</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>cs??p??</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>t??rd</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>boka</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>l??b</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>Sports??r??l??sek</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>szalagszakad??s</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>r??ndul??s</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>ficam</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>t??r??sek</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="box">
                            <BoxHeading>M??t??tek ut??n</BoxHeading>
                            <CuiListCollection>
                                <CuiListItem>
                                    <CuiListItemText>t??r??sek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>gerincm??t??tek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>hegek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>v??gtagi m??t??tek</CuiListItemText>
                                </CuiListItem>
                                <CuiListItem>
                                    <CuiListItemText>egy??b m??t??tek</CuiListItemText>
                                </CuiListItem>
                            </CuiListCollection>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <BoxesBorder>
                            <Box className="box">
                                <BoxHeading>Megel??z??s</BoxHeading>
                                <CuiListCollection>
                                    <CuiListItem>
                                        <CuiListItemText>m??t??tekre val?? felk??sz??t??s</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>c??lzott ter??pia a s??r??l??sek megel??z??s??re</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>??ltal??nos kondicion??l??s</CuiListItemText>
                                    </CuiListItem>
                                    <CuiListItem>
                                        <CuiListItemText>??ltal??nos kivizsg??l??s</CuiListItemText>
                                    </CuiListItem>
                                </CuiListCollection>
                            </Box>
                        </BoxesBorder>
                    </Grid>
                </Grid>
            </BoxesContent>
        </Container>
    )
}
