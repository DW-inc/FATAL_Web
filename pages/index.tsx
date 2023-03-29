import React from 'react'
import Head from 'next/head'
import checkUserLoggedIn from 'src/utils/checkUserLoggedIn'
import { GetServerSidePropsContext } from 'next'
// import { GetStaticProps } from 'next'
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
import HeaderModal from 'src/components/Modal/HeaderModal'
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

  .swiper-container {
    position: relative;
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
    @media (max-width: 762px) {
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
  @media (max-width: 980px) {
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
  return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
}
const iosStyle = {
  transform: 'translateZ(0)',
  WebkitBackfaceVisibility: 'hidden',
  width: '100%',
}

const nonIosStyle = {
  width: '100%',
}

export default function Home({
  idolGltfSrc,
  nurseGltfSrc,
  ceilSrc,
  standSrc,
  logoSrc,
  hallSrc,
  standBeamSrc,
  groundTexture,
}: R3FProps) {
  const router = useRouter()

  //swiper
  SwiperCore.use([Mousewheel, Pagination, Virtual])
  const menu = ['WORLD VIEW', 'CHARACTER', 'MODE', 'MAP', 'PLAY NOW']

  const renderCustomBullet = (index: number, className: string) => {
    return `<span class="${className}">
        ${menu[index]}
      </span>`
  }

  const [headerResponSiveModal, setHeaderResponsiveModal] = useRecoilState(
    HeaderResponSiveModalState
  )

  // Wrap each component with React.memo
  const MemoizedFatalZoneMain = React.memo(FatalZoneMain)
  const MemoizedFatalHero = React.memo(FatalHero)
  const MemoizedFatalMod = React.memo(FatalMod)
  const MemoizedFatalZoneField = React.memo(FatalZoneField)
  const MemoizedFatalPlay = React.memo(FatalPlay)

  //ios
  const isIosDevice = isIOS()
  return (
    <>
      <Head>
        <title>FATAL BOMB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="view-transition" content="same-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="FATAL BOMB" />
        <meta property="og:description" content="세상을 향해 지배하자" />
        <meta property="og:image" content="/main.PNG" />
        {/* <meta property="og:url" content="https://my-page.com" /> 추후 주소 수정  */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixedDivider></FixedDivider>

      <Wrapper>
        <Swiper
          cssMode={isIosDevice}
          style={isIosDevice ? iosStyle : nonIosStyle}
          noSwipingClass="my-no-swiping"
          touchEventsTarget="wrapper"
          // spaceBetween={30}
          effect="slide"
          direction="vertical"
          slidesPerView={1}
          mousewheel
          virtual={true}
          speed={1500} // Adjust this value to change the transition duration
          freeMode={true} // Enable freeMode for continuous scrolling
          pagination={{
            clickable: true,
            bulletClass: 'my-pagination-bullet',
            bulletActiveClass: 'my-pagination-bullet-active',
            renderBullet: (index, className) =>
              renderCustomBullet(index, className),
          }}
        >
          <SwiperSlide className="swiper-slide">
            <MemoizedFatalZoneMain />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <MemoizedFatalHero />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <MemoizedFatalMod />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <MemoizedFatalZoneField />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <MemoizedFatalPlay />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>

        {/* <FatalCharacters
          idolGltfSrc={idolGltfSrc}
          nurseGltfSrc={nurseGltfSrc}
          ceilSrc={ceilSrc}
          standSrc={standSrc}
          logoSrc={logoSrc}
          hallSrc={hallSrc}
          standBeamSrc={standBeamSrc}
          groundTexture={groundTexture}
        /> */}
      </Wrapper>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const idolGltfSrc = 'characters/idol6.gltf'
//   const nurseGltfSrc = 'characters/nurse2Draco.gltf'
//   const ceilSrc = 'characters/lightbeam4.gltf'
//   const standSrc = 'characters/SM_Frame01.gltf'
//   const logoSrc = 'characters/logo.gltf'
//   const hallSrc = 'characters/bg.gltf'
//   const groundTexture = [
//     'characters/texture1.jpg',
//     'characters/texturenormal.jpg',
//   ]
//   const standBeamSrc = 'characters/standbeam.gltf'

//   return {
//     props: {
//       idolGltfSrc,
//       nurseGltfSrc,
//       ceilSrc,
//       standSrc,
//       logoSrc,
//       hallSrc,
//       groundTexture,
//       standBeamSrc,
//     },
//   }
// }

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isUserLoggedIn = checkUserLoggedIn(context.req.headers)

  return {
    props: {
      isUserLoggedIn,
    },
  }
}
