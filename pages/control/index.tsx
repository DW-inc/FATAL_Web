import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import Guide_Character_Move_Img from 'src/assets/image/Guide_move.png'
import Guide_Character_Attack_Img from 'src/assets/image/Guide_Attack.png'
import Guide_Character_Play_Img from 'src/assets/image/Guide_Play.png'
import Guide_Character_ETC_Img from 'src/assets/image/Guide_ETC.png'
import Guide_Building_img from 'src/assets/guideBg/Guide_building.png'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import { breakpoints } from 'src/constans/MediaQuery'
import Mobile_Attack_Img from 'src/assets/image/Mobile_Attack.png'
import Mobile_Play_Img from 'src/assets/image/Mobile_Play.png'
import Mobile_Move_Img from 'src/assets/image/Mobile_move.png'
import Mobile_ETC_Img from 'src/assets/image/Mobile_Etc.png'

interface IArrowProps {
  arrowcontroller: boolean
}

const GuideWrapper = styled('section')({
  marginTop: '5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  background: '#121212',
})

const GuideContainer = styled('div')({
  width: '100%',
  zIndex: '2',
  // marginTop: '56px',
})

const GuideCutomImg = styled.img`
  width: 60%;
  height: auto;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`

const GuideMoveImg = styled.img`
  z-index: 2;
  margin: 5rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`

const GuideAttackImg = styled.img`
  z-index: 2;
  margin: 5rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`

const GuidePlayImg = styled.img`
  z-index: 2;
  margin: 5rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`

const GuideEtcImg = styled.img`
  z-index: 10;
  margin: 5rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`

const GuideTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  text-align: center;

  color: #ffffff;
`

const GuideText = styled.p`
  font-family: 'Bebas Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 5rem;
`

const SectionLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
`

const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 50%,
    #ffffff 100%
  );
  border-image-slice: 1;
`

export default function Guide() {
  const router = useRouter()

  const [screenWidth, setScreenWidth] = useState<number>(0)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const time = setTimeout(() => {
      setScreenWidth(window.innerWidth)
    }, 0.0000000000000000001)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(time)
    }
  }, [])

  const isMobileScreen = screenWidth < 763

  return (
    <GuideWrapper>
      <GuideContainer>
        <GuideTitle>CONTROL</GuideTitle>
        <GuideText>Check the basic operating instructions</GuideText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GuideCutomImg src={Guide_ControllerImg.src} alt="controller_img" />
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '6rem',
          }}
        >
          <SectionLine>
            <h5>characters Move</h5>
            <LineDivider></LineDivider>
          </SectionLine>
          {isMobileScreen ? (
            <GuideMoveImg src={Mobile_Move_Img.src} alt="controller_img" />
          ) : (
            <GuideMoveImg
              src={Guide_Character_Move_Img.src}
              alt="controller_img"
            />
          )}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SectionAttackLine>
            <h5>ATTACK</h5>
            <LineDivider></LineDivider>
          </SectionAttackLine>
          {isMobileScreen ? (
            <GuideAttackImg src={Mobile_Attack_Img.src} alt="controller_img" />
          ) : (
            <GuideAttackImg
              src={Guide_Character_Attack_Img.src}
              alt="controller_img"
            />
          )}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SectionPlayLine>
            <h5>GAME PLAY</h5>
            <LineDivider></LineDivider>
          </SectionPlayLine>
          {isMobileScreen ? (
            <GuidePlayImg src={Mobile_Play_Img.src} alt="controller_img" />
          ) : (
            <GuidePlayImg
              src={Guide_Character_Play_Img.src}
              alt="controller_img"
            />
          )}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SectionPlayLine>
            <h5>ETC</h5>
            <LineDivider></LineDivider>
          </SectionPlayLine>
          {isMobileScreen ? (
            <GuideEtcImg src={Mobile_ETC_Img.src} alt="controller_img" />
          ) : (
            <GuideEtcImg
              src={Guide_Character_ETC_Img.src}
              alt="controller_img"
            />
          )}

          <div style={{ height: '200px' }}></div>
        </div>
      </GuideContainer>
      <GuideBackBuilding alt="building_img" src={Guide_Building_img.src} />
    </GuideWrapper>
  )
}

const SectionAttackLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
`

const SectionPlayLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
`

// const GuideBackBuilding = styled.div`
//   background-image: url('download_bg.png');
//   background-position: 50%;
//   background-size: cover;
//   width: 908px;
//   height: 1408px;
//   @media (max-width: ${breakpoints.tablet}px) {
//   }

//   @media (max-width: ${breakpoints.smallTablet}px) {
//     /* width: 800px; */
//   }
//   @media (max-width: ${breakpoints.mobile}px) {
//   }
// `

const GuideBackBuilding = styled.img`
  position: absolute;
  bottom: 0rem;
  right: 0;
  width: 90%;
  height: auto;
  min-width: 1200px;
  @media (max-width: ${breakpoints.tablet}px) {
    min-width: 1200px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    /* width: 800px; */
  }
  @media (max-width: 600px) {
    min-width: 1000px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 900px;
  }
`
