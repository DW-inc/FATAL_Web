import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import AlishaImg from 'src/assets/image/Character_Select.png'
import FaithImg from 'src/assets/image/Faith.png'
import VersusImg from 'src/assets/image/vs.png'
import CreedImg from 'src/assets/image/Creed.png'
import Button from './commons/Button'
import { IScrollbuttonProps } from 'pages'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  // position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${'Bg/parking.png'})`,
  backgroundSize: '100% 100%',
}))

const InnerContainer = styled('div')((theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: {
    fontFamily: 'Noto Sans',
    fontSize: '18px',
    color: '#FFFFFF',
    textAlign: 'center',
  },
}))

const TopChooseText = styled('div')((theme) => ({
  fontFamily: 'Nextrue-Slant',
  fontWeight: '400',
  fontSize: '52px',
  /* identical to box height */
  textAlign: 'center',
  color: '#FFFFFF',
  opacity: '0.7',
}))

const TopHeroText = styled('div')((theme) => ({
  fontFamily: 'Bebas Light',
  fontWeight: '300',
  fontSize: '27.5px',
  textDecorationLine: 'underline',
  textAlign: 'center',
  color: '#FFFFFF',
  opacity: '0.7',
  width: '80%',
}))

const TeamLine = styled('div')((theme) => ({
  position: 'absolute',
  display: 'flex',
  gap: '4.4rem',
  transform: 'translate(10%,-120%)',
  '@media only screen and (max-width: 1150px)': {
    transform: 'translate(0%,-150%)',
  },
}))

const LeftTeam = styled('div')((theme) => ({
  color: '#fff',

  h4: {
    fontFamily: 'Bebas',
    fontWeight: '400',
    fontSize: '100px',
    textAlign: 'center',

    color: '#B8FD00',
  },
}))

const CenterVersus = styled('div')((theme) => ({
  color: '#fff',
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
}))

const CharacterLine = styled('div')((theme) => ({
  width: '100%',
  '@media only screen and (max-width: 1150px)': {
    width: '80%',
  },
}))

const RightTeam = styled('div')((theme) => ({
  color: '#fff',
  h4: {
    fontFamily: 'Bebas',
    fontWeight: '400',
    fontSize: '100px',
    textAlign: 'center',

    color: '#FF00A3',
  },
}))

const TeamTextLine = styled('div')((theme) => ({
  position: 'absolute',
  display: 'flex',
  transform: 'translate(20%,-80%)',

  '@media only screen and (max-width: 1150px)': {
    transform: 'translate(0%,-150%)',
  },

  p: {
    fontSize: '27px',
    fontFamily: 'Bebas Book',
    color: '#fff',
    transform: 'translateY(70%)',
  },
}))

const CharactersModel = [AlishaImg, AlishaImg, AlishaImg, AlishaImg, AlishaImg]
//  1150 px 미만일때 다른 화면 구현 각
export default function FatalHero({ id }: IScrollbuttonProps) {
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
  return (
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <InnerContainer>
          <TopChooseText>CHOOSE YOUR HERO!</TopChooseText>
          <TopHeroText>
            Find a hero that matches your style of play among many heroes.
          </TopHeroText>
          <TopHeroText>
            You can learn one hero completely or try all the heroes
          </TopHeroText>

          <CharacterLine>
            <Image src={AlishaImg} alt="hero" style={{ width: '100%' }} />
          </CharacterLine>
        </InnerContainer>
        <TeamLine>
          <LeftTeam>
            <Image src={FaithImg} alt="Faith" style={{ width: '100%' }} />
          </LeftTeam>
          <CenterVersus>
            <Image src={VersusImg} alt="Faith" style={{ width: '100%' }} />
          </CenterVersus>
          <RightTeam>
            <Image src={CreedImg} alt="Creed" style={{ width: '100%' }} />
          </RightTeam>
        </TeamLine>
        <TeamTextLine>
          <p>A brief description of the camp</p>
          <div
            onMouseEnter={() => setIsHeroShowMore(true)}
            onMouseLeave={() => setIsHeroShowMore(false)}
            style={{ transform: 'translateY(100%)' }}
          >
            {isHeroShowMore ? (
              <Image src={showMore_on} alt="on" />
            ) : (
              <Image src={showMore_off} alt="off" />
            )}
          </div>
          <p>A brief description of the camp</p>
        </TeamTextLine>
      </Container>
    </Wrapper>
  )
}
