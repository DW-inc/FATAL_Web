import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { useSwiper } from 'swiper/react'
import { breakpoints } from 'src/constans/MediaQuery'
import scroll_down from 'src/assets/icon/scrolldown.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}px) {
    /* justify-content: unset;
    align-items: unset; */
    /* padding-top: 2rem; */
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

const ModInContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-bottom: 10rem;
  }
`

const ModTitle = styled.div`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  color: #fff;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: 563px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const ModeExplain = styled.div`
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  /* transform: translateY(-65px); */

  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }

  @media (max-width: 563px) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    /* transform: translateY(-10px); */
    font-size: 14px;
  }
`

const ModeDetail = styled.p`
  /* width: 60%; */
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ff0861;
  z-index: 3;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 1.6rem;
  }
  @media (max-width: 563px) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.4rem;

    width: 100%;
  }
`

const ModeProve = styled.p`
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  font-size: 3.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-15px);

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 2.2rem;
    transform: translateY(-5px);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.6rem;
    transform: translateY(15px);
  }
`

const ModShowMore = styled.div`
  margin: 5rem 0;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  z-index: 10;
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
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0;

    width: 250px;
  }
`
const CustomImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`

export default function FatalMod() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)

  const router = useRouter()

  const ModHandler = () => {
    router.push('/modguide')
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

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
          <ModInContainer>
            <ModTitle>HIJACK</ModTitle>
            <ModeDetail>Over power your opponent! Take over GEMs!</ModeDetail>
            <ModeExplain>
              Defeat your enemies and gather energy resources!
              <br /> The team that collects the most energy and acquires more
              resources wins.
            </ModeExplain>
            <ModShowMore onClick={ModHandler}>
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
            </ModShowMore>
          </ModInContainer>
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
