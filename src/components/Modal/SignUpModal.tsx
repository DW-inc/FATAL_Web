import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../commons/Button'

const Wrapper = styled('div')((theme) => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.8)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',
}))

const ModalInnerContainer = styled('div')((theme) => ({
  width: '37.5rem',
  height: '16rem',
  background: '#FFF',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  h4: {
    fontFamily: 'Bebas',
    fontWeight: '400',
    fontSize: '30px',
  },
  p: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: '22px',
  },
}))

export default function SignUpModal() {
  const router = useRouter()

  const HomeClick = () => {
    router.push('/')
  }

  const LoginClick = () => {
    router.push('/login')
  }

  return (
    <Wrapper>
      <ModalInnerContainer>
        <h4>Successful</h4>
        <p>Your ID has been successfully completed.</p>
        <div>
          <Button
            width="220px"
            height="46px"
            backgroundColor="#737373"
            fontFamily="Bebas"
            fontSize="25px"
            style={{ textTransform: 'uppercase', textAlign: 'center' }}
            color="#fff"
            onClick={HomeClick}
          >
            home page
          </Button>
          <Button
            width="220px"
            height="46px"
            backgroundColor="#000"
            fontFamily="Bebas"
            fontSize="25px"
            color="#fff"
            style={{ textTransform: 'uppercase', textAlign: 'center' }}
            onClick={LoginClick}
          >
            login now
          </Button>
        </div>
      </ModalInnerContainer>
    </Wrapper>
  )
}
