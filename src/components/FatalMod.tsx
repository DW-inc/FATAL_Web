import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { IScrollbuttonProps } from 'pages'

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
  backgroundSize: '100% 100%',
}))

const ModTitle = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '100px',
  textAlign: 'center',
  color: '#FFFFFF',
}))

const ModeExplain = styled('div')((theme) => ({
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#FFFFFF',
}))

const ModeDetail = styled('div')((theme) => ({
  width: '610px',
  height: '132px',
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '23px',
  textAlign: 'center',
  color: '#FFBC11',
  border: '1px solid #FFBC11',
}))

export default function FatalMod({ id }: IScrollbuttonProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
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
          }}
        >
          <ModTitle>MOD NAME</ModTitle>
          <ModeDetail style={{ height: '47px' }}>
            모드에 대한 1줄 설명
          </ModeDetail>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ModeExplain>‘Mode name’ 이란?</ModeExplain>
          <ModeDetail>모드에 대한 설명</ModeDetail>
        </div>
      </Container>
    </Wrapper>
  )
}
