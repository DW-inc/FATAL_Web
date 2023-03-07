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

const TopNaviContainer = styled('div')((theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
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
  const classes = useStyles()
  const router = useRouter()
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const NaviMenu = ['HOME', 'GUIDBOOK', 'DOWNLOAD', 'CONTACT']

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const ClickMain = () => {
    router.push('/')
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
        <TopNaviContainer>
          {NaviMenu.map((value, index) => (
            <NaviContents key={index}>{value}</NaviContents>
          ))}
        </TopNaviContainer>
        <TopContainer>
          <TopCircleIcon onClick={() => router.push('/login')}>
            LOGIN
          </TopCircleIcon>
          <TopPeopleIcon onClick={() => router.push('/signup')}>
            SIGN UP
          </TopPeopleIcon>
          <HeaderPlay>PLAY</HeaderPlay>
        </TopContainer>
      </HeaderContainer>
    </HeaderAppbar>
  )
}
