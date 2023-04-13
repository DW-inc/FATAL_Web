import styled from '@emotion/styled'
import { NextRouter, useRouter } from 'next/router'
import HeroHeaderBack from 'src/assets/guideBg/Guide_backImg.png'
import TabletHeaderBack from 'src/assets/guideBg/tablet_guide_back.png'
import SmallTabletHeaderBack from 'src/assets/guideBg/smalltablet_guide_back.png'
import MobileHeroHeaderBack from 'src/assets/guideBg/mobile_guide_back.png'
import ControlHeaderBack from 'src/assets/guideBg/control_header.png'
import { breakpoints } from 'src/constans/MediaQuery'
import Image from 'next/image'
import { useEffect, useState } from 'react'
interface IHeaderProps {
  pathname: string
}

type LayoutGuideHeaderProps = {
  router: NextRouter
}

interface IArrowProps {
  arrowcontroller: boolean
}

const GuideHeader = styled.div<IHeaderProps>`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  @media (max-width: ${breakpoints.tablet}px) {
    margin-top: 60px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const HeroDivider = styled.div`
  position: relative;
  width: 100%;
  /* height: 350px; */

  @media (max-width: ${breakpoints.tablet}px) {
    /* height: 259px; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

export function LayoutGuideHeader({ router }: LayoutGuideHeaderProps) {
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

  const renderImage = () => {
    if (mobileResize <= 480) {
      return (
        <Image
          src={MobileHeroHeaderBack}
          alt="backimg"
          // layout="responsive"
          width={390}
          height={259}
        />
      )
    } else if (mobileResize <= 1024) {
      return (
        <Image
          src={TabletHeaderBack}
          alt="backimg"
          // layout="responsive"
          width={1024}
          height={259}
        />
      )
    } else if (mobileResize <= 763) {
      return (
        <Image
          src={SmallTabletHeaderBack}
          alt="backimg"
          // layout="responsive"
          width={763}
          height={259}
        />
      )
    } else {
      return (
        <Image
          src={HeroHeaderBack}
          // layout="responsive"
          alt="backimg"
          width={1920}
          height={350}
        />
      )
    }
  }

  return (
    <GuideHeader pathname={router.pathname}>
      {router.pathname.startsWith('/control') && <div></div>}
      {router.pathname.startsWith('/hero') && (
        <div>
          {mobileResize <= 480 ? (
            <MobileHeroImage src={MobileHeroHeaderBack.src} alt="backimg" />
          ) : mobileResize <= 768 ? (
            <Image
              src={SmallTabletHeaderBack}
              alt="backimg"
              layout="responsive"
              width={763}
              height={259}
            />
          ) : mobileResize <= 1024 ? (
            <Image
              src={TabletHeaderBack}
              alt="backimg"
              layout="responsive"
              width={1024}
              height={259}
            />
          ) : (
            <Image
              src={HeroHeaderBack}
              layout="responsive"
              alt="backimg"
              width={1920}
              height={350}
            />
          )}
        </div>
      )}
    </GuideHeader>
  )
}

const HeroImage = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${HeroHeaderBack.src});
  background-size: cover;
  background-position: center;
  @media (max-width: ${breakpoints.tablet}px) {
    background-image: url(${TabletHeaderBack.src});
    height: 259px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    background-image: url(${SmallTabletHeaderBack.src});
    height: 200px;
  }
  @media (max-width: 480px) {
    background-image: url(${MobileHeroHeaderBack.src});
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const MobileHeroImage = styled.img`
  width: 100%;
  height: 270px;
`
