import styled from "styled-components"

interface HeadingProps {
    color?: string
    fontSize?: number
}

export const Heading = styled.div<HeadingProps>`
    font-family: PlayfairDisplayExtraBold;
    color: ${({ color }) => (color || "black")};
    font-size: ${({ fontSize }) => (`${fontSize}rem` || "1rem")};
`