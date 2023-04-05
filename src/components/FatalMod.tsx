import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { useSwiper } from 'swiper/react'
import { breakpoints } from 'src/constans/MediaQuery'
import scroll_down from 'src/assets/icon/scrolldown.png'
import Image from 'next/image'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* background: url('Bg/ModeBg.png') no-repeat center;
  background-position: 50%;
  background-size: cover; */
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
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    margin-bottom: 10rem;
  }
`

const ModTitle = styled.div`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 12rem;
  text-align: center;
  color: #fff;
  z-index: 10;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 10rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 8rem;
  }

  @media (max-width: 563px) {
    font-size: 6rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 4.6rem;
  }
`

const ModeExplain = styled.div`
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  /* transform: translateY(-65px); */

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.8rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    /* transform: translateY(-10px); */

    font-size: 0.95rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    /* transform: translateY(-10px); */
    font-size: 0.75rem;
  }
`

const ModeDetail = styled.p`
  /* width: 60%; */
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ff0861;
  transform: translateY(-50px);

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 3.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    transform: translateY(-20px);
    font-size: 1.6rem;
  }
  @media (max-width: 563px) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.4rem;
    transform: translateY(-15px);
    width: 100%;
  }
`

const ModeDetailText = styled.div`
  width: 60%;
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-50px);

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 1.2rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 1rem;
    transform: translateY(-25px);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 95%;
    transform: translateY(0px);
  }
`

const ModeDetailJoinText = styled.p`
  width: 60%;
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-35px);
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
  margin: 2rem 0;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  transition: background-image 0.3s ease;
  z-index: 10;
  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0;
    margin: 5rem 0;
  }
`

export default function FatalMod() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
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
            <ModTitle>DOGFIGHT</ModTitle>
            <ModeDetail>Over power your opponent! Take over GEMs!</ModeDetail>
            {/* <ModeExplain>
              Defeat your enemies and gather energy resources!
            </ModeExplain>
            <ModeExplain>
              Collect Gems and combine them with Halos. Inject the combined
              energy into the Nexus.
            </ModeExplain>
            <ModeExplain>
              The team that collects the most energy and acquires more resources
              wins.
            </ModeExplain> */}
            <ModeExplain>
              Defeat your enemies and gather energy resources!
              <br /> Collect Gems and combine them with Halos. Inject the
              combined energy into the Nexus.
              <br /> The team that collects the most energy and acquires more
              resources wins.
            </ModeExplain>
            <ModShowMore></ModShowMore>
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
    bottom: 25%;
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
