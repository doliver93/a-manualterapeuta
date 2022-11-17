import React from "react"
import { AmaColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
import styled from "styled-components"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"

const Container = styled.div`
  background-color: ${AmaColors.white()};
  padding: 3.375rem 0 11.5rem 0;
  text-align: center;
  width: 100%;
`

export const Title = () => {
    return (
        <Container>
            <Content>
                <Heading fontSize={2.813} color={AmaColors.brown(0.9)} margin="0 0 1.875rem 0">
          Ilyen panaszokkal fordulhatsz hozzám
                </Heading>
                <Paragraph fontSize={1.5} color={AmaColors.brown(0.8)}>
          Fő területem a derék-, nyak- és vállfájdalmak manuálterápiás- lágyrész kezelései, valamint:
                </Paragraph>
            </Content>
        </Container>
    )
}
