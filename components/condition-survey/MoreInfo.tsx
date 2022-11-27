import React from "react"
import styled from "styled-components"

import { breakPoint, Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"

const MoreInfoContent = styled(Content)`
  padding-bottom: 25.5rem;
  @media (max-width: ${breakPoint.md.width}px) {
    padding-bottom: 3rem;
  }
`
const ListCollection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${breakPoint.sm.width}px) {
    margin-top: 1rem;
  }
`

const List = styled.li`
  display: flex;
  align-items: center;
  &:before {
    content: "•";
    color: ${CuiColors.brown(0.8)};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 12rem;
    @media (max-width: ${breakPoint.sm.width}px) {
      margin-left: 2rem;
    }
  }
`
export const MoreInfo = () => {
    return (
        <MoreInfoContent>
            <SubHeading color={CuiColors.brown(0.9)}>
        Mit érdemes magaddal hoznod az első alkalommal
            </SubHeading>
            <ListCollection>
                <List>
                    <Paragraph color={CuiColors.brown(0.8)}>korábbi képalkotó vizsgálatok és leletek (röntgen, MRI, CT)</Paragraph>
                </List>
                <List>
                    <Paragraph color={CuiColors.brown(0.8)}>kényelmes váltó ruha</Paragraph>
                </List>
            </ListCollection>
        </MoreInfoContent>
    )
}
