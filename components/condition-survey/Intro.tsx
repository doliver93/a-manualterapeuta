import React from "react"
import styled from "styled-components"

import background from "images/conditions-survey/allapotfelmeres-intro.png"
import { Navigation } from "components/navigation/Navigation"
import { Container, Content, FlexLeftColumn, IntroContainer } from "assets/styles/shared"
import { Heading, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"
import logo from "images/layout/logo-white.svg"
import { ComponentType } from "types/ComponentType"


export const Intro = ({viewport}: ComponentType) => {
    return (
        <Container backgroundImage={background.src}>
            <Content>
                <Navigation
                    logo={logo}
                    textColor={CuiColors.white(0.8)}
                    textHover={CuiColors.white(1)}
                    buttonBackgroundColor={CuiColors.white(0.8)}
                    buttonBackgroundColorHover={CuiColors.white(1)}
                    buttonTextColor={CuiColors.brown(0.8)}
                    buttonTextColorHover={CuiColors.brown(1)}
                />
                <IntroContainer>
                    <Heading color={CuiColors.white()} margin={{sm: "0 0 2rem 0"}}>
                    Állapotfelmérés
                    </Heading>
                    <SubHeading color={CuiColors.white()} fontSize={{md: 2.5, sm: 1.4}}>
                        {viewport === "mobile"
                            ? <>Maximális figyelem és empátia,<br />amely csak rád irányul…</>
                            : <>Maximális figyelem és empátia, amely csak rád irányul…</>
                        }
                    
                    </SubHeading>
                </IntroContainer>
            </Content>
        </Container>
    )
}
