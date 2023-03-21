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
import { breakpoints } from 'src/constans/MediaQuery'

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

  @media screen and (max-width: 480px) {
    justify-content: unset;
    align-items: unset;
    padding-top: 4rem;
  }
  .swiper-wrapper {
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    align-items: center;
    color: #fff;
  }

  .swiper-container {
    width: 100%;
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
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const SwiperMapText = styled.div`
  font-family: 'Randhu';
  font-weight: 400;
  font-size: 10.9rem;
  text-align: center;
  color: #e4ff00;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 9rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 7.4rem;
  }
  @media (max-width: 600px) {
    font-size: 6rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 3.8rem;
    margin: 1.5rem 0;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 50%; /* 원하는 width 값으로 조절 */
  margin-right: 10px;
`

const MapExplanation = styled.div`
  font-family: 'Nextrue-Bold-Slant';
  font-size: 4.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
  /* @media screen and (max-width: 1065px) {
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
  } */
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 4.2rem;
  }

  @media (max-width: 806px) {
    font-size: 3.4rem;
  }
  @media (max-width: 663px) {
    font-size: 3rem;
  }
  @media (max-width: 574px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.8rem;
  }
`

const MapExplanGem = styled.p`
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  opacity: 0.7;
  /* @media screen and (max-width: 1065px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
  } */
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 2.2rem;
  }

  @media (max-width: 663px) {
    font-size: 2rem;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.6rem;
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
  /* @media screen and (max-width: 1065px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
  } */
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    width: 70%;
    font-size: 2rem;
  }

  @media (max-width: 663px) {
    width: 80%;
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100%-1rem);
    font-size: 1.4rem;
  }
`

const MapDetail = styled.div`
  font-family: 'Nextrue Con Light';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  opacity: 0.7;
  text-align: center;
  /* @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  } */
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.2rem;
  }
`

const FieldShowMore = styled.div`
  margin: 2rem 0;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 73px;
  transition: background-image 0.3s ease;

  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    padding: 4rem 0;
  }
`

const MapLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100%-2.5rem);
    gap: 0.5rem;
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
          <MapLine style={{}}>
            {MapFloor.map((value, index) => (
              <MapHeadLine key={index} mapIndex={mapIndex} mapNumber={index}>
                <MapTitle>{value}</MapTitle>
              </MapHeadLine>
            ))}
          </MapLine>
          <Swiper
            onSlideChange={handleSlideChange}
            style={{ width: '100%' }}
            spaceBetween={10}
            slidesPerView={1}
            // scrollbar={{ draggable: true }}
            navigation
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
          <FieldShowMore />
        </MapContainer>
      </Container>
    </Wrapper>
  )
}
