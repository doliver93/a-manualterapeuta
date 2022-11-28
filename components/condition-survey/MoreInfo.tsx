import React from "react"
import styled from "styled-components"

import { breakPoint, Content } from "assets/styles/shared"
import { CuiListCollection, CuiListItem, CuiListItemText, SubHeading } from "assets/styles/styled-components/typography"
import { CuiColors } from "assets/styles/colors"

const MoreInfoContent = styled(Content)`
  padding-bottom: 25.5rem;
  @media (max-width: ${breakPoint.md.width}px) {
    padding-bottom: 3rem;
  }
`

export const MoreInfo = () => {
    return (
        <MoreInfoContent>
            <SubHeading color={CuiColors.brown(0.9)}>
        Mit érdemes magaddal hoznod az első alkalommal
            </SubHeading>
            <CuiListCollection>
                <CuiListItem>
                    <CuiListItemText color={CuiColors.brown(0.8)}>korábbi képalkotó vizsgálatok és leletek (röntgen, MRI, CT)</CuiListItemText>
                </CuiListItem>
                <CuiListItem>
                    <CuiListItemText color={CuiColors.brown(0.8)}>kényelmes váltó ruha</CuiListItemText>
                </CuiListItem>
            </CuiListCollection>
        </MoreInfoContent>
    )
}
