import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { IScrollbuttonProps } from 'pages'

// const Wrapper = styled('div')((theme) => ({
//   width: '100%',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background:
//     'linear-gradient(360deg, #464646 1.2%, rgba(70, 70, 70, 70) 1.86%)',
// }))

const Wrapper = styled('section')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundImage: `url(${'Bg/ModeBg.png'})`,
  background: `url(${'Bg/PlayNowBg.png'})   no-repeat center`,
  backgroundSize: '100% 100%',
}))

const InnerContainer = styled('section')((theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#fff',
  transform: 'translateY(-50%)',
  h4: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '40px',
    textAlign: 'center',
  },
  p: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '20px',
    textAlign: 'center',
  },
}))

export default function FatalPlay({ id }: IScrollbuttonProps) {
  return (
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <InnerContainer>
          <h4>THROW IT INTO THE WORLD!</h4>
          <p>게임을 플레이 할 수 있도록 하는 동기가 담긴 문장</p>
          <p>
            A person who sees the light and prays, a person who wonders, a
            person who tries to grasp the situation. Cindy is staring blankly at
            the light and then approaches. &quot;Halo-b-11089&quot; written on
            the object.
          </p>
        </InnerContainer>
      </Container>
    </Wrapper>
  )
}
