import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles'
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

const useStyles = makeStyles((theme) => ({
  container: {},
}))

const Wrapper = styled('div')((theme) => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const FooterContainer = styled('div')((theme) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3rem',
}))

const FooterCompany = styled('div')((theme) => ({
  display: 'flex',
  alignItems: 'center',
}))

const FooterLogo = styled('div')((theme) => ({}))

const FooterSns = styled('div')((theme) => ({
  display: 'flex',
  gap: '10px',
}))

const FooterText = styled('p')((theme) => ({
  textTransform: 'uppercase',
  opacity: '0.5',
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',
  color: 'white',
}))

export default function LayoutFooter() {
  const router = useRouter()
  const classes = useStyles()
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
      <Grid
        container
        style={{
          backgroundColor: footerBackgroundColor,
          color: footerFontColor,
          padding: '30px 30px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
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
          <Grid item>
            <FooterText>
              <span style={{ marginRight: '5px' }}>ⓒ</span>
              Copyright 2023 Paprikaindustry Inc. All rights reserved.
            </FooterText>
          </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={4}>
            <Image
              src={
                footerBackgroundColor === '#FFF'
                  ? Footer_Light_twitter
                  : Footer_Dark_twitter
              }
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
              style={{ cursor: 'pointer' }}
              alt="company_youtube"
              onClick={() =>
                ClickYoutube('https://www.youtube.com/@FatalBomb.Official')
              }
            />
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
