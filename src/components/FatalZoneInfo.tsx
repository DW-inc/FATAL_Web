import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import Fatal_Right_zone from 'src/assets/image/FATAL_Right_ ZONE.png'

// const Wrapper = styled('div')((theme) => ({
//   width: '100%',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#393939',
//   fontFamily: 'inter',
// }))

const Wrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #393939;
    overflow: hidden;
    /* font-family:inter ; */
    @media (max-width: 480px) {
    }
  `
)

const FatalZone_Logo = styled('div')(
  (theme) => css`
    position: absolute;
    right: -15rem;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 7rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.05);
    transform: rotate(90deg);
    @media (max-width: 480px) {
      font-size: 60px;
      right: -8rem;
    }
  `
)

const FatalZoneContainer = styled('div')(
  (theme) => css`
    width: 60%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1350px) {
      width: 85%;
    }
  `
)

const InfoMainText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    color: #ffffff;
    @media (max-width: 1350px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 768px) {
      font-size: 26px;
    }
  `
)

const InfoSubText = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    width: 45%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 1350px) {
      width: 60%;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  `
)

const InfoSubTitle = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    color: #ffffff;
    @media (max-width: 1350px) {
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `
)

const FatalInfo = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    width: 75%;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    @media (max-width: 1350px) {
      width: 100%;
    }
    @media (max-width: 480px) {
    }
  `
)

const InfoMainTextDiv = styled('div')(
  (theme) => css`
    width: 70%;
    @media (max-width: 1350px) {
      width: 80%;
    }
  `
)

export default function FatalZoneInfo() {
  return (
    <Wrapper>
      <FatalZoneContainer>
        <InfoMainTextDiv>
          <InfoMainText>
            IN THE NEAR FUTURE, IN THE COLLAPSED WORLD, FATAL ZONE
          </InfoMainText>
        </InfoMainTextDiv>

        <InfoSubText>
          <InfoSubTitle>THE LAST UTOPIA WE FOUND IN THE STRUGGLE</InfoSubTitle>

          <FatalInfo>
            The last honor left in the dystopia, the constant battle that all of
            this is at stake, begins in the Fatal Zone. A place where everyone
            can fight fairly, where power is everything, where I can prove my
            power, and an endless space of battle that I have to fight only to
            fight. They called it the Fatal Zone.
          </FatalInfo>
        </InfoSubText>
      </FatalZoneContainer>
    </Wrapper>
  )
}
