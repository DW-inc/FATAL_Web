import { AppBar, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css } from '@mui/material/styles'
import fatalbomblogo from '../../assets/image/header_logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {
  LoginRegistryState,
  LoginUserDataState,
  LoginUserInfoState,
} from 'src/commons/store'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import { getAccessToken, removeTokenAll } from 'src/utils/cookies'
import playBtOff from 'src/assets/bt_img/playBt_off.png'
import playBtOn from 'src/assets/bt_img/playBt_on.png'
import styled from '@emotion/styled'
import Link from 'next/link'
import Responsive_MenuImg from 'src/assets/icon/responsive_menu.png'
import Responsive_ProfileImg from 'src/assets/icon/person.png'
import HeaderModal from '../Modal/HeaderModal'

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
  fontWeight: '600',
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
  font-weight: 600;
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
  font-weight: 600;
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

const GuideDropBtn = styled('button')((theme) => ({
  fontFamily: 'Bebas',
  color: 'white',
  fontWeight: '600',
  fontSize: '20px',
  border: 'none',
  padding: '32px 0',
  '&:hover': {
    color: '#75FFDE',
  },
}))

const DropDownList = styled('div')((theme) => ({
  display: 'none',
  position: 'absolute',
  backgroundColor: '#000',
  minWidth: '195px',
  // boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  borderTop: '3px solid #53FFD6',
  zIndex: '1',
  right: '-70px',
  '&:hover': {
    display: 'block',
  },
  pointerEvents: 'all',
  a: {
    padding: '12px 16px',
    fontFamily: 'Bebas',
    fontWeight: '400',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    color: '#fff',
    '&:hover': {
      color: '#75FFDE',
    },
  },
}))

const DropdownContainer = styled('div')((theme) => ({
  position: 'relative',
  display: 'inline-block',
  '&:hover': {
    '.dropdown-content': {
      display: 'block',
    },
  },
}))

export default function LayoutHeader() {
  const router = useRouter()
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const [isResponsiveModal, setIsResponsiveModal] = useState<boolean>(false)

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
        setLoginUserInfo({ user_email: '', user_nickname: '' })

        // Add a small delay before reloading the page
        setTimeout(() => {
          location.reload()
        }, 500)
      })
      .catch((err) => console.log(err))
  }

  const fetchUserData = async () => {
    try {
      const response = await axios.post('http://192.168.0.10:3000/Checking', {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      if (response.status === 200) {
        // setLoginRegistry(true)
        console.log(response)
      } else {
        setLoginRegistry(false)
      }
    } catch (error) {
      console.error(error)
      setLoginRegistry(false)
    }
  }

  useEffect(() => {
    if (loginRegistry) {
      console.log('Fetching user data')
      fetchUserData()
    }
  }, [loginRegistry])

  const ResponsiveClick = () => {
    setIsResponsiveModal(!isResponsiveModal)
  }
  console.log(loginUserInfo)

  return (
    <>
      {isResponsiveModal ? (
        <HeaderModal
          setIsResponsiveModal={setIsResponsiveModal}
          isResponsiveModal={isResponsiveModal}
        />
      ) : null}
      <HeaderAppbar>
        <HeaderContainer maxWidth={false}>
          {/* <HeaderLogo > */}
          <Image
            src={fatalbomblogo}
            alt="logo"
            onClick={() => router.push('/')}
          />

          <TopContainer>
            <DropdownContainer>
              <GuideDropBtn type="button">GUIDEBOOK</GuideDropBtn>
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
            <TopDownload onClick={() => router.push('/download')}>
              DOWNLOAD
            </TopDownload>
            {/* <TopCircleIcon onClick={() => router.push('/login')}>
              LOGIN
            </TopCircleIcon>
            <TopPeopleIcon onClick={() => router.push('/signup')}>
              SIGN UP
            </TopPeopleIcon> */}

            {loginRegistry ? (
              <>
                <div>{loginUserInfo.user_nickname}</div>
                <div onClick={LogOutOk}>로그아웃</div>
              </>
            ) : (
              <>
                <TopCircleIcon onClick={() => router.push('/login')}>
                  LOGIN
                </TopCircleIcon>
                <TopPeopleIcon onClick={() => router.push('/signup')}>
                  SIGN UP
                </TopPeopleIcon>
              </>
            )}

            <div
              onMouseEnter={() => setIsPlay(true)}
              onMouseLeave={() => setIsPlay(false)}
              style={{ position: 'relative' }}
              onClick={ClickRunProgram}
            >
              {isPlay ? (
                <div>
                  <Image
                    src={playBtOn}
                    alt="playBt"
                    onClick={ClickRunProgram}
                  />
                  <p
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontFamily: 'Nextrue-Slant',
                      fontWeight: '600',
                      fontSize: '40px',
                      color: '#fff',
                    }}
                  >
                    PLAY
                  </p>
                </div>
              ) : (
                <div>
                  <Image src={playBtOff} alt="playBt" />
                  <p
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontFamily: 'Nextrue-Slant',
                      fontWeight: '600',
                      fontSize: '40px',
                      color: '#fff',
                    }}
                  >
                    PLAY
                  </p>
                </div>
              )}
            </div>
          </TopContainer>
          <ResponsiveContainer>
            <div>
              <Image src={Responsive_ProfileImg} alt="responesive_img" />
            </div>
            <div onClick={ResponsiveClick}>
              <Image src={Responsive_MenuImg} alt="responesive_img" />
            </div>
          </ResponsiveContainer>
        </HeaderContainer>
      </HeaderAppbar>
    </>
  )
}
