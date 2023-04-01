import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import styled from '@emotion/styled'
import { breakpoints } from 'src/constans/MediaQuery'

interface ICharaccterCommingModalProps {
  isOpenCommingSoonModal: boolean
  setIsOpenCommingSoonModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 250px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
  }
`

const ModalTitle = styled.h4`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #000000;
`

const ModalDetailText = styled.p`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1.875rem;
  text-align: center;
  color: #000000;
  margin-top: 1.8rem;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 1.2rem;
  }
`

const ModalConfirmBt = styled.button`
  width: 220px;
  height: 46px;
  background: #000000;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #fff;
  margin-top: 1.8rem;
  cursor: pointer;
`

export default function CharacterCommingModal({
  isOpenCommingSoonModal,
  setIsOpenCommingSoonModal,
}: ICharaccterCommingModalProps) {
  const handleClose = () => {
    setIsOpenCommingSoonModal(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenCommingSoonModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpenCommingSoonModal}>
          <ModalInnerContainer>
            <ModalTitle id="transition-modal-title">Notification</ModalTitle>
            <ModalDetailText id="transition-modal-description">
              The character will be released soon.
            </ModalDetailText>
            <ModalConfirmBt onClick={handleClose}>OK</ModalConfirmBt>
          </ModalInnerContainer>
        </Fade>
      </Modal>
    </div>
  )
}
