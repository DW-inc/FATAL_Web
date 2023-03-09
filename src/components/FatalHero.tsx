import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Fatal_Right_zone from 'src/assets/image/FATAL_Right_ ZONE.png'
import AlishaImg from 'src/assets/characterImage/Alisha.png'
import Button from './commons/Button'
import { IScrollbuttonProps } from 'pages'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '110vh',
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
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '70px',
  /* identical to box height */
  textAlign: 'center',
  color: '#FFFFFF',
}))

const TeamLine = styled('div')((theme) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '41rem',
  transform: 'translate(35%,-150%)',
  '@media only screen and (max-width: 1150px)': {
    width: '35rem',
    transform: 'translate(35%,-120%)',
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

const CharactersModel = [AlishaImg, AlishaImg, AlishaImg, AlishaImg, AlishaImg]
//  1150 px 미만일때 다른 화면 구현 각
export default function FatalHero({ id }: IScrollbuttonProps) {
  return (
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <InnerContainer>
          <TopChooseText>Choose your hero!</TopChooseText>
          <p>
            Find a hero that matches your style of play among many heroes.You
            can
            <br />
            learn one hero completely or try all the heroes
          </p>
          <div style={{ display: 'flex' }}>
            {CharactersModel.map((value, index) => (
              <div key={index} style={{ padding: '1.2rem' }}>
                <Image
                  src={value}
                  alt="characters_model"
                  width={200}
                  height={640}
                />
              </div>
            ))}
          </div>
        </InnerContainer>
        <TeamLine>
          <LeftTeam>
            <h4>FAITH</h4>
            <p>진영에 대한 간략한 설명</p>
          </LeftTeam>
          <CenterVersus>VS</CenterVersus>
          <RightTeam>
            <h4>CREED</h4>
            <p>진영에 대한 간략한 설명</p>
          </RightTeam>
        </TeamLine>
      </Container>
    </Wrapper>
  )
}
