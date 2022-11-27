import React from "react"
import { CuiColors } from "assets/styles/colors"
import { breakPoint, Content, FlexCenter } from "assets/styles/shared"
import styled from "styled-components"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"

const Container = styled(FlexCenter)`
  background-color: ${CuiColors.white()};
  padding: 3.375rem 0 11.5rem 0;
  text-align: center;
  width: 100%;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 1.5rem;
    padding: 2rem 0 5.5rem 0;
  }
`
const TitleParagraph = styled.div`
  font-family: Poppins600;
  color: ${CuiColors.brown(0.8)};
  text-align: justify;
  font-size: 2.4rem;
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 1.5rem;
  }
`
export const Title = () => {
    return (
        <Container>
            <Content>
                <Heading color={CuiColors.brown(0.9)} margin={{ md: "0 0 1.875rem 0" }} textAlign="center">
          Ilyen panaszokkal fordulhatsz hozzám
                </Heading>
                <TitleParagraph>
          Fő területem a derék-, nyak- és vállfájdalmak manuálterápiás- lágyrész kezelései, valamint:
                </TitleParagraph>
            </Content>
        </Container>
    )
}
