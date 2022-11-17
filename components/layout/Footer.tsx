import { Grid } from "@mui/material"
import { AmaColors } from "assets/styles/colors"
import { Content, FlexRight } from "assets/styles/shared"
import { Img } from "assets/styles/styled-components/images"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

import instagram from "images/layout/footer/instagram.svg"
import facebook from "images/layout/footer/facebook.svg"
import tiktok from "images/layout/footer/tiktok.svg"
import Link from "next/link"
import { ExternalLinks } from "enums/ExternalLinks"

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${AmaColors.lightBeige()};
`
interface FooterParagraphProps {
  marginBottom?: number
}
const FooterParagraph = styled(Paragraph)<FooterParagraphProps>`
  color: ${AmaColors.white(0.8)};
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}rem`};
`
const FooterContent = styled(Content)`
  padding: 2.5rem 0;
`
const FooterIcons = styled(Img)`
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0 0 1rem;
  opacity: 0.4;
  pointer-events: auto;
  &:hover {
    opacity: 1;
  }
`
const FrameContainer = styled.div`
  margin-top: 1.625rem;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <SubHeading fontSize={1.563} color={AmaColors.white()}>
              Kapcsolat
                        </SubHeading>
                        <FooterParagraph marginBottom={1.875}>
              Fordulj hozzám bizalommal.
                            <br />
              Bármilyen kérdéssel kapcsolatban segítségedre állok.
                        </FooterParagraph>
                        <FooterParagraph marginBottom={1.875}>
              Email: alexandragyogytorna@gmail.com
                            <br />
              Telefon: +36307888280
                            <br />
              Cím: 2151 Fót, Kossuth Lajos utca 25. Levendula Gyógyközpont
                        </FooterParagraph>
                        <FooterParagraph>
              Hétfő: 15:00-19:00
                            <br />
              Szerda: 15:00-19:00
                            <br />
              Csütörtök: 15:00-19:00
                            <br />
                        </FooterParagraph>
                    </Grid>
                    <Grid item xs={6}>
                        <FlexRight>
                            <Link href={ExternalLinks.INSTAGRAM}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <FooterIcons src={instagram.src} alt="logo1" width={2.5} height={2.5} />
                                </a>
                            </Link>
                            <Link href={ExternalLinks.FACEBOOK}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <FooterIcons src={facebook.src} alt="logo2" width={2.5} height={2.5} />
                                </a>
                            </Link>
                            <Link href={ExternalLinks.TIKTOK}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <FooterIcons src={tiktok.src} alt="logo3" width={2.5} height={2.5} />
                                </a>
                            </Link>
                        </FlexRight>
                        <FlexRight>
                            <FrameContainer>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.9419128158427!2d19.193334622718787!3d47.608948599580515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d0372bf5776d%3A0x1d8dc2399c038ecf!2sLevendula%20Gy%C3%B3gyk%C3%B6zpont!5e0!3m2!1shu!2shu!4v1668467610390!5m2!1shu!2shu" width="460" height="220" style={{border: "0"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </FrameContainer>
                        </FlexRight>
                    </Grid>
                </Grid>
            </FooterContent>
        </FooterContainer>
    )
}
