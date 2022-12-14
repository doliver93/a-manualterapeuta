import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { breakPoint, FlexCenter, FlexCenterColumn } from "assets/styles/shared"
import { CuiColors } from "assets/styles/colors"
import { CuiImage } from "assets/styles/styled-components/images"

import logo from "images/layout/logo-white.svg"

const Container = styled(FlexCenter)`
  width: 100%;
  height: 100vh;
  font-family: Poppins500;
  text-transform: uppercase;
  font-size: 0.9rem;
  background-color: black;
  color: white;
  letter-spacing: 0.16rem;
  @media (max-width: ${breakPoint.sm.width}px) {
    font-size: 0.7rem;
  }
`
const Divider = styled.div`
  background-color: white;
  width: 4px;
  height: 25px;
  margin: 0 1.6rem;
`
const StyledLink = styled(Link)`
  font-size: 1.1rem;
  color: ${CuiColors.lightBeige()};
`
const FourOhFour = () => {
    return (
        <Container>
            <FlexCenterColumn>
                <CuiImage src={logo.src} imgWidth={{og: 50, sm: 35}} alt="A manualterapeuta" />
                <FlexCenter style={{ margin: "1rem 0" }}>
                    <h1>404</h1>
                    <Divider />
                    <h1>az oldal nem található</h1>
                </FlexCenter>
                <StyledLink href="/">visszatérés a főoldalra</StyledLink>
            </FlexCenterColumn>
        </Container>
    )
}

export default FourOhFour
