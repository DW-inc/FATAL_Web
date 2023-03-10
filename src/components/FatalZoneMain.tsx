import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import web_logo from '../assets/image/MainPageLogo.png'
import web_text from 'src/assets/image/Main_Fatal.png'
import mobile_logo from '../assets/image/mobile_center_img.png'

import Button from '../components/commons/Button'
import { IScrollbuttonProps } from 'pages'

const MainWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  // position: 'relative',
  // backgroundColor: '#959595',
  overflow: 'hidden',
  backgroundImage: `url(${'Bg/Main_bg.png'})`,
  backgroundSize: '100% 100%',
})

const MainContent = styled('div')(
  css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 500%);
  `
)

const MainCenter = styled('div')(
  css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 400;
    p {
      font-size: 20px;
      padding-top: 13px;
    }
    @media (max-width: 706px) {
      width: 75%;
    }
  `
)

const MainText = styled('p')(
  css`
    font-weight: 500;
    font-size: 20px;
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

export default function FatalZoneMain({ id }: IScrollbuttonProps) {
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
    <MainWrapper id={id}>
      <MainCenter>
        <Image
          src={mobileResize >= 480 ? web_logo : mobile_logo}
          // width={mobileResize >= 480 ? 687 : 325}
          // height={mobileResize >= 480 ? 89 : 42}
          alt="logo"
          priority
        />
        <Image src={web_text} alt="logo_text" priority />
        <p>THROW IT INTO THE WORLD!</p>
        <MainText>
          A person who sees the light and prays, a person who wonders, a person
          who tries to grasp the situation. Cindy is staring blankly at the
          light and then approaches. &quot;Halo-b-11089&quot; written on the
          object.
        </MainText>
      </MainCenter>
      <MainContent>
        {/* <MainText>
        <p>5-5 Team-Based Action Tactical Game</p>
      </MainText> */}
        <div>
          <Button
            width="201px"
            height="54px"
            backgroundColor="#fff"
            type="button"
            color="#000"
            fontSize="20px"
            fontFamily="Bebas"
            fontStyle="normal"
            border="none"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
            }}
          >
            SEE MORE
          </Button>
        </div>
      </MainContent>
    </MainWrapper>
  )
}
