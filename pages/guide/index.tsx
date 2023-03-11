import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'

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

const GuideText = styled('h5')({
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

const GuideContainer = styled('div')({})

const GuideLeft = styled('div')({
  diplay: 'flex',
  flexDirection: 'column',
  marginTop: '56px',
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
          <h5>BASIC GUIDE</h5>
          {GuideLEft.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </GuideLeft>
        <Container maxWidth={'lg'}></Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
