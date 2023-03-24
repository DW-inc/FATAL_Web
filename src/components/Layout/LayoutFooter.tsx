import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer_Light_insta from './../../assets/icon/Footer_Light_insta.png'
import Footer_Light_youtube from './../../assets/icon/Footer_Light_youtube.png'
import Footer_Light_twitter from './../../assets/icon/Footer_Light_twitter.png'
import Footer_Dark_insta from './../../assets/icon/Footer_Dark_insta.png'
import Footer_Dark_youtube from './../../assets/icon/Footer_Dark_youtube.png'
import Footer_Dark_twitter from './../../assets/icon/Footer_Dark_twitter.png'
import Image from 'next/image'
import LightCompanyLogo from '../../assets/icon/FooterLight.png'
import DarkCompanyLogo from '../../assets/icon/FooterDark.png'
import { useRouter } from 'next/router'
import { Stack } from '@mui/system'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledGrid = styled(Grid, {
  shouldForwardProp: (prop) =>
    prop !== 'footerBackgroundColor' && prop !== 'footerFontColor',
})<{
  footerBackgroundColor: string
  footerFontColor: string
}>`
  background-color: ${(props) => props.footerBackgroundColor};
  color: ${(props) => props.footerFontColor};
  padding: 15px 15px;
  align-items: center;
  justify-content: space-between;

  // Media query 예시 (화면 크기에 따라 적용할 스타일 변경)
  @media (max-width: 960px) {
    padding: 20px 20px;
  }

  @media (max-width: 600px) {
    padding: 10px 10px;
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const SnsGrid = styled(Grid)`
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

const FooterLogo = styled.div`
  @media (max-width: 480px) {
  }
`

const FooterSns = styled.div`
  display: flex;
  gap: 10px;
`

const FooterText = styled.p`
  text-transform: uppercase;
  opacity: 0.5;
  font-family: Bebas;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: white;
`

export default function LayoutFooter() {
  const router = useRouter()

  const footerBackgroundColor = router.pathname === '/signup' ? '#FFF' : '#000'
  const footerFontColor = router.pathname === 'signup' ? '#FFF' : '#000'

  const ClickPPrk = (site: string) => {
    window.open(site)
  }

  const ClickTwitter = (site: string) => {
    window.open(site)
  }

  const ClickYoutube = (site: string) => {
    window.open(site)
  }

  const ClickInsta = (site: string) => {
    window.open(site)
  }

  return (
    <Wrapper>
      <StyledGrid
        container
        footerBackgroundColor={footerBackgroundColor}
        footerFontColor={footerFontColor}
      >
        <Grid item>
          <Grid item>
            <FooterLogo>
              <Image
                src={
                  footerBackgroundColor === '#FFF'
                    ? LightCompanyLogo
                    : DarkCompanyLogo
                }
                alt="company_logo"
                onClick={() => ClickPPrk('https://pprk.xyz/')}
                style={{ cursor: 'pointer' }}
              />
            </FooterLogo>
          </Grid>
        </Grid>

        <SnsGrid item>
          <Stack direction="row" spacing={2}>
            <Image
              src={
                footerBackgroundColor === '#FFF'
                  ? Footer_Light_twitter
                  : Footer_Dark_twitter
              }
              width={32}
              height={32}
              style={{ cursor: 'pointer' }}
              alt="company_twitter"
              onClick={() => ClickTwitter('https://twitter.com/Fatalbomb')}
            />
            <Image
              src={
                footerBackgroundColor === '#FFF'
                  ? Footer_Light_insta
                  : Footer_Dark_insta
              }
              width={32}
              height={32}
              style={{ cursor: 'pointer' }}
              alt="company_insta"
              onClick={() =>
                ClickInsta('https://www.instagram.com/fatalbomb.official/')
              }
            />
            <Image
              src={
                footerBackgroundColor === '#FFF'
                  ? Footer_Light_youtube
                  : Footer_Dark_youtube
              }
              width={32}
              height={32}
              style={{ cursor: 'pointer' }}
              alt="company_youtube"
              onClick={() =>
                ClickYoutube('https://www.youtube.com/@FatalBomb.Official')
              }
            />
          </Stack>
        </SnsGrid>
      </StyledGrid>
    </Wrapper>
  )
}
