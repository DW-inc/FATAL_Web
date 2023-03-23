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
        <p>This service requires a login.</p>
        <div>
          <Button
            type="button"
            backgroundColor="#737373"
            width="220px"
            height="46px"
            fontFamily="Bebas"
            fontStyle="normal"
            fontSize="25px"
            color="#fff"
            border="none"
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={CloseModalRequired}
          >
            leave
          </Button>
          <Button
            type="button"
            width="220px"
            height="46px"
            backgroundColor="#000"
            fontStyle="normal"
            fontFamily="Bebas"
            fontSize="25px"
            color="#fff"
            border="none"
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              marginLeft: '3rem',
              cursor: 'pointer',
            }}
            onClick={LoginClick}
          >
            login
          </Button>
        </div>
      </ModalInnerContainer>
    </Wrapper>
  )
}
