import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import web_logo from '../assets/image/MainPageLogo.png'
import mobile_logo from '../assets/image/mobile_center_img.png'

import Button from '../components/commons/Button'

const MainWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#959595',
  overflow: 'hidden',
})

const MainCenter = styled('div')(
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 400;
    p {
      font-size: 20px;
      padding-top: 13px;
    }
  `
)

const MainText = styled('div')(
  css`
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    text-align: center;
    padding-bottom: 5.5rem;
    font-family: 'Inter';
    font-style: normal;

    @media (max-width: 480px) {
      width: 80%;
    }
  `
)

const MainLogoText = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;
    text-align: center;
    color: #ffffff;
    padding-top: 2rem;
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  `
)

const MainContent = styled('div')(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
)

export default function FatalZoneMain() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  //화면 resize
  const [mobileResize, setMobileResize] = useState<number>(0)

  const handleResize = () => {
    setMobileResize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const time = setTimeout(() => {
      setMobileResize(window.innerWidth)
    }, 0.0000000000000000001)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(time)
    }
  }, [])

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

  return (
    <MainWrapper>
      <MainCenter>
        {mobileResize >= 480 ? (
          <MainText>
            <p>5-5 Team-Based Action Tactical Game</p>
          </MainText>
        ) : null}
        <Image
          src={mobileResize >= 480 ? web_logo : mobile_logo}
          width={mobileResize >= 480 ? 687 : 325}
          height={mobileResize >= 480 ? 89 : 42}
          alt="logo"
          priority
        />
        <MainLogoText>THROW IT INTO THE WOLRD!</MainLogoText>
      </MainCenter>
      <MainContent>
        {mobileResize <= 480 ? (
          <MainText>
            <p>5-5 Team-Based Action Tactical Game</p>
          </MainText>
        ) : null}
        {/* <MainText>
        <p>5-5 Team-Based Action Tactical Game</p>
      </MainText> */}
        <div>
          <Button
            width="201px"
            height="54px"
            backgroundColor="#313131"
            type="button"
            color="#fff"
            fontSize="18px"
            fontFamily="Inter"
            fontStyle="normal"
            border="none"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
            }}
          >
            START FREE
          </Button>
        </div>
      </MainContent>
    </MainWrapper>
  )
}
