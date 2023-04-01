import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from '../commons/Button'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

interface ILoginRequiredProps {
  loginRequired: boolean
  setLoginRequired: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.5rem;
  height: 16rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);

  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 30px;
  }

  p {
    font-family: 'Bebas Neue Pro';
    font-weight: 400;
    font-size: 26px;
  }
`

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
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={loginRequired}
        onClose={CloseModalRequired}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginRequired}>
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
        </Fade>
      </Modal>
    </div>
  )
}
