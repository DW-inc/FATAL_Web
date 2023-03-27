import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import GuideHeaderBack from 'src/assets/guideBg/guide_header_bg.png'
import { breakpoints } from 'src/constans/MediaQuery'

interface IArrowProps {
  arrowcontroller: boolean
}

const GuideLeft = styled('div')({
  fontFamily: 'Bebas',
  width: '15vw',
})

const GuideLeftTitle = styled('h5')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  color: '#000',
  borderBottom: '1px solid #000',
})

const GuideLeftContents = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const CharacterArrow = styled('img')<IArrowProps>(({ arrowcontroller }) => ({
  width: '24px',
  height: '24px',
  transform: arrowcontroller ? 'rotate(180deg)' : 'rotate(0deg)',
}))

const GuideHeader = styled.div`
  width: 100%;
  height: 25rem;
  font-family: 'Bebas';
  background-image: url(${GuideHeaderBack.src});
  background-position: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    height: 20rem;
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

export function LayoutGuideHeader() {
  return (
    <GuideHeader>
      <GuideText>GUIDE BOOK</GuideText>
      <GuideContentsTitle>HERO</GuideContentsTitle>
    </GuideHeader>
  )
}
