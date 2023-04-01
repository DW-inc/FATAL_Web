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

const GuideContainer = styled('div')({
  width: '100%',
  // marginTop: '56px',
})

const GuideCutomImg = styled.img`
  width: 100%;
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
        <Container maxWidth={'lg'}>
          <GuideCutomImg src={Guide_ControllerImg.src} alt="controller_img" />
        </Container>
      </GuideContainer>
    </GuideWrapper>
  )
}
