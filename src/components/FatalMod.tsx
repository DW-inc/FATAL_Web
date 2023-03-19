import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { IScrollbuttonProps } from 'pages'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import Image from 'next/image'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('Bg/ModeBg.png') no-repeat center;
  background-position: 50%;
  background-size: cover;
  @media (max-width: 480px) {
    height: auto;
  }
`

const ModTitle = styled.div`
  font-family: 'Randhu';
  font-weight: 400;
  font-size: 12rem;
  text-align: center;
  color: #e4ff00;
  @media (max-width: 1150px) {
    font-size: 10rem;
  }

  @media (max-width: 714px) {
    font-size: 8rem;
  }
  @media (max-width: 570px) {
    font-size: 7rem;
  }
  @media (max-width: 480px) {
  }
`

const ModeExplain = styled.div`
  width: 50%;
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  font-size: 3.3rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-65px);
  @media (max-width: 1150px) {
    font-size: 2.8rem;
  }
  @media (max-width: 810px) {
    font-size: 2.4rem;
    width: 60%;
  }
  @media (max-width: 570px) {
    transform: translateY(-45px);
  }
  @media (max-width: 480px) {
  }
`

const ModeDetail = styled.p`
  width: 60%;
  font-family: 'Nextrue-Bold-Slant';
  font-weight: 400;
  font-size: 4.4rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-75px);
  @media (max-width: 1150px) {
    font-size: 3.6rem;
  }
  @media (max-width: 912px) {
    width: 70%;
    font-size: 3rem;
    transform: translateY(-50px);
  }
  @media (max-width: 570px) {
    width: 90%;
    font-size: 2.8rem;
  }
  @media (max-width: 480px) {
  }
`

const ModeDetailText = styled.p`
  width: 60%;
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  transform: translateY(-50px);
  @media (max-width: 1150px) {
  }
  @media (max-width: 570px) {
    width: 80%;
    transform: translateY(-25px);
  }
  @media (max-width: 480px) {
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
  @media (max-width: 1150px) {
    font-size: 2.8rem;
  }
  @media (max-width: 570px) {
    transform: translateY(0px);
  }
  @media (max-width: 480px) {
  }
`

export default function FatalMod({ id }: IScrollbuttonProps) {
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
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            // marginTop: '2rem',
          }}
        >
          <ModTitle>FALL DOWN</ModTitle>
          <ModeDetail>Overpower your opponent! Take over GEM!</ModeDetail>
          <ModeExplain>
            Collect Gem and combine it with Halo. Put energy into the Nexus.
          </ModeExplain>
          <ModeDetailText>
            Halo and GEM&apos;s combination made strong energy The side effects
            have caused mental and abnormal physical ability. FAITH is forced to
            put prisoners into mining work, The mining work was a symbol of
            oppression,
          </ModeDetailText>
          {/* <ModeDetailJoinText>
            Join the FAITH and CREED forces. Place the scattered GEM in a halo
            and inject it into the Nexus. In a battle to defeat the enemy,
            various GEMs are combined with weapons. You can make more powerful
            weapons and overpower your enemies more easily.
          </ModeDetailJoinText> */}
          <ModeProve>Prove your strengh in battle.</ModeProve>
          <div
            onMouseEnter={() => setIsHeroShowMore(true)}
            onMouseLeave={() => setIsHeroShowMore(false)}
            style={{ padding: '40px 0  ' }}
          >
            {isHeroShowMore ? (
              <Image src={showMore_on} alt="on" />
            ) : (
              <Image src={showMore_off} alt="off" />
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
