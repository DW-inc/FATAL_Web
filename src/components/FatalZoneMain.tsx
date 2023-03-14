import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import web_logo from 'src/assets/image/MainPageLogo.png'
import web_text from 'src/assets/image/new_Main_text.png'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import { IScrollbuttonProps } from 'pages'
import { Container } from '@mui/system'

const MainWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  // position: 'relative',
  // backgroundColor: '#959595',
  overflow: 'hidden',
  backgroundImage: `url(${'Bg/Main_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const MainCenter = styled('div')(
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 400;

    @media (max-width: 706px) {
    }
  `
)

const MainThrow = styled('p')(
  css`
    font-size: 3.2rem;
    color: #fff;
    text-align: center;
    font-family: 'Nextrue-Slant';
    opacity: 0.7;
    color: #ffffff;
    font-style: normal;
    margin-top: 23px;
    letter-spacing: 0.01em;
    @media (max-width: 960px) {
      font-size: 2.8rem;
    }
  `
)

const MainTextResource = styled('p')(
  css`
    width: 70%;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 0.8rem;
    @media (max-width: 960px) {
      width: 90%;
    }
  `
)

const MainTextRepression = styled('p')(
  css`
    width: 70%;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 0.8rem;
    @media (max-width: 960px) {
      width: 90%;
    }
  `
)

const MainText = styled('p')(
  css`
    width: 70%;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 0.8rem;
    @media (max-width: 960px) {
      width: 90%;
    }
  `
)

const MainMoreBt = styled.div`
  transform: translateY(100%);
  @media (max-width: 960px) {
    transform: translateY(50%);
  }
`

export default function FatalZoneMain({ id }: IScrollbuttonProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  //화면 resize
  const [mobileResize, setMobileResize] = useState<number>(0)
  const [isShowMore, setIsShowMore] = useState<boolean>(false)

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
      <Container maxWidth={'lg'}>
        <MainCenter>
          <div
            style={{
              marginBottom: '35px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={web_logo}
              alt="logo"
              style={{ width: '20%', height: '20%', minWidth: '180px' }}
            />
          </div>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src={web_text}
              alt="logo"
              priority
              style={{
                width: '50%',
                height: '50%',
                minWidth: '300px',
                minHeight: '60px',
              }}
            />
          </div>

          <MainThrow>THROW IT INTO THE WORLD!</MainThrow>
          <MainText>
            In 2190 humans are trying to install Dyson Spear on earth to take
            off into the next level of civilization. But just as it is early for
            humankind, the worst global catastrophe in human history is taking
            place.
          </MainText>
          <MainTextResource>
            New resource mineral GEM found under sinkhole. There was a battle
            between the world government FAITH and the resistance CREED over
            resources. In the meantime, there&apos;s a mix of lunatics and
            fanatics who have jumped for their own ends. The flames of madness
            rise from the battlefield.
          </MainTextResource>
          <MainTextRepression>
            In an era of repression, resistance, madness, and violence, Join the
            battle to reach your own goals and win your goals.
          </MainTextRepression>
          <MainMoreBt
            onMouseEnter={() => setIsShowMore(true)}
            onMouseLeave={() => setIsShowMore(false)}
          >
            {isShowMore ? (
              <Image src={showMore_on} alt="on" />
            ) : (
              <Image src={showMore_off} alt="off" />
            )}
          </MainMoreBt>
        </MainCenter>
      </Container>
    </MainWrapper>
  )
}
