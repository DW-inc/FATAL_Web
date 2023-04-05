import styled from '@emotion/styled'
import { Container } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import SwiperCore, { Navigation, Scrollbar, EffectFade } from 'swiper'
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'
import { breakpoints } from 'src/constans/MediaQuery'
import Image from 'next/image'
import scroll_down from 'src/assets/icon/scrolldown.png'
interface MapImageProps {
  index: number
}

interface MapTextLineProps {
  mapIndex: number
  mapNumber: number
}

interface CustomSwiper {
  slideTo: (index: number) => void
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
  .swiper-button-prev:after,
  .swiper-button-next:after {
    display: none;
    /* color:yellow; */
  }

  .fade-effect {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .fade-effect.visible {
    opacity: 1;
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
  font-family: 'Bebas Kai';
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const SwiperMapText = styled.div`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 120px;
  text-align: center;
  color: #fff;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 8rem;
  }
  @media (max-width: 900px) {
    font-size: 7rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 6rem;
  }
  @media (max-width: 600px) {
    font-size: 5rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 4.4rem;
    margin: 1.5rem 0;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 50%; /* 원하는 width 값으로 조절 */
  margin-right: 10px;
`

const MapExplanation = styled.div`
  font-family: 'Bebas Kai';
  font-size: 30px;
  font-weight: 400;
  color: #23e023;
  z-index: 10;
  transform: translateY(-70%);
  @media (max-width: ${breakpoints.tablet}px) {
    /* font-size: 4.2rem; */
  }

  @media (max-width: 806px) {
  }
  @media (max-width: 663px) {
  }
  @media (max-width: 574px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.4rem;
  }
`

const MapExplanGem = styled.p`
  font-family: 'Bebas Neue Pro';
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
  opacity: 0.7;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: 663px) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.2rem;
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
  margin-top: 6rem;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  transition: background-image 0.3s ease;
  z-index: 10;
  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    padding: 0;
    margin: 3rem 0;
  }
`

const MapLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  z-index: 10;
  @media (max-width: ${breakpoints.mobile}px) {
    width: calc(100%-2.5rem);
    gap: 0.5rem;
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

export default function FatalZoneField() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [swiperSetting, setSwiperSetting] = useState<typeof Swiper | null>(null)
  SwiperCore.use([Navigation, Scrollbar, EffectFade])
  // active={testColor === value}
  const [mapIndex, setMapIndex] = useState<number>(0)
  const MapFloor = ['werck twon', 'ghetto', 'Mining sites3']
  const [mapText, setMapText] = useState(MapFloor[0])
  const [contentsVisible, setContentsVisible] = useState(true)
  const swiper = useSwiper()
  const swiperRef = useRef<SwiperRef>(null)

  const handleSlideChange = (swiper: any) => {
    const index = swiper.activeIndex
    const value = MapFloor[index]
    setMapIndex(index)
    setMapText(value)
  }

  const handleClickChange = (value: string, index: number) => {
    setContentsVisible(false)

    setTimeout(() => {
      setMapText(value)
      setMapIndex(index)
      setContentsVisible(true)
    }, 400)

    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  const handleScrollDownClick = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  return (
    <>
      <VideoBackground
        loop
        muted
        autoPlay
        playsInline
        // src={
        //   mapIndex === 0 ? '/video/Main_bg.mp4' : '/video/WEB_Lastavard_A.mp4'
        // }
        src={
          mapIndex === 0
            ? '/video/d4-story-bg-desktop.webm'
            : mapIndex === 1
            ? '/video/WEB_Lastavard_A.mp4'
            : '/video/header-video.mp4'
        }
      ></VideoBackground>

      <Wrapper>
        <Container maxWidth={'lg'}>
          <MapContainer>
            <MapLine>
              {MapFloor.map((value, index) => (
                <MapHeadLine
                  key={index}
                  mapIndex={mapIndex}
                  mapNumber={index}
                  onClick={() => handleClickChange(value, index)}
                >
                  <MapTitle>{value}</MapTitle>
                </MapHeadLine>
              ))}
            </MapLine>
            <Swiper
              ref={swiperRef}
              onSlideChangeTransitionEnd={handleSlideChange} // 이벤트 이름을 변경하였습니다.
              style={{ width: '100%' }}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              effect="fade" // Add this line to enable the fade effect
              fadeEffect={{ crossFade: true }} // Add this line to enable cross-fading between slides
            >
              {MapFloor.map((value, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handleClickChange(value, index)}
                >
                  <SwiperMapText> {value}</SwiperMapText>
                </SwiperSlide>
              ))}
            </Swiper>
            <MapExplanation>the bottom of the giant sink hole.</MapExplanation>
            {/* <MapExplanation>the bottom of the giant sink hole.</MapExplanation>
            <MapExplanGem>
              After GEM is found, FAITH has begun to mining GEM.
            </MapExplanGem> */}
            <div className={`fade-effect ${contentsVisible ? 'visible' : ''}`}>
              {mapIndex === 0 && (
                <>
                  {/* <MapExplanation>
                    the bottom of the giant sink hole.
                  </MapExplanation> */}
                  <MapExplanGem>
                    Remains of buildings sunk underground in a sinkhole
                    avalanche,
                    <br /> The remnants that maintain their shape form a small
                    village.
                    <br /> It becomes the battlefield for the conflict between
                    FAITH and CREED.
                  </MapExplanGem>
                </>
              )}

              {mapIndex === 1 && (
                <>
                  {/* <MapExplanation>
                    the bottom of the giant sink hole.2
                  </MapExplanation> */}
                  <MapExplanGem>
                    The remnants of buildings that barely maintained their shape
                    amidst the sinkhole wreckage have become <br />
                    the home of escaped prisoners and criminals who coexist
                    together. <br /> This place is constantly filled with
                    incidents and accidents, making it a potential battlefield
                    at any time.
                  </MapExplanGem>
                </>
              )}

              {mapIndex === 2 && (
                <>
                  {/* <MapExplanation>
                    the bottom of the giant sink hole.3
                  </MapExplanation> */}
                  <MapExplanGem>
                    After GEM is found, FAITH has begun to mine GEM.3
                  </MapExplanGem>
                </>
              )}
            </div>
            {/* <FieldShowMore /> */}
          </MapContainer>
        </Container>
        <ScrollDown onClick={handleScrollDownClick}>
          <Image
            className="image-up-and-down"
            src={scroll_down}
            alt="scroll_down"
          />
        </ScrollDown>
      </Wrapper>
    </>
  )
}

const ScrollDown = styled.div`
  position: absolute;
  bottom: 8%;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    bottom: 25%;
  }
  @keyframes up-and-down {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
  }
  .image-up-and-down {
    animation: up-and-down 3s infinite;
  }
`
