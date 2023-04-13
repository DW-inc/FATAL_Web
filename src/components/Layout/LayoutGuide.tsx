import styled from '@emotion/styled'
import { NextRouter, useRouter } from 'next/router'
import HeroHeaderBack from 'src/assets/guideBg/Guide_backImg.png'
import MobileHeroHeaderBack from 'src/assets/guideBg/mobile_guide_back.png'
import ControlHeaderBack from 'src/assets/guideBg/control_header.png'
import { breakpoints } from 'src/constans/MediaQuery'
import Image from 'next/image'
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
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    height: 190px;
  }
`

const GuideContentsTitle = styled.h3`
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 80px;
  text-align: center;
  color: #fff;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

export function LayoutGuideHeader({ router }: LayoutGuideHeaderProps) {
  return (
    <GuideHeader pathname={router.pathname}>
      {router.pathname.startsWith('/control') && (
        <GuideContentsTitle></GuideContentsTitle>
      )}
      {router.pathname.startsWith('/hero') && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <HeroImage />
        </div>
      )}
    </GuideHeader>
  )
}

// const HeroImage = styled.img`
//   width: 100%;
//   height: 350px;
//   @media screen and (max-width: ${breakpoints.tablet}px) {
//   }
// `

const HeroImage = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${HeroHeaderBack.src});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    background-image: url(${MobileHeroHeaderBack.src});
    height: 190px;
  }
`
