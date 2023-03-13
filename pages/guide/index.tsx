import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import { useRouter } from 'next/router'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import { Request_CharacterInfo } from 'src/constans/Characters'

interface IArrowProps {
  arrowcontroller: boolean
}

const GuideWrapper = styled('section')({
  marginTop: '5rem',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
})

const GuideHeader = styled('div')({
  width: '100%',
  height: '28.5rem',
  backgroundImage: `url(${'guideBg/guide_header_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const GuideText = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#808080',
})

const GuideContentsTitle = styled('h3')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
  color: '#FFF',
})

const GuideContainer = styled('div')({
  width: '100%',
  marginTop: '56px',
})

const GuideLeft = styled('div')({
  position: 'absolute',
  fontFamily: 'Bebas',
  diplay: 'flex',
  flexDirection: 'column',
  left: '4.375rem',
})

const GuideLeftTitle = styled('h5')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const LeftModeWrapper = styled('div')({
  marginTop: '79px',
})

const GuideLeftContents = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const ModeTitle = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const ModeGuideContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const CharacterArrow = styled('img')<IArrowProps>(({ arrowcontroller }) => ({
  width: '24px',
  height: '24px',
  transform: arrowcontroller ? 'rotate(180deg)' : 'rotate(0deg)',
}))

const CharacterList = ['Olie', 'Idol', 'nurse', 'Health', 'Alien']

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
      {/* <GuideHeader>
        <GuideText>GUIDE BOOK</GuideText>
        <GuideContentsTitle>Control Guide</GuideContentsTitle>
      </GuideHeader> */}
      <GuideContainer>
        {/* <GuideLeft>
          <GuideLeftTitle>BASIC GUIDE</GuideLeftTitle>

          <GuideLeftContents
            style={{ color: textcontroller === 'CONTROL' ? 'pink' : '#000' }}
            onClick={() => {
              setTextcontroller('CONTROL')
              router.push('/guide')
            }}
          >
            CONTROL
          </GuideLeftContents>
          <GuideLeftContents onClick={CharacterHandler}>
            CHARACTER
            <CharacterArrow
              src={CharacterArrowImg.src}
              alt="arrow"
              arrowcontroller={arrowcontroller}
            />
          </GuideLeftContents>
          {arrowcontroller ? (
            <div>
              {Request_CharacterInfo.map((name) => (
                <div
                  key={name.id}
                  onClick={() => {
                    setTextcontroller(name.name)
                    router.push(`/guide/character/${name.id}`)
                  }}
                >
                  {name.name}
                </div>
              ))}
            </div>
          ) : null}

          <LeftModeWrapper>
            <ModeTitle>MODE GUIDE</ModeTitle>
            <ModeGuideContents>MODE GUIDE</ModeGuideContents>
          </LeftModeWrapper>
        </GuideLeft> */}
        <Container maxWidth={'lg'}>
          <Image src={Guide_ControllerImg} alt="controller_img" />
        </Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
