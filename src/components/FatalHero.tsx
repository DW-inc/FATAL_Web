import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AlishaImg from 'src/assets/image/Character_Select.png'
import HeroBgImg from 'src/assets/Bg/background_2.jpg'
import scroll_down from 'src/assets/icon/scrolldown.png'
import { useSwiper } from 'swiper/react'
import { breakpoints } from 'src/constans/MediaQuery'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url(${HeroBgImg.src}) no-repeat center;
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

const InnerContainer = styled.div`
  /* padding-top: 10rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* @media only screen and (max-width: 1150px) {
    padding-top: 7rem;
  } */

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

const TopChooseText = styled.div`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 6.25rem;
  text-align: center;
  color: #ffffff;
  z-index: 10;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 4rem;
    line-height: 1;
  }
`

const TopSubText = styled.p`
  font-family: 'Bebas Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  z-index: 10;
  color: #53ffd6;
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.4rem;
    padding-top: 1rem;
  }
`

const TopHeroText = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  text-transform: uppercase;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1rem;
  }
`

const CharactersModel = [AlishaImg, AlishaImg, AlishaImg, AlishaImg, AlishaImg]
//  1150 px 미만일때 다른 화면 구현 각

export default function FatalHero() {
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)

  const swiper = useSwiper()

  const handleScrollDownClick = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }
  return (
    <>
      {/* <VideoBackground
        loop
        muted
        autoPlay
        playsInline
        src="/video/Main_bg.mp4"
      ></VideoBackground> */}
      <Wrapper>
        <Container maxWidth={'lg'}>
          <InnerContainer>
            <TopChooseText>CHOOSE YOUR HERO!</TopChooseText>
            <TopSubText>Meet a variety of characters</TopSubText>
            <TopHeroText>
              Among the many heroes, find one that suits your play style.
              <br /> You can either master one champion or try them all out.
            </TopHeroText>

            <HeroMoreBt>
              <CustomImg
                className="image-off"
                src="/Show_Button_off.png"
                alt="Show More Button Off"
              />
              <CustomImg
                className="image-on"
                src="/Show_Button_on.png"
                alt="Show More Button On"
              />
            </HeroMoreBt>
          </InnerContainer>
        </Container>
        <ScrollDown onClick={handleScrollDownClick}>
          <Image
            className="image-up-and-down"
            src={scroll_down}
            alt="scroll_down"
          />
        </ScrollDown>
      </Wrapper>
    </>
  )
}

const HeroMoreBt = styled.div`
  margin: 5rem 0;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  z-index: 999;
  position: relative;
  overflow: hidden;

  .image-on,
  .image-off {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
  }

  .image-on {
    opacity: 0;
  }

  &:hover .image-off {
    opacity: 0;
  }

  &:hover .image-on {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
  }
`

const CustomImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`

const ScrollDown = styled.div`
  position: absolute;
  bottom: 8%;
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
    width: 100%;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
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
