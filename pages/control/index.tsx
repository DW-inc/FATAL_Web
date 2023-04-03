import React from 'react'
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
    width: 90%;
  }

  @media (max-width: 480px) {
  }
`

const GuideMoveImg = styled.img`
  width: 60%;
  height: auto;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 480px) {
  }
`

const GuideAttackImg = styled.img`
  width: 60%;
  height: auto;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 480px) {
  }
`

const GuidePlayImg = styled.img`
  z-index: 2;
`

const GuideEtcImg = styled.img`
  z-index: 10;
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
  margin-top: 12rem;
  margin-bottom: 5rem;
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
  const [textcontroller, setTextcontroller] = useRecoilState(
    Guide_ControllerState
  )
  const [arrowcontroller, setArrowController] =
    useRecoilState(ArrowControllerState)

  const CharacterHandler = () => {
    setArrowController(!arrowcontroller)
  }

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SectionLine>
            <h5>characters Move</h5>
            <LineDivider></LineDivider>
          </SectionLine>
          <GuideMoveImg
            src={Guide_Character_Move_Img.src}
            alt="controller_img"
          />
        </div>
        <div
          style={{
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
          <GuideAttackImg
            src={Guide_Character_Attack_Img.src}
            alt="controller_img"
          />
        </div>
        <div
          style={{
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
          <div style={{ width: '60%' }}>
            <GuidePlayImg
              src={Guide_Character_Play_Img.src}
              alt="controller_img"
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SectionPlayLine>
            <h5>GAME PLAY</h5>
            <LineDivider></LineDivider>
          </SectionPlayLine>
          <div style={{ width: '60%' }}>
            <GuideEtcImg
              src={Guide_Character_ETC_Img.src}
              alt="controller_img"
            />
          </div>
        </div>

        <GuideBackBuilding alt="building_img" src={Guide_Building_img.src} />
      </GuideContainer>
    </GuideWrapper>
  )
}

const SectionAttackLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
  margin-bottom: 5rem;
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
  margin-top: 12rem;
  margin-bottom: 5rem;
  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
`

const GuideBackBuilding = styled.img`
  position: absolute;
  bottom: 0rem;
  right: 0;
  width: 90%;
`
