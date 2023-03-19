import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import Image from 'next/image'
import { IScrollbuttonProps } from 'pages'

interface MapImageProps {
  index: number
}

interface MapTextLineProps {
  mapIndex: number
  mapNumber: number
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('Bg/FiledBg.png') no-repeat center;
  background-position: 50%;
  background-size: cover;

  .swiper-wrapper {
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    align-items: center;
    color: #fff;
  }

  .swiper-container {
    width: 100%;

    @media screen and (max-width: 480px) {
      /* marginBottom: '5rem', */
    }
  }

  .swiper-slide-active {
    /* styles for active slide */
  }
`

const MapContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
// const MapHeadLine = styled('div')(
//   (theme) => css`
//     width: 125px;
//     height: 44px;
//   `
// )

// const MapHeadLine = styled('div')<MapTextLineProps>(
//   (props) => css`
//     font-family: 'Bebas';
//     font-weight: 400;
//     font-size: 20px;
//     text-align: center;
//     border-bottom: 1px solid
//       ${props.mapNumber === props.mapIndex ? '#fff' : 'none'};
//   `
// )

const MapHeadLine = styled.div<MapTextLineProps>`
  width: 125px;
  height: 44px;
  border-bottom: 0.5px solid
    ${(props) => (props.mapIndex === props.mapNumber ? '#fff' : ' #000')};
`

const MapTitle = styled.div`
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`

const SwiperMapText = styled.div`
  font-family: 'Randhu';
  font-weight: 400;
  font-size: 10.9rem;
  text-align: center;
  color: #e4ff00;
  @media screen and (max-width: 1065px) {
    font-size: 9rem;
  }
  @media screen and (max-width: 960px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 690px) {
    font-size: 5.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 480px) {
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 50%; /* 원하는 width 값으로 조절 */
  margin-right: 10px;
`

const MapExplanation = styled.div`
  font-family: 'Nextrue-Bold-Slant';
  font-size: 4.6rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  @media screen and (max-width: 1065px) {
    font-size: 4.2rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`

const MapExplanGem = styled.p`
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  opacity: 0.7;
  @media screen and (max-width: 1065px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
  }
`

const MapCreed = styled.p`
  width: 60%;
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  opacity: 0.7;
  text-align: center;
  @media screen and (max-width: 1065px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
  }
`

const MapDetail = styled.div`
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  opacity: 0.7;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export default function FatalZoneField({ id }: IScrollbuttonProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [swiperSetting, setSwiperSetting] = useState<typeof Swiper | null>(null)
  SwiperCore.use([Navigation, Scrollbar])
  // active={testColor === value}
  const [mapIndex, setMapIndex] = useState<number>(0)
  const [mapNumber, setMapNumber] = useState<number>(0)

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

  const MapFloor = ['Mining sites', 'Mining sites', 'Mining sites']

  const handleSlideChange = (swiper: any) => {
    setMapIndex(swiper.realIndex)
  }
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
  return (
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <MapContainer>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '4rem' }}
          >
            {MapFloor.map((value, index) => (
              <MapHeadLine key={index} mapIndex={mapIndex} mapNumber={index}>
                <MapTitle>{value}</MapTitle>
              </MapHeadLine>
            ))}
          </div>
          <Swiper
            onSlideChange={handleSlideChange}
            style={{ width: '85%' }}
            spaceBetween={10}
            slidesPerView={1}
            // scrollbar={{ draggable: true }}
            navigation
            pagination={{ clickable: true }}
            // breakpoints={{
            //   768: {
            //     slidesPerView: 7,
            //   },
            // }}
          >
            {MapFloor.map((value, index) => (
              <SwiperSlide key={index}>
                <SwiperMapText>{value}</SwiperMapText>
              </SwiperSlide>
            ))}
          </Swiper>
          <MapExplanation>the bottom of the giant sink hole.</MapExplanation>
          <MapExplanGem>
            After GEM is found, FAITH has begun to mining GEM.
          </MapExplanGem>
          <MapDetail>
            <p>Halo and GEM&apos;s combination made strong energy</p>
            <p>
              The side effects have caused mental and abnormal physical ability.
            </p>
            <p>
              FAITH is forced to put prisoners into mining work, The mining work
              was a symbol of oppression,
            </p>
          </MapDetail>
          <MapCreed>
            CREED plans to terrorize these mines to terrorize the main energy
            storage, the Nexus.
          </MapCreed>
          <div
            onMouseEnter={() => setIsHeroShowMore(true)}
            onMouseLeave={() => setIsHeroShowMore(false)}
            style={{ margin: '50px 0 25px 0  ' }}
          >
            {isHeroShowMore ? (
              <Image src={showMore_on} alt="on" />
            ) : (
              <Image src={showMore_off} alt="off" />
            )}
          </div>
        </MapContainer>
      </Container>
    </Wrapper>
  )
}
