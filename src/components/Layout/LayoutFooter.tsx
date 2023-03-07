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

const useStyles = makeStyles((theme) => ({
  container: {},
}))

const Wrapper = styled('div')((theme) => ({
  position: 'absolute',
  width: '100%',
  height: '125px',
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
}))

export default function LayoutFooter() {
  const router = useRouter()
  const classes = useStyles()
  const footerBackgroundColor = router.pathname === '/signup' ? '#FFF' : '#000'
  const footerFontColor = router.pathname === 'signup' ? '#FFF' : '#000'

  return (
    <Wrapper>
      <FooterContainer
        style={{
          backgroundColor: footerBackgroundColor,
          color: footerFontColor,
        }}
      >
        <FooterCompany>
          <FooterLogo>
            <Image
              src={
                footerBackgroundColor === '#FFF'
                  ? LightCompanyLogo
                  : DarkCompanyLogo
              }
              alt="company_logo"
            />
          </FooterLogo>
          <FooterText>
            <span style={{ marginRight: '5px' }}>ⓒ</span>Copyright 2023
            Paprikaindustry Inc. All rights reserved.
          </FooterText>
        </FooterCompany>
        <FooterSns>
          <Image
            src={
              footerBackgroundColor === '#FFF'
                ? Footer_Light_twitter
                : Footer_Dark_twitter
            }
            alt="company_twitter"
          />
          <Image
            src={
              footerBackgroundColor === '#FFF'
                ? Footer_Light_insta
                : Footer_Dark_insta
            }
            alt="company_insta"
          />
          <Image
            src={
              footerBackgroundColor === '#FFF'
                ? Footer_Light_youtube
                : Footer_Dark_youtube
            }
            alt="company_youtube"
          />
        </FooterSns>
      </FooterContainer>
    </Wrapper>
  )
}
