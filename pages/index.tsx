import Head from 'next/head'
import checkUserLoggedIn from 'src/utils/checkUserLoggedIn'
import { GetServerSidePropsContext } from 'next'
// import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Container, css } from '@mui/material'
import FatalZoneMain from 'src/components/FatalZoneMain'
import axios from 'axios'
import FatalHero from 'src/components/FatalHero'
import FatalMod from 'src/components/FatalMod'
import FatalZoneField from 'src/components/FatalZoneField'
import FatalPlay from 'src/components/FatalPlay'
import Cookie from 'js-cookie'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/pagination'
import SwiperCore, { Mousewheel, Pagination, Virtual } from 'swiper'
import { breakpoints } from 'src/constans/MediaQuery'
import { useRecoilState } from 'recoil'
import { HeaderResponSiveModalState } from 'src/commons/store'
import HeaderModal from 'src/components/Modal/HeaderModal'
// import Pageable from 'pageable'
// import MyFullPage from 'src/components/commons/FullPageScroll'

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
  /* padding-top: 80px; */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 0rem;
  }
  .swiper-container {
    position: relative;
  }

  .swiper-pagination.swiper-pagination-vertical.swiper-pagination-bullets,
  .swiper-vertical > .swiper-pagination.swiper-pagination-bullets {
    right: auto !important;
    left: 2rem !important;
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

  .my-pagination-bullet-active {
    color: #fff; /* Change this to your desired color */
  }
`

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
`

// const Wrapper = styled('div')({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   overflowX: 'hidden',
// })

const LeftNaviBarFixed = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 40%;
  z-index: 1000; // Add a higher z-index value to make the component visible
  @media (max-width: 980px) {
    display: none;
  }
`

const LeftNaviContainer = styled('div')(css`
  width: 120px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 980px) {
    display: none;
  }
`)

const LeftNavis = styled('div')(css`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
`)

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

  // async function fetchGameStatus() {
  //   const cookieValue = Cookie.get('user_info')
  //   try {
  //     const response = await axios.get('/api/launcher', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Assuming you have the cookie value stored in a variable `cookieValue`
  //         Cookie: cookieValue,
  //       },
  //     })

  //     const data = response.data
  //     // Do something with the data
  //   } catch (error) {
  //     console.error('Error fetching game status:', error)
  //   }
  // }

  // useEffect(() => {
  //   fetchGameStatus()
  // }, [])

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Dynamically import pageable
  //     import('pageable').then((PageableModule) => {
  //       const Pageable = PageableModule.default

  //       // Initialize pageable
  //       const pageable = new Pageable('#container', {
  //         childSelector: '[data-anchor]',
  //         pips: true,
  //         animation: 1200,
  //         orientation: 'vertical',
  //       })

  //       // Cleanup on unmount
  //       return () => {
  //         pageable.destroy()
  //       }
  //     })
  //   }
  // }, [])
  SwiperCore.use([Mousewheel, Pagination, Virtual])
  const menu = ['WORLD VIEW', 'CHARACTER', 'MODE', 'MAP', 'PLAY NOW']

  // function renderCustomBullet(index: number, className: string) {
  //   return '<span class="' + className + '">' + menu[index] + '</span>'
  // }

  const renderCustomBullet = (index: number, className: string) => {
    return '<span class="' + className + '">' + menu[index] + '</span>'
  }

  // const renderCustomBullet = (index: number, className: string) => {
  //   return <span className={className}>{menu[index]}</span>
  // }

  const [headerResponSiveModal, setHeaderResponsiveModal] = useRecoilState(
    HeaderResponSiveModalState
  )

  return (
    <>
      <Head>
        <title>FATAL BOMB</title>
        <meta name="description" content="Generated by create next app" />
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
          direction="vertical"
          slidesPerView={1}
          mousewheel
          virtual
          speed={2000} // Adjust this value to change the transition duration
          freeMode={true} // Enable freeMode for continuous scrolling
          style={{ width: '100%' }}
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
