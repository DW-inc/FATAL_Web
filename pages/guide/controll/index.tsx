import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'

const GuideWrapper = styled('section')({
  marginTop: '5rem',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
})

const GuideHeader = styled('div')({
  width: '100%',
  height: '28.5rem',
  backgroundImage: `url(${'guideBg/guide_header_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const GuideText = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#808080',
})

const GuideContentsTitle = styled('h3')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
  color: '#FFF',
})

const GuideContainer = styled('div')({
  width: '100%',
  marginTop: '56px',
})

const GuideLeft = styled('div')({
  position: 'absolute',
  fontFamily: 'Bebas',
  diplay: 'flex',
  flexDirection: 'column',
  left: '4.375rem',
})

const GuideLeftTitle = styled('h5')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const LeftModeWrapper = styled('div')({
  marginTop: '79px',
})

const GuideLeftContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const ModeTitle = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const ModeGuideContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const GuideLEft = ['CONTROL', 'CHARACTER']

export default function Guide() {
  return (
    <GuideWrapper>
      <GuideHeader>
        <GuideText>GUIDE BOOK</GuideText>
        <GuideContentsTitle>Control Guide</GuideContentsTitle>
      </GuideHeader>
      <GuideContainer>
        <GuideLeft>
          <GuideLeftTitle>BASIC GUIDE</GuideLeftTitle>
          {GuideLEft.map((value, index) => (
            <GuideLeftContents key={index}>{value}</GuideLeftContents>
          ))}

          <LeftModeWrapper>
            <ModeTitle>MODE GUIDE</ModeTitle>
            <ModeGuideContents>MODE GUIDE</ModeGuideContents>
          </LeftModeWrapper>
        </GuideLeft>
        <Container maxWidth={'lg'}>
          <Image src={Guide_ControllerImg} alt="controller_img" />
        </Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
