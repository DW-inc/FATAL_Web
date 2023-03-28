import { AppBar, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css } from '@mui/material/styles'
import fatalbomblogo from '../../assets/image/header_logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  ClosingModalState,
  HeaderResponSiveModalState,
  LoginRegistryState,
  LoginUserDataState,
  LoginUserInfoState,
} from 'src/commons/store'
import Cookie from 'js-cookie'
import axios from 'axios'
import { getAccessToken, removeTokenAll } from 'src/utils/cookies'
import playBtOff from 'src/assets/bt_img/playBt_off.png'
import playBtOn from 'src/assets/bt_img/playBt_on.png'
import styled from '@emotion/styled'
import Link from 'next/link'
import Responsive_MenuImg from 'src/assets/icon/responsive_menu.png'
import Responsive_ProfileImg from 'src/assets/icon/person.png'
import HeaderModal from '../Modal/HeaderModal'
import ProgramCheckModal from '../Modal/ProgramCheckModal'
import { breakpoints } from 'src/constans/MediaQuery'
import LoginRequiredModal from '../Modal/LoginRequiredModal'
import { useHasMounted } from '../Hook/useHasMounted'

const useStyles = makeStyles((theme) => ({}))

const HeaderAppbar = styled(AppBar)({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
})

const HeaderContainer = styled(Container)((theme) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: '#050505',
  '@media (max-width: 980px)': {
    height: '60px',
  },
}))

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 41px;
  @media (max-width: 980px) {
    display: none;
  }
`

const HeaderPlay = styled('div')(
  (theme) => css`
    width: 153px;
    height: 44px;
    background: #ffffff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    @media (max-width: 640px) {
      display: none;
      width: 0;
    }
  `
)

const TopPeopleIcon = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
  '&:hover': {
    color: '#75FFDE',
  },
}))

const TopGuide = styled('div')((theme) => ({
  display: 'inline-block',
}))

const TopDownload = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #75ffde;
  }
`

const TopCircleIcon = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #75ffde;
  }
`

const ResponsiveContainer = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    gap: 41px;
  }
`

const GuideDropBtn = styled.div`
  font-family: Bebas;
  color: white;
  font-weight: 400;
  font-size: 20px;
  border: none;
  padding: 32px 0;
  &:hover {
    color: #75ffde;
  }
`

const DropDownList = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  min-width: 195px;
  border-top: 3px solid #53ffd6;
  z-index: 1;
  right: -70px;
  pointer-events: all;

  &:hover {
    display: block;
  }

  a {
    padding: 12px 16px;
    font-family: 'Bebas';
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    display: block;
    color: #fff;

    &:hover {
      color: #75ffde;
    }
  }
  .dropdown_logout {
    padding: 12px 16px;
    font-family: 'Bebas';
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    display: block;
    color: #fff;
    /* right: -10px; */
    &:hover {
      color: #75ffde;
    }
  }
`

const LoginDownList = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  min-width: 140px;
  border-top: 3px solid #53ffd6;
  z-index: 1;
  right: -55px;
  pointer-events: all;

  &:hover {
    display: block;
  }

  a {
    padding: 12px 16px;
    font-family: 'Bebas';
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    display: block;
    color: #fff;

    &:hover {
      color: #75ffde;
    }
  }
  .dropdown_logout {
    padding: 12px 16px;
    font-family: 'Bebas';
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    display: block;
    color: #fff;
    &:hover {
      color: #75ffde;
    }
  }
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`

const MainMoreBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/BUTTON_OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 187px;
  height: 69px;
  transition: background-image 0.3s ease;
  font-family: 'Nextrue-Slant';
  font-size: 40px;

  &:hover {
    background-image: url('/BUTTON_ON.png');
  }

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    padding: 0;
  }
`

export default function LayoutHeader() {
  const router = useRouter()
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [isPlay, setIsPlay] = useState<boolean>(false)

  // 반응형 메뉴모달
  // const [isResponsiveModal, setIsResponsiveModal] = useState<boolean>(false)

  const [headerResponSiveModal, setHeaderResponsiveModal] = useRecoilState(
    HeaderResponSiveModalState
  )

  // close모달 전용 state
  const [closingModal, setClosingModal] = useRecoilState(ClosingModalState)
  // const [closing, setClosing] = useState(false)

  const [isPlayModal, setIsPlayModal] = useState<boolean>(false)
  const [loginRequired, setLoginRequired] = useState<boolean>(false)

  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  // if (typeof window === 'undefined') {
  //   return null
  // }

  const RunProgramModal = () => {
    if (loginRegistry) {
      setIsPlayModal(!isPlayModal)
    } else {
      // You can add any action here that you want to perform when the user is not logged in.
      // For example, you can show a message or redirect the user to the login page.
      console.log('로그인 안되어있다')
      setLoginRequired(!loginRequired)
    }
  }

  function RunProgram() {
    const url = 'Text:\\'
    const exec = document.createElement('a')
    exec.setAttribute('href', url)
    exec.click()
  }

  const ClickRunProgram = () => {
    // isMyApp()
    const url = 'Text:\\'
    const exec = document.createElement('a')
    exec.setAttribute('href', url)
    exec.click()
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

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.post('http://192.168.0.10:3000/Checking', {
  //       headers: {
  //         Authorization: `Bearer ${getAccessToken()}`,
  //         'Content-Type': 'application/json',
  //       },
  //       withCredentials: true,
  //     })

  //     if (response.status === 200) {
  //       setLoginRegistry(true)
  //       console.log(response)
  //     } else {
  //       setLoginRegistry(false)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     setLoginRegistry(false)
  //   }
  // }

  // useEffect(() => {
  //   if (loginRegistry) {
  //     console.log('Fetching user data')
  //     fetchUserData()
  //   }
  // }, [loginRegistry])

  const ResponsiveClickOpen = () => {
    setHeaderResponsiveModal(true)
  }

  const ResponsiveClickClose = () => {
    setClosingModal(true)
    setTimeout(() => {
      setHeaderResponsiveModal(false)
      setClosingModal(false)
    }, 600)
  }

  const LoginHandler = () => (
    <>
      <TopCircleIcon onClick={() => router.push('/login')}>LOGIN</TopCircleIcon>
      <TopPeopleIcon onClick={() => router.push('/signup')}>
        SIGN UP
      </TopPeopleIcon>
    </>
  )

  const LoginRequiredButton = () => (
    <>
      <DropdownContainer>
        <GuideDropBtn>id_url/{loginUserInfo.user_nickname}</GuideDropBtn>
        <LoginDownList className="dropdown-content">
          <div className="dropdown_logout" onClick={LogOutOk}>
            Logout
          </div>
        </LoginDownList>
      </DropdownContainer>
    </>
  )

  return (
    <>
      {loginRequired ? (
        <LoginRequiredModal
          loginRequired={loginRequired}
          setLoginRequired={setLoginRequired}
        />
      ) : null}
      {isPlayModal ? (
        <ProgramCheckModal
          setIsPlayModal={setIsPlayModal}
          isPlayModal={isPlayModal}
        />
      ) : null}
      {headerResponSiveModal ? <HeaderModal /> : null}

      <HeaderAppbar>
        <HeaderContainer maxWidth={false}>
          <Image
            src={fatalbomblogo}
            alt="logo"
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />

          <TopContainer>
            <DropdownContainer>
              <GuideDropBtn>GUIDEBOOK</GuideDropBtn>
              <DropDownList className="dropdown-content">
                <Link href="/" passHref>
                  <div>THE WORLD</div>
                </Link>
                <Link href="/hero" passHref>
                  <div>HERO</div>
                </Link>
                <Link href="/guide" passHref>
                  <div>CONTROL</div>
                </Link>
                <Link href="#" passHref>
                  <div>MOD GUIDE</div>
                </Link>
              </DropDownList>
            </DropdownContainer>
            {/* <TopDownload onClick={() => router.push('/download')}>
              DOWNLOAD
            </TopDownload> */}

            {loginRegistry === null ? (
              <LoginHandler />
            ) : loginRegistry ? (
              <LoginRequiredButton />
            ) : (
              <LoginHandler />
            )}

            <MainMoreBt onClick={RunProgramModal}>PLAY</MainMoreBt>
          </TopContainer>
          <ResponsiveContainer>
            {headerResponSiveModal ? (
              <div onClick={ResponsiveClickClose}>
                <Image
                  src={Responsive_MenuImg}
                  alt="responesive_img"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ) : (
              <div onClick={ResponsiveClickOpen}>
                <Image
                  src={Responsive_MenuImg}
                  alt="responesive_img"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            )}
          </ResponsiveContainer>
        </HeaderContainer>
      </HeaderAppbar>
    </>
  )
}
