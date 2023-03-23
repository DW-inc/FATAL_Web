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
import UserLogout_Image from 'src/assets/icon/exit_to_app.png'
import axios from 'axios'
import { removeTokenAll } from 'src/utils/cookies'
import Cookie from 'js-cookie'
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

  const LogOutOk = () => {
    axios
      .post('http://192.168.0.10:3000/logout', {})
      .then((res) => {
        setLoginRegistry(false)
        removeTokenAll()
        setLoginUserInfo({ user_email: null, user_nickname: null })
        Cookie.remove('user_info')
        // Add a small delay before reloading the page
        setTimeout(() => {
          location.reload()
        }, 500)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setHeaderResponsiveModal(false)
      setClosingModal(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, setClosingModal, setHeaderResponsiveModal])

  console.log(loginRegistry, 'hi ')

  return (
    <Wrapper closingModal={closingModal} visible={visible}>
      <InnerContainer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
          }}
        >
          <HeaderModalMy>My</HeaderModalMy>
          {loginRegistry ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={LogOutOk}
            >
              <Image
                src={UserLogout_Image}
                width={14}
                height={14}
                alt="logout_img"
              />
              <p style={{ paddingLeft: '0.4rem' }}>LOGOUT</p>
            </div>
          ) : null}
        </div>

        <InnerDiver />
        {loginRegistry ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 0 3rem 0 ',
            }}
          >
            <div style={{ border: '1px solid #fff' }}>
              <Image src={HeaderUser_Image} alt="user_image" />
            </div>
            <p>{loginUserInfo.user_nickname}</p>
          </div>
        ) : (
          <>
            <p
              style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
              onClick={() => router.push('/login')}
            >
              LOGIN
            </p>
            <p
              style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
              onClick={() => router.push('/signup')}
            >
              SIGN UP
            </p>
          </>
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
  display: flex;
  flex-direction: column;

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
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: calc(100% - 8rem);
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
  color: #ffffff;
`
