import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import { useRouter } from 'next/router'
import nurseImg from 'src/assets/image/guide/character/character_seclect.png'
import { Grid } from '@mui/material'

const GuideWrapper = styled('section')({
  marginTop: '5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
})

const GuideHeader = styled('div')({
  width: '100%',
  height: '28.5rem',
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
  display: 'flex',
  marginTop: '56px',

  '.responsive-image': {
    width: '100%',
    height: 'auto',
  },
})

const GuideLeft = styled('div')({
  // width: '22.5rem',
  fontFamily: 'Bebas',
  diplay: 'flex',
  flexDirection: 'column',
  // paddingLeft: '4.375rem',
  transform: 'translateX(30%)',
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

const ChracterCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

const CharacterName = styled('p')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '48px',

  color: '#323232',
})

const GuideLEft = ['CONTROL', 'CHARACTER']

const ChractersName = ['Olie', 'Idol', 'nurse', 'Health', 'Alien']
const ChractersImg = [
  {
    name: 'Olie',
    src: nurseImg,
  },
  {
    name: 'Idol',
    src: nurseImg,
  },
  {
    name: 'Nurse',
    src: nurseImg,
  },
  {
    name: 'Health',
    src: nurseImg,
  },
  {
    name: 'Alien',
    src: nurseImg,
  },
]

export default function Characters() {
  const router = useRouter()
  return (
    <GuideWrapper>
      {/* <GuideHeader>
        <GuideText>GUIDE BOOK</GuideText>
        <GuideContentsTitle>Character</GuideContentsTitle>
      </GuideHeader> */}
      <GuideContainer>
        {/* <GuideLeft>
          <GuideLeftTitle>BASIC GUIDE</GuideLeftTitle>
          {GuideLEft.map((value, index) => (
            <GuideLeftContents key={index}>{value}</GuideLeftContents>
          ))}

          <LeftModeWrapper>
            <ModeTitle>MODE GUIDE</ModeTitle>
            <ModeGuideContents>MODE GUIDE</ModeGuideContents>
          </LeftModeWrapper>
        </GuideLeft> */}
        <Container maxWidth={'lg'}>
          <Grid container spacing={5}>
            {Request_CharacterInfo.map(({ name, id }) => {
              const characterImg = ChractersImg.find(
                (img) => img.name === name
              )?.src
              if (!characterImg) {
                return null
              }
              return (
                <Grid
                  item
                  xs={5}
                  md={3}
                  sm={4}
                  className="Character_card"
                  key={id}
                  onClick={() => router.push(`/guide/character/${id}`)}
                >
                  <ChracterCard>
                    <Image
                      src={characterImg}
                      alt="select_character"
                      width={277}
                      height={371}
                    />
                    <CharacterName> {name}</CharacterName>
                  </ChracterCard>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
