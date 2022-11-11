import { AmaColors } from "assets/styles/colors"
import { PrimaryButton } from "assets/styles/styled-components/buttons"
import { Heading } from "assets/styles/styled-components/typography"
import { Intro } from "components/mainpage/Intro"
import React from "react"
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  & .title {
    background: -webkit-linear-gradient(360deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export default function Home() {
    return (
        <>
            <Intro />
            {/* <Container>
                <div className="title">hamarosan...</div>
                <PrimaryButton>bejelentkezés állapotfelmérésre</PrimaryButton>
                <Heading fontSize={2.8125} color={AmaColors.brown(0.8)}>
          Papp Alexandra vagyok,
                </Heading>
            </Container> */}
        </>
    )
}
