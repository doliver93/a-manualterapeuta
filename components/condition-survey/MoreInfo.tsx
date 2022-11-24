import React from "react"
import styled from "styled-components"

import { Content } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"

const MoreInfoContent = styled(Content)`
  padding-bottom: 25.5rem;
`
const ListCollection = styled.ul`
  list-style: none;
`

const List = styled.li`
  display: flex;
  &:before {
    content: "•";
    color: ${CuiColors.brown(0.8)};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 4.8em;
  }
`
export const MoreInfo = () => {
    return (
        <MoreInfoContent>
            <SubHeading fontSize={2.5} color={CuiColors.brown(0.9)}>
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
