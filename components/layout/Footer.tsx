import { Grid } from "@mui/material"
import { CuiColors } from "assets/styles/colors"
import { breakPoint, Content, CuiLink, FlexRight } from "assets/styles/shared"
import { Paragraph, SubHeading } from "assets/styles/styled-components/typography"
import React from "react"
import styled from "styled-components"

import instagram from "images/layout/footer/instagram.svg"
import facebook from "images/layout/footer/facebook.svg"
import tiktok from "images/layout/footer/tiktok.svg"
import { ExternalLinks } from "enums/ExternalLinks"
import { CuiImage } from "assets/styles/styled-components/images"

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${CuiColors.lightBeige()};
`
interface FooterParagraphProps {
  marginBottom?: number
}
const FooterParagraph = styled(Paragraph)<FooterParagraphProps>`
  color: ${CuiColors.white(0.8)};
  line-height: 2.8rem;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}rem`};
`
const FooterContent = styled(Content)`
  padding: 4rem 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: ${breakPoint.lg.padding};
  }
`
const FooterIcons = styled(CuiImage)`
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0 0 1.7rem;
  opacity: 0.3;
  pointer-events: auto;
  // width: 25px;
  &:hover {
    opacity: 0.6;
  }
`
const FrameContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin-top: 2.6rem;
`

export const Footer = () => {
    return (
        <FooterContainer id="footer">
            <FooterContent>
                <Grid container alignItems="flex-end">
                    <Grid item md={6} xs={12}>
                        <SubHeading color={CuiColors.white()}>
              Kapcsolat
                        </SubHeading>
                        <FooterParagraph marginBottom={3}>
              Fordulj hozzám bizalommal.
                            <br />
              Bármilyen kérdéssel kapcsolatban segítségedre állok.
                        </FooterParagraph>
                        <FooterParagraph marginBottom={3}>
              Email: info@a-manualterapeuta.hu
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
                    <Grid item md={6} xs={12}>
                        <FlexRight>
                            <CuiLink href={ExternalLinks.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={instagram.src} alt="logo1" margin="0 0 0 1.6rem" />
                            </CuiLink>
                            <CuiLink href={ExternalLinks.FACEBOOK} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={facebook.src} alt="logo2" margin="0 0 0 1.6rem" />
                            </CuiLink>
                            <CuiLink href={ExternalLinks.TIKTOK} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={tiktok.src} alt="logo3" margin="0 0 0 1.6rem" />
                            </CuiLink>
                        </FlexRight>
                        <FlexRight>
                            <FrameContainer>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.9419128158427!2d19.193334622718787!3d47.608948599580515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d0372bf5776d%3A0x1d8dc2399c038ecf!2sLevendula%20Gy%C3%B3gyk%C3%B6zpont!5e0!3m2!1shu!2shu!4v1668467610390!5m2!1shu!2shu"
                                    width="460"
                                    height="220"
                                    style={{ border: "0" }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </FrameContainer>
                        </FlexRight>
                    </Grid>
                </Grid>
            </FooterContent>
        </FooterContainer>
    )
}
