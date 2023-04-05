import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AlishaImg from 'src/assets/image/Character_Select.png'
import ParkingBg from 'src/assets/Bg/parking.png'
import scroll_down from 'src/assets/icon/scrolldown.png'
import { useSwiper } from 'swiper/react'
import { breakpoints } from 'src/constans/MediaQuery'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url(${ParkingBg.src});
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: auto;
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
  @media only screen and (max-width: 1150px) {
    padding-top: 7rem;
  }
  p {
    font-family: 'Noto Sans';
    font-size: 18px;
    color: #ffffff;
    text-align: center;
  }
`

const TopChooseText = styled.div`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 3.4rem;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
`

const TopHeroText = styled.div`
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
`

const TeamLine = styled.div`
  display: flex;
  align-items: center;
  gap: 4.4rem;
  transform: translate(10%, -150%);
  @media only screen and (max-width: 1150px) {
    transform: translate(0%, -150%);
  }
  @media only screen and (max-width: 480px) {
    /* transform: translate(0%, -200%); */
    /* align-items: center; */
  }
`

const LeftTeam = styled.div`
  color: #ffffff;

  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 100px;
    text-align: center;
    color: #b8fd00;
  }
`

const CenterVersus = styled.div`
  color: #ffffff;
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 80px;
  text-align: center;
`

const CharacterLine = styled.div`
  width: 100%;

  @media only screen and (max-width: 1150px) {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const RightTeam = styled.div`
  color: #ffffff;

  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 100px;
    text-align: center;
    color: #ff00a3;
  }
`

const TeamTextLine = styled.div`
  display: flex;
  transform: translate(15%, -150%);

  @media only screen and (max-width: 1150px) {
    transform: translate(10%, -130%);
  }
  @media only screen and (max-width: 908px) {
    transform: translate(0%, -120%);
  }
  @media only screen and (max-width: 763px) {
    transform: translate(0%, -100%);
  }

  @media only screen and (max-width: 480px) {
    transform: translate(10%, -150%);
  }

  p {
    font-size: 27px;
    font-family: 'Bebas Book';
    color: #ffffff;
    /* transform: translateY(70%); */
    @media only screen and (max-width: 908px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
`
const TeamShowMore = styled.div`
  @media only screen and (max-width: 908px) {
    transform: translate(65%, -100%);
  }

  @media only screen and (max-width: 1150px) {
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
      <VideoBackground
        loop
        muted
        autoPlay
        playsInline
        src="/video/Main_bg.mp4"
      ></VideoBackground>
      <Wrapper>
        <Container maxWidth={'lg'}>
          <InnerContainer>
            <TopChooseText>CHOOSE YOUR HERO!</TopChooseText>
            <TopHeroText>
              Find a hero that matches your style of play among many heroes.
            </TopHeroText>
            <TopHeroText>
              You can learn one hero completely or try all the heroes
            </TopHeroText>
            <HeroMoreBt />
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
  margin: 3rem 0;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  transition: background-image 0.3s ease;
  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }
  @media (max-width: ${breakpoints.tablet}px) {
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
  bottom: 15%;
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
