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
import { breakpoints } from 'src/constans/MediaQuery'

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-image: url('Bg/Main_bg.png');
  background-position: 50%;
  background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* padding-top: 3rem; */

  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    justify-content: unset;
    align-items: unset;
    padding-top: 0.5rem;
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
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
  font-size: 4rem;
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
    font-size: 1.4rem;
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

  /* @media screen and (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  } */

  @media screen and (max-width: 480px) {
    padding: 0;
    width: 290px;
    height: 65px;
    margin: 0.5rem 0;
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

export default function FatalZoneMain() {
  return (
    <>
      <VideoBackground
        loop
        muted
        autoPlay
        playsInline
        src="/video/Main_bg.mp4"
      ></VideoBackground>
      <MainWrapper>
        {/* <source src="/video/Main_bg.mp4" type="video/mp4" /> */}
        <Container maxWidth={'lg'} style={{ zIndex: '100' }}>
          <MainCenter>
            <MainImageDiv>
              <ImageCustom src={web_logo.src} alt="logo" />
            </MainImageDiv>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FatalImageCutom src={web_text.src} alt="logo" />
            </div>

            <MainThrow>THROW IT INTO THE WORLD!</MainThrow>
            <MainText>
              In 2190 humans are trying to install Dyson Spear on earth to take
              off into the next level of civilization. But just as it is early
              for humankind, the worst global catastrophe in human history is
              taking place.
            </MainText>
            <MainTextResource>
              New resource mineral GEM found under sinkhole. There was a battle
              between the world government FAITH and the resistance CREED over
              resources. In the meantime, there&apos;s a mix of lunatics and
              fanatics who have jumped for their own ends. The flames of madness
              rise from the battlefield.
            </MainTextResource>
            <MainTextRepression>
              In an era of repression, resistance, madness, and violence, Join
              the battle to reach your own goals and win your goals.
            </MainTextRepression>
            <MainMoreBt />
          </MainCenter>
        </Container>
      </MainWrapper>
    </>
  )
}

const ImageCustom = styled.img`
  width: 20%;
  height: auto;
  min-width: 160px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0;
    min-width: 140px;
  }
`

const FatalImageCutom = styled.img`
  width: 46%;
  height: auto;
  min-width: 300px;
  min-height: 40px;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 45%;
    /* height: 40%; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    width: 35%;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 30%;
    padding: 0;
  }
`
