import React from "react"
import { CuiColors } from "assets/styles/colors"
import { Content } from "assets/styles/shared"
import styled from "styled-components"
import { Heading, Paragraph } from "assets/styles/styled-components/typography"

const Container = styled.div`
  background-color: ${CuiColors.white()};
  padding: 3.375rem 0 11.5rem 0;
  text-align: center;
  width: 100%;
`

const Header = styled(Heading)`
  font-size: 4.5rem;
`

export const Title = () => {
    return (
        <Container>
            <Content>
                <Header color={CuiColors.brown(0.9)} margin={{ md: "0 0 1.875rem 0" }} textAlign="center">
          Ilyen panaszokkal fordulhatsz hozzám
                </Header>
                <Paragraph fontSize={{ md: 2.4 }} color={CuiColors.brown(0.8)} textAlign="center">
          Fő területem a derék-, nyak- és vállfájdalmak manuálterápiás- lágyrész kezelései, valamint:
                </Paragraph>
            </Content>
        </Container>
    )
}
