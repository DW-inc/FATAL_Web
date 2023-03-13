import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../commons/Button'

interface ICheckModalProps {
  isCheckText: string
  isModalTitle: string
  isCheckOpen: boolean
  setIsCheckText: React.Dispatch<React.SetStateAction<string>>
  setIsModalTitle: React.Dispatch<React.SetStateAction<string>>
  setIsCheckOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled('div')((theme) => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.8)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000000',
}))

const ModalInnerContainer = styled('div')((theme) => ({
  width: '30rem',
  height: '14.5rem',
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

export default function CheckModal({
  isCheckText,
  setIsCheckText,
  isCheckOpen,
  setIsCheckOpen,
  isModalTitle,
  setIsModalTitle,
}: ICheckModalProps) {
  const router = useRouter()

  const HomeClick = () => {
    router.push('/')
  }

  const CloseModalHandler = () => {
    setIsModalTitle('')
    setIsCheckOpen(false)
    setIsCheckText('')
  }

  return (
    <Wrapper>
      <ModalInnerContainer>
        <h4>{isModalTitle}</h4>
        <p>{isCheckText}</p>
        <div>
          <Button
            width="220px"
            height="46px"
            backgroundColor="#000"
            fontFamily="Bebas"
            fontSize="25px"
            color="#fff"
            style={{ textTransform: 'uppercase', textAlign: 'center' }}
            onClick={CloseModalHandler}
          >
            OK
          </Button>
        </div>
      </ModalInnerContainer>
    </Wrapper>
  )
}
