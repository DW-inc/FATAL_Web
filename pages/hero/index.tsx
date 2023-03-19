import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import { useRouter } from 'next/router'
import ALISHAImg from 'src/assets/image/character/ALISHA.png'
import CINDYImg from 'src/assets/image/character/CINDY.png'
import GRADYImg from 'src/assets/image/character/GRADY.png'
import KOONSMANImg from 'src/assets/image/character/KOONSMAN.png'
import MICHELLEImg from 'src/assets/image/character/MICHELLE.png'
import OLLIEImg from 'src/assets/image/character/OLLIE.png'
import { Grid } from '@mui/material'

const GuideWrapper = styled('section')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: '#000',
})

const PageDivider = styled.div`
  padding-top: 80px;
`

const HeroTextLine = styled('div')({
  fontFamily: 'Noto Sans',
  color: '#FFFFFF',
  padding: '3rem ',
})

const HeroTitle = styled('h4')({
  fontWeight: '700',
  fontSize: '40px',
  textAlign: 'center',
})

const HeroDetailText = styled('p')({
  fontWeight: '400',
  fontSize: '1.2rem',
  opacity: '0.5',
  textAlign: 'center',
})

const ChracterCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // width: '277px',
  border: '1px solid #323232',
  transition: 'background-color 0.3s ease', // Add a smooth transition for the background color change
  '&:hover': {
    // Add the hover effect
    backgroundColor: '#53FFD6',
  },
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
    name: 'OLIE',
    src: OLLIEImg,
  },
  {
    name: 'CINDY',
    src: CINDYImg,
  },
  {
    name: 'ALISHA',
    src: ALISHAImg,
  },
  {
    name: 'GRADY',
    src: GRADYImg,
  },
  {
    name: 'KOONSMAN',
    src: KOONSMANImg,
  },
  {
    name: 'MICHELLE',
    src: MICHELLEImg,
  },
]

export default function Characters() {
  const router = useRouter()
  return (
    <GuideWrapper>
      <PageDivider />
      <Container maxWidth={'lg'}>
        <HeroTextLine>
          <HeroTitle>HERO를 선택하세요</HeroTitle>
          <HeroDetailText>
            다수의 히어로 중 자신의 플레이 스타일에 어울리는 히어로를
            찾아보세요.
          </HeroDetailText>
          <HeroDetailText>
            한 명의 히어로를 완벽히 익히거나 모든 히어로를 사용해 볼 수
            있습니다.
          </HeroDetailText>
        </HeroTextLine>
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
                xs={6}
                md={3}
                sm={4}
                className="Character_card"
                key={id}
                onClick={() => router.push(`/hero/${id}`)}
              >
                <ChracterCard>
                  <Image
                    src={characterImg}
                    alt="select_character"
                    style={{ width: '100%', minWidth: '160px' }}
                  />
                  <CharacterName> {name}</CharacterName>
                </ChracterCard>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </GuideWrapper>
  )
}
