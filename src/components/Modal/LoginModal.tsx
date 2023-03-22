import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from 'src/constans/MediaQuery'
//로그인 실패 * 비밀번호 틀렸을시 나오는 모달

interface ILoginFalseModalProps {
  setIsOpenFalseLogin: React.Dispatch<React.SetStateAction<boolean>>
  isOpenFalseLogin: boolean
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div`
  width: 32rem;
  height: 18rem;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 2rem);
    height: 18rem;
  }
  h5 {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #000000;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: 600px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
    }
  }
  p:nth-of-type(1) {
    font-family: 'Bebas Neue Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #000000;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: 600px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 1.5rem;
    }
  }
  p:nth-of-type(2) {
    font-family: 'Bebas Neue Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    color: #000000;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: 600px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 1.1rem;
      padding-top: 0.5rem;
    }
  }
  p:nth-of-type(3) {
    font-family: 'Bebas Neue Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.5);
    padding-top: 42px;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: 600px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 1rem;
      padding-top: 2rem;
    }
  }
`

const ModalButton = styled.button`
  width: 220px;
  height: 46px;
  background: #000000;
  color: #fff;

  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
`

export default function FalseLoginModal({
  setIsOpenFalseLogin,
  isOpenFalseLogin,
}: ILoginFalseModalProps) {
  const ClickCloseModal = () => {
    setIsOpenFalseLogin(!isOpenFalseLogin)
  }

  return (
    <Wrapper onClick={ClickCloseModal}>
      <InnerContainer>
        <h5>LOGIN ERROR</h5>
        <p>The user name or password is not valid.</p>
        <p>
          if you forget your ID or password, please contact me by mej@pprk.xyz
        </p>
        <p>sign up</p>
        <ModalButton type="button" onClick={ClickCloseModal}>
          OK
        </ModalButton>
      </InnerContainer>
    </Wrapper>
  )
}
