import { AppBar, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css, styled } from '@mui/material/styles'
import { color } from '@mui/system'
import fatalbomblogo from '../../assets/image/fatalbomb.png'
import mobile_fatalbomb_logo from '../../assets/image/mobile_header_logo.png'
import Image from 'next/image'
import people from '../../assets/icon/human.png'
import circle from '../../assets/icon/Circle.png'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {
  LoginRegistryState,
  LoginUserDataState,
  LoginUserInfoState,
} from 'src/commons/store'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import { removeTokenAll } from 'src/utils/cookies'

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

const TopContainer = styled('div')((theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '41px',
}))

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
}))

const TopGuid = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
}))

const TopDownload = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
}))

const TopCircleIcon = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',

  color: '#FFFFFF',
  cursor: 'pointer',
}))
const NaviContents = styled('div')((theme) => ({
  width: '86px',
  height: '44px',

  display: 'flex',
  alignItems: 'center',

  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center',
  color: '#FFFFFF',
  cursor: 'pointer',
}))

export default function LayoutHeader() {
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const router = useRouter()

  const LogOutOk = () => {
    axios
      .post('http://192.168.0.10:3000/logout', {})
      .then((res) => {
        setLoginUserInfo({ user_email: '', user_nickname: '' })
        location.reload()
        removeTokenAll()
        setLoginRegistry(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <HeaderAppbar>
      <HeaderContainer maxWidth={false}>
        {/* <HeaderLogo > */}
        <Image
          src={fatalbomblogo}
          alt="logo"
          onClick={() => router.push('/')}
        />

        <TopContainer>
          <TopGuid>GUIDBOOK</TopGuid>
          <TopDownload>DOWNLOAD</TopDownload>
          {loginRegistry ? (
            <>
              <p>{loginUserInfo.user_nickname}</p>
              <p onClick={LogOutOk}>로그아웃</p>
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

          <HeaderPlay>PLAY</HeaderPlay>
        </TopContainer>
      </HeaderContainer>
    </HeaderAppbar>
  )
}
