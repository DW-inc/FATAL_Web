import styled from '@emotion/styled'
import { NextRouter, useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import GuideHeaderBack from 'src/assets/guideBg/guide_header_bg.png'
import HeroHeaderBack from 'src/assets/guideBg/hero_header.png'
import ControlHeaderBack from 'src/assets/guideBg/control_header.png'
import { breakpoints } from 'src/constans/MediaQuery'

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
  height: 20rem;
  margin-top: 80px;
  font-family: 'Bebas';
  background-image: url(${(props) =>
    props.pathname.startsWith('/hero')
      ? HeroHeaderBack.src
      : ControlHeaderBack.src});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    margin-top: 60px;
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    height: 13rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const GuideText = styled.div`
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  color: #808080;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
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
        <GuideContentsTitle></GuideContentsTitle>
      )}
    </GuideHeader>
  )
}
