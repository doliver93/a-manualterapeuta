import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { AmaColors } from "assets/styles/colors"

const MoreInfoContent = styled(Content)`
  padding-bottom: 15.75rem;
`
const ListCollection = styled.ul`
  list-style: none;
`

const List = styled.li`
  display: flex;
  &:before {
    content: "•";
    color: ${AmaColors.brown(0.8)};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 3em;
  }
`
export const MoreInfo = () => {
    return (
        <MoreInfoContent>
            <SubHeading fontSize={1.563} color={AmaColors.brown(0.9)}>
        Mit érdemes magaddal hoznod az első alkalommal
            </SubHeading>
            <ListCollection>
                <List>
                    <Paragraph color={AmaColors.brown(0.8)}>korábbi képalkotó vizsgálatok és leletek (röntgen, MRI, CT)</Paragraph>
                </List>
                <List>
                    <Paragraph color={AmaColors.brown(0.8)}>kényelmes váltó ruha</Paragraph>
                </List>
            </ListCollection>
        </MoreInfoContent>
    )
}
