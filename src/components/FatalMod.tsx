import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { IScrollbuttonProps } from 'pages'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import Image from 'next/image'

const Wrapper = styled('section')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundImage: `url(${'Bg/ModeBg.png'})`,
  background: `url(${'Bg/ModeBg.png'})   no-repeat center`,
  backgroundPosition: '50%',
  backgroundSize: 'cover',
}))

const ModTitle = styled('div')((theme) => ({
  fontFamily: 'Randhu',
  fontWeight: '400',
  fontSize: '192px',
  textAlign: 'center',
  color: '#E4FF00',
}))

const ModeExplain = styled('div')((theme) => ({
  width: '50%',
  fontFamily: 'Nextrue Con Light',
  fontWeight: '400',
  fontSize: '54px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  opacity: '0.7',
  transform: ' translateY(-65px)',
}))

const ModeDetail = styled('p')((theme) => ({
  width: '60%',
  fontFamily: 'Nextrue-Bold-Slant',
  fontWeight: '400',
  fontSize: '71px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  opacity: '0.7',
  transform: ' translateY(-75px)',
}))

const ModeDetailText = styled('p')((theme) => ({
  width: '60%',
  fontFamily: 'Nextrue Con Light',
  fontWeight: '400',
  fontSize: '24px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  opacity: '0.7',
  transform: ' translateY(-50px)',
}))

const ModeDetailJoinText = styled('p')((theme) => ({
  width: '60%',
  fontFamily: 'Nextrue Con Light',
  fontWeight: '400',
  fontSize: '24px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  opacity: '0.7',
  transform: ' translateY(-35px)',
}))

const ModeProve = styled('p')((theme) => ({
  fontFamily: 'Nextrue Con Light',
  fontWeight: '400',
  fontSize: '54px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  opacity: '0.7',
  transform: ' translateY(-15px)',
}))

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
            style={{ padding: '50px 0  ' }}
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
