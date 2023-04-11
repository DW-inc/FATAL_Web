import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import web_logo from 'src/assets/image/MainPageLogo.png'
import web_text from 'src/assets/image/new_Main_text.png'
import scroll_down from 'src/assets/icon/scrolldown.png'
import { Container } from '@mui/system'
import { breakpoints } from 'src/constans/MediaQuery'
import { useSwiper } from 'swiper/react'

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

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
    /* justify-content: unset; */
    /* height: auto; */
    /* align-items: unset; */
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
    margin-bottom: 6rem;
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
  font-family: 'Atomic Marker';
  color: #ffffff;
  font-style: normal;
  margin-top: 23px;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 2.8rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 2rem;
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
  font-family: 'Bebas Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 0.8rem;

  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
    font-size: 0.8rem;
  }
`
const DesktopText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`

const MobileText = styled.span`
  @media (min-width: 479px) {
    display: none;
  }
`

export default function FatalZoneMain() {
  const swiper = useSwiper()

  const handleScrollDownClick = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

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
              <DesktopText>
                Plunge into a chaotic world of oppression, resistance, madness,
                <br />
                and violence that unfolds before you. Fight and accomplish your
                objectives.
              </DesktopText>
              <MobileText>
                Plunge into a chaotic world of oppression,
                <br />
                resistance, madness, and violence that unfolds before you.
                <br />
                Fight and accomplish your objectives.
              </MobileText>
            </MainText>
            <MainMoreBt />
            <ScrollDown onClick={handleScrollDownClick}>
              <Image
                className="image-up-and-down"
                src={scroll_down}
                alt="scroll_down"
              />
            </ScrollDown>
          </MainCenter>
        </Container>
      </MainWrapper>
    </>
  )
}
const MainMoreBt = styled.div`
  margin: 2rem 0;
  /* background-image: url('/SHOWMORE_button_ OFF.png'); */
  background-size: cover;
  border: none;
  /* cursor: pointer; */
  width: 320px;
  height: 50px;
  transition: background-image 0.3s ease;
  /* &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  } */
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0.5rem 0;
  }
`

const ScrollDown = styled.div`
  position: absolute;
  /* transform: translateY(350%); */
  bottom: 5rem;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0.5rem 0;
    bottom: 10.5rem;
  }
  @keyframes up-and-down {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
  }
  .image-up-and-down {
    animation: up-and-down 3s infinite;
  }
`

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
