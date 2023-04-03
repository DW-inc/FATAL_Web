import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AlishaImg from 'src/assets/image/Character_Select.png'
import ParkingBg from 'src/assets/Bg/parking.png'
import FaithImg from 'src/assets/image/Faith.png'
import VersusImg from 'src/assets/image/vs.png'
import CreedImg from 'src/assets/image/Creed.png'
import Button from './commons/Button'
import { IScrollbuttonProps } from 'pages'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// const Wrapper = styled('div')((theme) => ({
//   width: '100%',
//   height: '100vh',
//   display: 'flex',
//   // position: 'relative',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundImage: `url(${'Bg/parking.png'})`,
//   backgroundPosition: '50%',
//   backgroundSize: 'cover',
// }))

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

// gsap.registerPlugin(ScrollTrigger)
export default function FatalHero() {
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
  // const ref = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   const element = ref.current
  //   gsap.to(element, {
  //     scrollTrigger: {
  //       trigger: element,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: true,
  //     },
  //   })
  // }, [])
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

            {/* <CharacterLine>
              <Image src={AlishaImg} alt="hero" style={{ width: '100%' }} />
            </CharacterLine> */}
          </InnerContainer>
          {/* <TeamLine>
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
            <TeamShowMore
              onMouseEnter={() => setIsHeroShowMore(true)}
              onMouseLeave={() => setIsHeroShowMore(false)}
            >
              {isHeroShowMore ? (
                <Image src={showMore_on} alt="on" />
              ) : (
                <Image src={showMore_off} alt="off" />
              )}
            </TeamShowMore>
            <p>A brief description of the camp</p>
          </TeamTextLine> */}
        </Container>
      </Wrapper>
    </>
  )
}
