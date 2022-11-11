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