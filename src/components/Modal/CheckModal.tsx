import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../commons/Button'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { breakpoints } from 'src/constans/MediaQuery'

interface ICheckModalProps {
  isCheckText: string
  isModalTitle: string
  falseCheckText: string
  isCheckOpen: boolean
  setIsCheckText: React.Dispatch<React.SetStateAction<string>>
  setFalseCheckText: React.Dispatch<React.SetStateAction<string>>
  setIsModalTitle: React.Dispatch<React.SetStateAction<string>>
  setIsCheckOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IGoHomeModalProps {
  isHomeButton: boolean
  setIsHomeButton: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 14.5rem;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 30px;
  }

  p:nth-of-type(1) {
    font-family: 'Bebas Neue Pro';
    font-weight: 400;
    font-size: 22px;
    padding-top: 1rem;
  }

  p:nth-of-type(2) {
    font-family: 'Bebas Neue Pro';
    font-weight: 400;
    font-size: 22px;
    padding-top: 1rem;
    color: #000;
  }
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
  }
`

const NotAvailableText = styled.span`
  padding-left: 0.5rem;
  color: red;
`

export default function CheckModal({
  isCheckText,
  setIsCheckText,
  isCheckOpen,
  setIsCheckOpen,
  isModalTitle,
  setIsModalTitle,
  falseCheckText,
  setFalseCheckText,
}: ICheckModalProps) {
  const router = useRouter()

  const HomeClick = () => {
    router.push('/')
  }

  const CloseModalHandler = () => {
    setIsCheckOpen(false)
    setIsModalTitle('')
    setIsCheckText('')
    setFalseCheckText('')
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isCheckOpen}
        onClose={CloseModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCheckOpen}>
          <ModalInnerContainer>
            <h4>{isModalTitle}</h4>
            <p>{isCheckText}</p>
            <p>
              {falseCheckText.startsWith('This email is not') ||
              falseCheckText.startsWith('This nickname is not')
                ? falseCheckText.split(' not')[0]
                : falseCheckText}
              {(falseCheckText.startsWith('This email is not') ||
                falseCheckText.startsWith('This nickname is not')) && (
                <NotAvailableText>not available.</NotAvailableText>
              )}
            </p>
            <div>
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
                  marginTop: '1.5rem',
                  cursor: 'pointer',
                }}
                onClick={CloseModalHandler}
              >
                OK
              </Button>
            </div>
          </ModalInnerContainer>
        </Fade>
      </Modal>
    </div>
  )
}

interface IGoHomeModalProps {
  isHomeButton: boolean
  setIsHomeButton: React.Dispatch<React.SetStateAction<boolean>>
}

export function GoHomeModal({
  isHomeButton,
  setIsHomeButton,
}: IGoHomeModalProps) {
  const router = useRouter()
  const ClickClose = () => {
    setIsHomeButton(!isHomeButton)
  }

  const SignupLeave = () => {
    setIsHomeButton(!isHomeButton)
    router.push('/')
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isHomeButton}
        onClose={ClickClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isHomeButton}>
          <GoHomeInnerContainer>
            <h4>Notification</h4>
            <p>
              If you leave in the middle,
              <br /> you lose the information you are writing.
            </p>
            <ButtonWrapper>
              <button onClick={SignupLeave} style={{ cursor: 'pointer' }}>
                LEAVE
              </button>
              <button onClick={ClickClose} style={{ cursor: 'pointer' }}>
                STAY
              </button>
            </ButtonWrapper>
          </GoHomeInnerContainer>
        </Fade>
      </Modal>
    </div>
  )
}

const GoHomeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
`

const GoHomeInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32rem;
  height: 14.5rem;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  outline: none;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    width: 30rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
  }
  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 30px;
  }

  p:nth-of-type(1) {
    width: 70%;
    font-family: 'Bebas Neue Pro';
    font-weight: 400;
    font-size: 22px;
    padding-top: 1rem;
    text-align: center;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      width: 100%;
      font-size: 20px;
    }
  }
`

const ButtonWrapper = styled.div`
  margin-top: 2.5rem;

  button:nth-of-type(1) {
    width: 200px;
    height: 46px;
    background: #737373;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 20px;
      width: 150px;
    }
  }
  button:nth-of-type(2) {
    width: 200px;
    height: 46px;
    background: #000000;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    margin-left: 55px;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 20px;
      width: 150px;
      margin-left: 25px;
    }
  }
`
