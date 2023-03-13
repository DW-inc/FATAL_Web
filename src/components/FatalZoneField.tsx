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

const Wrapper = styled('section')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundImage: `url(${'Bg/ModeBg.png'})`,
  background: `url(${'Bg/FiledBg.png'})   no-repeat center`,
  backgroundSize: '101% 101%',
  // '&.swiper-slide swiper-slide-active': {
  //
  // },
  '.swiper-wrapper': {
    display: 'flex',
    transitionProperty: 'transform',
    boxSizing: 'content-box',
    alignItems: 'center',
    color: '#fff',
  },
  '.swiper-container': {
    width: '100%',
    '@media screen and (max-width: 480px)': {
      // marginBottom: '5rem',
    },
  },
  '.swiper-slide-active': {},
}))

const MapContainer = styled('div')(
  (theme) => css`
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
)
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

const SwiperMapText = styled('div')({
  fontFamily: 'Randhu',
  fontWeight: '400',
  fontSize: '175px',
  textAlign: 'center',
  color: '#E4FF00;',
})

const StyledSwiperSlide = styled(SwiperSlide)({
  width: '50%', // 원하는 width 값으로 조절
  marginRight: '10px',
})

const MapBox = styled('div')({
  fontFamily: 'Inter',

  fontWeight: '700',
  fontSize: '20px',
  textAlign: 'center',

  color: '#FFBC11',
  width: '38rem',
  height: '16.875rem',
  border: '1px solid #FFBC11',
})

const FloorBt = styled('button')(
  (theme) => css`
    width: 80px;
    height: 80px;
    opacity: 0.3;
    border: 3px solid #ffffff;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
  `
)

const MapExplanation = styled('div')(
  (theme) => css`
    font-family: 'Nextrue-Bold-Slant';
    font-size: 74px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);

    opacity: 0.7;
  `
)

const MapExplanGem = styled('p')(
  (theme) => css`
    font-family: 'Nextrue Con Light';
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    font-size: 49px;
    opacity: 0.7;
  `
)

const MapCreed = styled('p')(
  (theme) => css`
    width: 60%;
    font-family: 'Nextrue Con Light';
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    font-size: 49px;
    opacity: 0.7;
    text-align: center;
  `
)

const MapSubDetail = styled('div')(
  (theme) => css`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  `
)

const MapDetail = styled('div')(
  (theme) => css`
    font-family: 'Nextrue Con Light';
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
    opacity: 0.7;
    text-align: center;
  `
)

const MapMainText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 75px;
    color: #9e9e9e;
    /* transform: translateY(-50%); */
  `
)

const MapRightWrapper = styled('div')(
  (theme) => css`
    position: inherit;
  `
)

const MapImage = styled.div<MapImageProps>`
  width: 100%;
  height: 25rem;
  background: #d9d9d9;
  border: 1px solid #fff;
  z-index: ${(props) => props.index + 1};
`

const MapRightText = styled('div')(
  (theme) => css`
    width: 25%;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.1);
  `
)

const MobileWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    background: #464646;
  `
)

const MobileTopText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding: 10px 20px;
    color: rgba(255, 255, 255, 0.1);
  `
)

const MobileFloorBtWrapper = styled('div')(
  (theme) => css`
    position: absolute;
    right: 2rem;
  `
)

const MobileFloorBt = styled('div')(
  (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 51px;
    background: #484848;
    border: 3px solid #606060;
    color: #969696;
    font-family: 'KoreanRKTR';
    font-style: normal;
  `
)

const MobileMapTextWrapper = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `
)

const MobileMapTitle = styled('div')(
  (theme) => css`
    width: 70%;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #ffffff;
  `
)
const MobileMapSub = styled('div')(
  (theme) => css`
    width: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  `
)

const MobileMapDetail = styled('div')(
  (theme) => css`
    width: 95%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
  `
)

const MobileMapBox = styled('div')(
  (theme) => css`
    width: 220px;
    height: 185px;
    background: #9f9f9f;
  `
)

const MobileMapWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    display: flex;
    padding: 20px;
  `
)

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
