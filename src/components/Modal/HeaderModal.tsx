import React from 'react'
import styled from '@emotion/styled'

interface IHeaderModalProps {
  setIsResponsiveModal: React.Dispatch<React.SetStateAction<boolean>>
  isResponsiveModal: boolean
}

export default function HeaderModal({
  setIsResponsiveModal,
  isResponsiveModal,
}: IHeaderModalProps) {
  const ClickCloseModal = () => {
    setIsResponsiveModal(!isResponsiveModal)
  }

  return (
    <Wrapper>
      <InnerContainer>
        <p>GUIDEBOOK</p>
        <InnerDiver />
        <p>THE WOLRD</p>
        <p>HERO</p>
        <p>CONTROL</p>
        <p>MOD GUIDE</p>
      </InnerContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: absolute;
  right: 0;
  top: 5rem;
  background-color: #000;
  width: calc(100% / 2 - 3rem);
  height: 800px;
  z-index: 10;
  @media (max-width: 540px) {
    width: calc(100% / 2);
  }
`

const InnerDiver = styled.div`
  border: 1px solid #fff;
  opacity: 0.5;
`

const InnerContainer = styled.div`
  padding: 2rem;
  color: #fff;
  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: #808080;
    :hover {
      color: #75ffde;
    }
  }
`
