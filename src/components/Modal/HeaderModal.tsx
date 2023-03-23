import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {
  ClosingModalState,
  HeaderResponSiveModalState,
  LoginRegistryState,
  LoginUserInfoState,
} from 'src/commons/store'
import { css } from '@emotion/react'
import { breakpoints } from 'src/constans/MediaQuery'
import Image from 'next/image'
import HeaderUser_Image from 'src/assets/icon/header_image.png'
// interface IHeaderModalProps {
//   setIsResponsiveModal: React.Dispatch<React.SetStateAction<boolean>>
//   isResponsiveModal: boolean
//   setClosing: React.Dispatch<React.SetStateAction<boolean>>
//   closing: boolean
// }

interface IHeaderModalStyleProps {
  visible: boolean
  closingModal: boolean
}

export default function HeaderModal() {
  const router = useRouter()
  const [headerResponSiveModal, setHeaderResponsiveModal] = useRecoilState(
    HeaderResponSiveModalState
  )
  // 유저 정보 Recoil
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)

  // 모달 CSS 커스텀
  const [closingModal, setClosingModal] = useRecoilState(ClosingModalState)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(headerResponSiveModal)
  }, [headerResponSiveModal])

  const ClickCloseModal = () => {
    setHeaderResponsiveModal(!headerResponSiveModal)
  }

  return (
    <Wrapper closingModal={closingModal} visible={visible}>
      <InnerContainer>
        <HeaderModalMy>My</HeaderModalMy>
        <InnerDiver />
        {loginRegistry == null ? (
          <>
            <p style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}>
              LOGIN
            </p>
            <p style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}>
              SIGN UP
            </p>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image src={HeaderUser_Image} alt="user_image" />
            </div>
            <p>{loginUserInfo.user_nickname}</p>
          </div>
        )}

        <GuideTextLine>GUIDEBOOK</GuideTextLine>
        <InnerDiver />
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/')
            ClickCloseModal()
          }}
        >
          THE WOLRD
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/hero')
            ClickCloseModal()
          }}
        >
          HERO
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/guide')
            ClickCloseModal()
          }}
        >
          CONTROL
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
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

const Wrapper = styled.section<IHeaderModalStyleProps>`
  position: absolute;
  right: 0;
  top: 3.5rem;
  background-color: #000;
  width: calc(100% / 3 - 2rem);
  height: 100vh;
  z-index: 10;
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    width: calc(100% / 2 - 2rem);
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
  ${(props) =>
    props.closingModal &&
    css`
      transform: translateX(100%);
      transition: transform 0.5s ease-in-out;
    `}
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
    font-size: 18px;

    color: #808080;

    :hover {
      color: #75ffde;
    }
  }
`

const GuideTextLine = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding: 25px 0 8px 0;
  color: #ffffff;
`

const HeaderModalMy = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 8px;
  color: #ffffff;
`
