import React from "react"
import Link from "next/link"
import styled from "styled-components"

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`
interface StyledLinkProps {
  href: string
  text: string
}
export const StyledLink = ({ href, text }: StyledLinkProps) => {
    return (
        <Link href={href} target="_blank">
            <StyledA>{text}</StyledA>
        </Link>
    )
}

export const FlexCenter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const FlexRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const FlexCenterColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FlexLeftColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Content = styled.div`
  height: 100%;
  margin: auto;
  position: relative;
  max-width: 72.5rem;
`
