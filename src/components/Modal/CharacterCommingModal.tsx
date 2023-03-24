import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from 'src/constans/MediaQuery'

interface ICharaccterCommingModalProps {
  isOpenCommingSoonModal: boolean
  setIsOpenCommingSoonModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const ModalInnerContainer = styled.div`
  width: 500px;
  height: 250px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.smallTablet}px) {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
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
  const ClickCloseModal = () => {
    setIsOpenCommingSoonModal(!isOpenCommingSoonModal)
  }
  return (
    <Wrapper>
      <ModalInnerContainer>
        <ModalTitle>Notification</ModalTitle>
        <ModalDetailText>The character will be released soon.</ModalDetailText>
        <ModalConfirmBt type="button" onClick={ClickCloseModal}>
          OK
        </ModalConfirmBt>
      </ModalInnerContainer>
    </Wrapper>
  )
}
