import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from '../commons/Button'

interface ILoginRequiredProps {
  loginRequired: boolean
  setLoginRequired: React.Dispatch<React.SetStateAction<boolean>>
}

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
    fontFamily: 'Bebas Neue Pro',
    fontWeight: '400',
    fontSize: '26px',
  },
}))

export default function LoginRequiredModal({
  loginRequired,
  setLoginRequired,
}: ILoginRequiredProps) {
  const router = useRouter()

  const CloseModalRequired = () => {
    setLoginRequired(!loginRequired)
  }

  const LoginClick = () => {
    router.push('/login')
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setLoginRequired(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, setLoginRequired])

  return (
    <Wrapper>
      <ModalInnerContainer>
        <h4>Notification</h4>
        <p>You need to be logged in to start the game</p>
        <div>
          <Button
            width="220px"
            height="46px"
            backgroundColor="#000"
            fontFamily="Bebas"
            fontSize="25px"
            color="#fff"
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              marginLeft: '3rem',
            }}
            onClick={LoginClick}
          >
            login now
          </Button>
        </div>
      </ModalInnerContainer>
    </Wrapper>
  )
}
