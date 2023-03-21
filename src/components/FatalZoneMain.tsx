import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import web_logo from 'src/assets/image/MainPageLogo.png'
import web_text from 'src/assets/image/new_Main_text.png'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import { IScrollbuttonProps } from 'pages'
import { Container } from '@mui/system'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { breakpoints } from 'src/constans/MediaQuery'

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('Bg/Main_bg.png');
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
  padding-top: 3rem;

  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    justify-content: unset;
    align-items: unset;
    /* padding-top: 2rem; */
  }
`

const MainCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
  }
`

const MainImageDiv = styled.div`
  margin-bottom: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    width: calc(100% - 2rem);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    margin-bottom: 1rem;
  }
`

const MainThrow = styled.p`
  font-size: clamp(1.8rem, 3rem, 4rem);
  color: #fff;
  text-align: center;
  font-family: 'Nextrue-Slant';
  opacity: 0.7;
  color: #ffffff;
  font-style: normal;
  margin-top: 23px;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 2.8rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.8rem;
    margin-top: 10px;
  }
`

const MainTextResource = styled.p`
  width: 70%;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 0.8rem;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
    font-size: 0.8rem;
  }
`

const MainTextRepression = styled.p`
  width: 70%;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 0.8rem;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* width: calc(100% - 2rem); */
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
    font-size: 0.8rem;
  }
`

const MainText = styled.p`
  width: 70%;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 0.8rem;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 2rem);
    font-size: 0.8rem;
  }
`

const MainMoreBt = styled.div`
  margin: 2rem 0;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 73px;
  transition: background-image 0.3s ease;

  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    padding: 0;
    transform: translateY(25%);
  }
`

// const MainMoreButton = styled.button`
//   background-image: url('/SHOWMORE_button_ OFF.png');
//   background-size: cover;
//   border: none;
//   cursor: pointer;
//   transition: background-image 0.3s ease;
//   &:hover {
//     background-image: url('/SHOWMORE_button_ ON.png');
//   }
// `

export default function FatalZoneMain({ id }: IScrollbuttonProps) {
  return (
    <MainWrapper id={id}>
      <Container maxWidth={'lg'}>
        <MainCenter>
          <MainImageDiv>
            <Image
              src={web_logo}
              alt="logo"
              style={{
                width: '20%',
                height: '20%',
                minWidth: '140px',
                minHeight: '140px',
              }}
            />
          </MainImageDiv>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src={web_text}
              alt="logo"
              priority
              style={{
                width: '50%',
                height: '50%',
                minWidth: '300px',
                minHeight: '40px',
              }}
            />
          </div>

          <MainThrow>THROW IT INTO THE WORLD!</MainThrow>
          <MainText>
            In 2190 humans are trying to install Dyson Spear on earth to take
            off into the next level of civilization. But just as it is early for
            humankind, the worst global catastrophe in human history is taking
            place.
          </MainText>
          <MainTextResource>
            New resource mineral GEM found under sinkhole. There was a battle
            between the world government FAITH and the resistance CREED over
            resources. In the meantime, there&apos;s a mix of lunatics and
            fanatics who have jumped for their own ends. The flames of madness
            rise from the battlefield.
          </MainTextResource>
          <MainTextRepression>
            In an era of repression, resistance, madness, and violence, Join the
            battle to reach your own goals and win your goals.
          </MainTextRepression>
          <MainMoreBt />
        </MainCenter>
      </Container>
    </MainWrapper>
  )
}
