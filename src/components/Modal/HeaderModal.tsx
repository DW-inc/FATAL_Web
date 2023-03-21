import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

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

  const router = useRouter()

  return (
    <Wrapper>
      <InnerContainer>
        <p
          onClick={() => {
            router.push('/guide')
            ClickCloseModal()
          }}
        >
          GUIDEBOOK
        </p>
        <InnerDiver />
        <p
          onClick={() => {
            router.push('/')
            ClickCloseModal()
          }}
        >
          THE WOLRD
        </p>
        <p
          onClick={() => {
            router.push('/hero')
            ClickCloseModal()
          }}
        >
          HERO
        </p>
        <p
          onClick={() => {
            router.push('/guide')
            ClickCloseModal()
          }}
        >
          CONTROL
        </p>
        <p
          onClick={() => {
            router.push('/')
            ClickCloseModal()
          }}
        >
          MOD GUIDE
        </p>
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
    top: 3.5rem;
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
