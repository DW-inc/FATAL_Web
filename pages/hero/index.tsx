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
import COMMINGSOONImG from 'src/assets/image/character/commingSoon.png'
import { Grid } from '@mui/material'
import { breakpoints } from 'src/constans/MediaQuery'

const GuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #fff;
`

const PageDivider = styled.div`
  /* padding-top: 80px; */
`

const HeroTextLine = styled.div`
  font-family: 'Noto Sans';
  color: #000;
  padding: 3rem;
`

const HeroTitle = styled.h4`
  font-weight: 700;
  font-size: 40px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 2rem;
  }
`

const HeroDetailText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  opacity: 0.5;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1rem;
  }
`

const CharacterName = styled.div`
  width: 100%;
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 48px;
  border-top: 1px solid #000;
  color: #fff;
  display: flex;
  justify-content: center;
  background-color: #000;
  transition: background-color 0.3s ease;
`

const ChracterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #323232;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #53ffd6;
  }
  &:hover ${CharacterName} {
    background-color: #00765a;
  }
`

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
  {
    name: 'COMMING SOON',
    src: COMMINGSOONImG,
  },
]

export default function Characters() {
  const router = useRouter()
  return (
    <GuideWrapper>
      <PageDivider />
      <Container maxWidth={'lg'} style={{ padding: '4rem 0' }}>
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
            const handleClick = () => {
              if (id === 7 || id === 8) {
                alert('CommingSoon')
              } else {
                router.push(`/hero/${id}`)
              }
            }
            return (
              <Grid
                item
                xs={6}
                md={3}
                sm={4}
                className="Character_card"
                key={id}
                onClick={handleClick}
              >
                <ChracterCard>
                  <Image
                    src={characterImg}
                    alt="select_character"
                    style={{
                      width: '100%',
                      height: 'auto',
                      minWidth: '140px',
                    }}
                  />
                  <CharacterName isComingSoon={name === 'COMMING SOON'}>
                    {name}
                  </CharacterName>
                </ChracterCard>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </GuideWrapper>
  )
}
