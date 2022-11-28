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
const FooterContent = styled(Content)`
  padding: 4rem 0;
  @media (max-width: ${breakPoint.lg.width}px) {
    padding: ${breakPoint.lg.padding};
  }
  & #right-content {
    position: relative;
    top: -4rem;
    margin-bottom: -4rem;
  }
  @media(max-width: ${breakPoint.md.width}px){
    padding: ${breakPoint.md.padding};
  }
  @media(max-width: ${breakPoint.sm.width}px){
    padding: ${breakPoint.sm.padding};
  }
`
interface FooterParagraphProps {
  marginBottom?: number
}
const FooterParagraph = styled(Paragraph)<FooterParagraphProps>`
  color: ${CuiColors.white(0.8)};
  line-height: 2.8rem;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}rem`};
  @media(max-width: ${breakPoint.sm.width}px), (max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    line-height: 1.8rem;
    margin-bottom: 1.5rem;
  }
  @media(max-width: ${breakPoint.landscape.width}px) and (max-height: ${breakPoint.landscape.height}px) {
    font-size: 0.9rem;
  }
`

const FooterIcons = styled(CuiImage)`
  border-radius: 8px;
  cursor: pointer;
  margin: 0 0 0 1.7rem;
  opacity: 0.8;
  pointer-events: auto;
  &:hover {
    opacity: 1;
  }
  @media(max-width: ${breakPoint.sm.width}px){
    margin: 0 0 0 .7rem;
  }
`
const FrameContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin-top: 2.6rem;
  @media(max-width: ${breakPoint.md.width}px){
    top: 5rem;
    width: 100%;
    & #googlemap {
      width: 100%;
    }
  }
  
`
const FooterHeading = styled(SubHeading)`
  font-size: 2.5rem;
  @media(max-width: ${breakPoint.md.width}px){
    font-size: 2rem;
  }
  @media(max-width: ${breakPoint.sm.width}px){
    font-size: 1.4rem;
  }

`

export const Footer = () => {
    return (
        <FooterContainer id="footer">
            <FooterContent>
                <Grid container alignItems="flex-end">
                    <Grid item md={6} xs={12}>
                        <FooterHeading color={CuiColors.white()} fontSize={{og: 2.5, md: 2, sm: 1.4}} margin={{ md: "0 0 3rem 0", sm: "0 0 1.5rem 0"}}>
              Kapcsolat
                        </FooterHeading>
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
                    <Grid item md={6} xs={12} id="right-content">
                        <FlexRight>
                            <CuiLink href={ExternalLinks.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={instagram.src} alt="logo1" imgWidth={{og: 40, sm: 25}} margin="0 0 0 1.6rem" />
                            </CuiLink>
                            <CuiLink href={ExternalLinks.FACEBOOK} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={facebook.src} alt="logo2" imgWidth={{og: 40, sm: 25}} margin="0 0 0 1.6rem" />
                            </CuiLink>
                            <CuiLink href={ExternalLinks.TIKTOK} target="_blank" rel="noopener noreferrer">
                                <FooterIcons src={tiktok.src} alt="logo3" imgWidth={{og: 40, sm: 25}} margin="0 0 0 1.6rem" />
                            </CuiLink>
                        </FlexRight>
                        <FlexRight>
                            <FrameContainer>
                                <iframe id="googlemap"
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
