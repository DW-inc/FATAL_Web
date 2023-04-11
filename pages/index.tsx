import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import FatalZoneMain from 'src/components/FatalZoneMain'
import FatalHero from 'src/components/FatalHero'
import FatalMod from 'src/components/FatalMod'
import FatalZoneField from 'src/components/FatalZoneField'
import FatalPlay from 'src/components/FatalPlay'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/pagination'
import SwiperCore, { Mousewheel, Pagination, Virtual } from 'swiper'
import { breakpoints } from 'src/constans/MediaQuery'
import { useRecoilState } from 'recoil'
import { HeaderResponSiveModalState } from 'src/commons/store'
import LeftMoveIcon from 'src/assets/icon/Screw.png'
import TopButtonImg from 'src/assets/bt_img/Topbt.png'
import LeftTrack from 'src/assets/icon/Left_track.png'

export interface Theme {
  breakpoints: {
    down: (breakpoint: string) => string
  }
}

export interface IScrollbuttonProps {
  id: string
}

export interface R3FProps {
  idolGltfSrc: string
  nurseGltfSrc: string
  ceilSrc: string
  standSrc: string
  logoSrc: string
  hallSrc: string
  standBeamSrc: string
  groundTexture: string[]
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  touch-action: manipulation;
  /* padding-top: 80px; */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 0rem;
  }
  .my-no-swiping {
    pointer-events: none; /* 이벤트 무시 */
  }
  .my-swiper .swiper-slide {
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
    transform: translate3d(0, 0, 0) !important;
    -webkit-transform: translate3d(0, 0, 0) !important;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .swiper-container {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }

  .swiper-pagination.swiper-pagination-vertical.swiper-pagination-bullets,
  .swiper-vertical > .swiper-pagination.swiper-pagination-bullets {
    right: auto !important;
    left: 3rem !important;
    top: 40% !important;
    transform: none !important;
    display: flex !important;
    flex-direction: column !important;
    margin: 0;
    cursor: pointer;
  }

  .swiper-pagination-bullet {
    /* padding: 5px 10px;
    border-radius: 0;
    width: auto;
    height: 30px;
    text-align: center;
    line-height: 30px; */
    /* background: rgba(0, 0, 0, 0.2); */
  }

  .my-pagination-bullet {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Bebas';
    color: #767676;
    opacity: 1;
    padding: 0.3rem 0;
    text-align: left;
    @media (max-width: 768px) {
      display: none;
    }
    @media (max-width: ${breakpoints.mobile}px) {
      display: none;
    }
  }

  .my-pagination-bullet-active:before {
    content: '';
    display: block;
    position: absolute;
    left: -2rem;
    width: 25px; /* Set the width of the image */
    height: 25px; /* Set the height of the image */
    background-image: url(${LeftMoveIcon.src});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  .my-pagination-bullet-active::after {
    content: '';
    display: block;
    position: absolute;
    /* Adjust the position, width, and height of the image as needed */
    left: -1.45rem;
    top: 0.5rem;
    width: 25px;
    height: 147px;
    background-image: url(${LeftTrack.src});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;
    opacity: 2;
    z-index: 1;
  }
  .my-pagination-bullet-active {
    color: #fff; /* Change this to your desired color */
  }
`

const FixedDivider = styled.div`
  width: 100%;
  height: 80px;
  @media (max-width: 1024px) {
    height: 60px;
  }
  @media (max-width: 480px) {
    height: 60px;
  }
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
`

const isIOS = (): boolean => {
  if (typeof window === 'undefined') {
    return false
  }

  const userAgent = window.navigator.userAgent
  const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
  const isIPadOS = userAgent.includes('Macintosh') && 'ontouchend' in document

  return isIOSDevice || isIPadOS
}
const iosStyle = {
  transform: 'translateZ(0)',
  WebkitBackfaceVisibility: 'hidden',
  width: '100%',
}

const nonIosStyle = {
  width: '100%',
}

export default function Home() {
  const router = useRouter()

  const swiperRef = useRef(null)

  //swiper
  SwiperCore.use([Mousewheel, Pagination, Virtual])
  // const menu = ['WORLD VIEW', 'CHARACTER', 'MODE', 'MAP', 'PLAY NOW']

  // menu 배열이 컴포넌트가 처음 마운트될 때 한 번만 생성되고, 이후 렌더링에서는 변경되지 않습니다. 이렇게 하면 useCallback의 의존성 배열에서 문제가 해결되고 성능 최적화에 도움이 됩니다.
  const menu = useMemo(
    () => ['WORLD VIEW', 'CHARACTER', 'MODES', 'MAP', 'PLAY NOW'],
    [] // Add an empty dependency array
  )

  const renderCustomBullet = (index: number, className: string) => {
    return `<span class="${className}">
        ${menu[index]}
      </span>`
  }

  const [headerResponSiveModal, setHeaderResponsiveModal] = useRecoilState(
    HeaderResponSiveModalState
  )

  const swiperParams = {
    allowTouchMove: true,
    // Add other Swiper parameters here if needed
  }

  // const scrollToTop = useCallback(() => {
  //   console.log('클릭')
  //   if (swiperRef.current) {
  //     // @ts-ignore
  //     swiperRef.current.swiper.slideTo(0, 2000) // 1500 is the transition duration
  //   }
  // }, [])
  const isIosDevice = isIOS()
  const scrollToTop = useCallback(() => {
    const worldViewIndex = menu.indexOf('WORLD VIEW')
    if (swiperRef.current) {
      //@ts-ignore
      swiperRef.current.swiper.update()
      //@ts-ignore
      swiperRef.current.swiper.slideTo(worldViewIndex, 1500, true)
    }
    console.log(worldViewIndex, '클릭')
  }, [menu])

  //ios

  return (
    <>
      <Head>
        <title>FATAL BOMB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="view-transition" content="same-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FATAL BOMB" />
        <meta
          property="og:description"
          content="Never-Ending Combat on FatalZone"
        />
        <meta
          property="og:image"
          content="http://ffffatalbomb.com/ogImage.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixedDivider></FixedDivider>

      <Wrapper className="swiper-container">
        <ClientOnlyRender>
          <Swiper
            {...swiperParams}
            ref={swiperRef}
            cssMode={isIosDevice}
            style={isIosDevice ? iosStyle : nonIosStyle}
            noSwipingClass="my-no-swiping"
            touchEventsTarget="wrapper"
            // spaceBetween={30}
            effect="slide"
            direction="vertical"
            slidesPerView={1}
            mousewheel
            allowTouchMove={true}
            virtual={true}
            speed={1500} // Adjust this value to change the transition duration
            freeMode={false} // Enable freeMode for continuous scrolling
            pagination={{
              clickable: true,
              bulletClass: 'my-pagination-bullet',
              bulletActiveClass: 'my-pagination-bullet-active',
              renderBullet: (index, className) =>
                renderCustomBullet(index, className),
            }}
          >
            <SwiperSlide className="swiper-slide">
              <FatalZoneMain />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <FatalHero />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <FatalMod />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <FatalZoneField />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <FatalPlay />
            </SwiperSlide>
          </Swiper>
        </ClientOnlyRender>
        <div className="swiper-pagination"></div>
        <TopButton>
          <Image
            onClick={scrollToTop}
            src={TopButtonImg}
            alt="top_button"
            width={40}
            height={40}
          />
        </TopButton>
      </Wrapper>
    </>
  )
}

const TopButton = styled.div`
  display: none;

  @media (max-width: ${breakpoints.smallTablet}px) {
    display: block;
    position: fixed;
    right: 3rem;
    bottom: 5rem;
    cursor: pointer;
    z-index: 999;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    right: 2rem;
    bottom: 3rem;
  }
`

// 클라이언트 렌더와 서버와 렌더가 다르다
const ClientOnlyRender = ({ children }: any) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? children : null
}
