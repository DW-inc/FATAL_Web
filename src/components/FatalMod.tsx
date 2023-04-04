import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'

import { breakpoints } from 'src/constans/MediaQuery'

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
    justify-content: unset;
    align-items: unset;
    padding-top: 2rem;
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
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
    font-size: 7rem;
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
  transform: translateY(-65px);

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.8rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    transform: translateY(-40px);
    width: 70%;
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.8rem;
    transform: translateY(-10px);
    width: 90%;
  }
`

const ModeDetail = styled.p`
  /* width: 60%; */
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ff0861;
  transform: translateY(-75px);

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 3.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    transform: translateY(-45px);
    font-size: 2.8rem;
  }
  @media (max-width: 563px) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 2rem;
    transform: translateY(-15px);
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
    margin: 0.5rem 0;
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ModTitle>FALL DOWN</ModTitle>
            <ModeDetail>Overpower your opponent! Take over GEM!</ModeDetail>
            <ModeExplain>Collect Gem and combine it with Halo.</ModeExplain>
            <ModeExplain>Put energy into the Nexus.</ModeExplain>
            {/* <ModeDetailText>
              <p>Airborne blew up in the sky!</p>
              <p>Prisoners and GEMs that poured to the ground with him.</p>
              <p>
                The battle at the mining site begins an all-out war between the
                FAITH and CREED forces.
              </p>

              <p style={{ paddingTop: '1rem' }}>
                Join the FAITH and CREED forces.
              </p>
              <p>
                Place the scattered GEM in a halo and inject it into the Nexus.
              </p>
              <p>
                In a battle to defeat the enemy, various GEMs are combined with
                weapons.
              </p>
              <p>
                You can make more powerful weapons and overpower your enemies
                more easily.
              </p>
            </ModeDetailText> */}
            {/* <ModeDetailJoinText>
            Join the FAITH and CREED forces. Place the scattered GEM in a halo
            and inject it into the Nexus. In a battle to defeat the enemy,
            various GEMs are combined with weapons. You can make more powerful
            weapons and overpower your enemies more easily.
          </ModeDetailJoinText> */}
            {/* <ModeProve>Prove your strengh in battle.</ModeProve> */}
            <ModShowMore
            // onMouseEnter={() => setIsHeroShowMore(true)}
            // onMouseLeave={() => setIsHeroShowMore(false)}
            ></ModShowMore>
          </div>
        </Container>
      </Wrapper>
    </>
  )
}
