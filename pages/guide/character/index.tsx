import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import { useRouter } from 'next/router'

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
  height: '20rem',
  backgroundImage: `url(${'/guideBg/characters_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
})

const GuideText = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#808080',
  transform: 'translate(0,50%)',
})

const GuideContentsTitle = styled('h3')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
  color: '#FFF',
  transform: 'translate(0,25%)',
})

const GuideContainer = styled('div')({
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

const ChractersName = ['Olie', 'Idol', 'nurse', 'Health', 'Alien']

export default function Characters() {
  const router = useRouter()
  return (
    <GuideWrapper>
      <GuideHeader>
        <GuideText>GUIDE BOOK</GuideText>
        <GuideContentsTitle>Character</GuideContentsTitle>
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
          {Request_CharacterInfo.map(({ name, id }) => (
            <div key={id} onClick={() => router.push(`/guide/character/${id}`)}>
              {name}
            </div>
          ))}
        </Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
