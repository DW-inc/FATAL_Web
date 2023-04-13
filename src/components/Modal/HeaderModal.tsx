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
import { Request_CharacterInfo } from 'src/constans/Characters'

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

  const characterInfo = Request_CharacterInfo.find(
    (character) => character.id === loginUserInfo.user_character
  )

  useEffect(() => {
    setVisible(headerResponSiveModal)
  }, [headerResponSiveModal])

  const ClickCloseModal = () => {
    setHeaderResponsiveModal(!headerResponSiveModal)
  }

  const LogOutOk = () => {
    axios
      // .post('http://43.155.153.201:3002/logout', {})
      .post('https://www.ffffatalbomb.com/logout', {})
      // .post('http://125.129.193.36:3002/logout', {})
      .then((res) => {
        setLoginRegistry(false)
        removeTokenAll()
        setLoginUserInfo({
          user_email: null,
          user_nickname: null,
          user_character: null,
        })
        Cookie.remove('user_info')
        // Add a small delay before reloading the page
        setTimeout(() => {
          location.reload()
        }, 500)
      })
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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setHeaderResponsiveModal(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setHeaderResponsiveModal])

  return (
    <Wrapper closingModal={closingModal} visible={visible}>
      <InnerContainer>
        {loginRegistry ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HeaderModalMy>My</HeaderModalMy> <InnerDiver />
        </div>

        {loginRegistry ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 0 3rem 0 ',
            }}
          >
            <div style={{ border: '1px solid #fff' }}>
              {characterInfo?.header_img_url && (
                <Image
                  src={characterInfo.header_img_url}
                  width={32}
                  height={32}
                  alt="user_image"
                />
              )}
            </div>
            <p style={{ marginLeft: '1rem' }}>{loginUserInfo.user_nickname}</p>
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
              style={{ padding: '1rem 0 1rem 0', cursor: 'pointer' }}
              onClick={() => router.push('/signup')}
            >
              SIGN UP
            </p>
          </>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <GuideTextLine>GUIDEBOOK</GuideTextLine>
          <InnerDiver />
        </div>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/TheWorld')
            ClickCloseModal()
          }}
        >
          THE WORLD
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/hero')
            ClickCloseModal()
          }}
        >
          HEROS
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/control')
            ClickCloseModal()
          }}
        >
          CONTROL
        </p>
        <p
          style={{ padding: '1rem 0 0.5rem 0', cursor: 'pointer' }}
          onClick={() => {
            router.push('/modguide')
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
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 3.5rem;
  background-color: #000;
  width: calc(100% / 3 - 2rem);
  width: 100%;
  z-index: 10;
  transform: ${(props) =>
    props.visible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-in-out;
  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    /* width: calc(100% / 2); */
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    /* width: calc(100% - 8rem); */
  }
  ${(props) =>
    props.closingModal &&
    css`
      transform: translateY(-100%);
      transition: transform 0.5s ease-in-out;
    `}
`

const InnerDiver = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.5;
`

const InnerContainer = styled.div`
  padding: 2rem;
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
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
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-right: 1rem;
`

const HeaderModalMy = styled.div`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-right: 1rem;
`
