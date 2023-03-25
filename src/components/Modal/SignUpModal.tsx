import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../commons/Button'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { breakpoints } from 'src/constans/MediaQuery'

interface ISignupModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// const Wrapper = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `

const ModalInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 250px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  /* background-color: background.paper, */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.2);
  h4 {
    font-family: 'Bebas';
    font-weight: 400;
    font-size: 30px;
  }
  p {
    font-family: 'Bebas Neue Pro';
    font-weight: 400;
    font-size: 26px;
    @media only screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media only screen and (max-width: ${breakpoints.smallTablet}px) {
    }

    @media only screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 320px;
  }
`

const HomeButton = styled.button`
  width: 220px;
  height: 46px;
  background-color: #737373;
  font-family: 'Bebas';
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 8rem;
  }
`

const LoginButton = styled.button`
  width: 220px;
  height: 46px;
  background-color: #000;
  font-family: 'Bebas';
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-left: 3rem;
  cursor: pointer;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    margin-left: 1.5rem;
    width: 8rem;
  }
`

export default function SignUpModal({ isOpen, setIsOpen }: ISignupModalProps) {
  const router = useRouter()

  const HomeClick = () => {
    router.push('/')
  }

  const LoginClick = () => {
    router.push('/login')
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <ModalInnerContainer>
            <h4 id="transition-modal-title">Successful</h4>
            <p id="transition-modal-description">
              Your ID has been successfully completed.
            </p>
            <div>
              <HomeButton onClick={HomeClick}>home page</HomeButton>
              <LoginButton onClick={LoginClick}>login now</LoginButton>
            </div>
          </ModalInnerContainer>
        </Fade>
      </Modal>
    </div>
  )
}
