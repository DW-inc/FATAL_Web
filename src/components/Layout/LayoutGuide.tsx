import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
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

const LeftModeWrapper = styled('div')({
  marginTop: '79px',
})

const ModeTitle = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  color: '#000',
  borderBottom: '1px solid #000',
})

const ModeGuideContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

// export function LayoutGuideLeft() {
//   const router = useRouter()
//   const [textcontroller, setTextcontroller] = useRecoilState(
//     Guide_ControllerState
//   )
//   const [arrowcontroller, setArrowController] =
//     useRecoilState(ArrowControllerState)

//   const CharacterHandler = () => {
//     setArrowController(!arrowcontroller)
//   }

//   return (
//     <GuideLeft>
//       <GuideLeftTitle>BASIC GUIDE</GuideLeftTitle>
//       <GuideLeftContents
//         style={{ color: textcontroller === 'CONTROL' ? 'pink' : '#000' }}
//         onClick={() => {
//           setTextcontroller('CONTROL')
//           router.push('/guide')
//         }}
//       >
//         CONTROL
//       </GuideLeftContents>
//       <GuideLeftContents>
//         <p onClick={() => router.push('/guide/character')}>CHARACTER</p>
//         <CharacterArrow
//           src={CharacterArrowImg.src}
//           alt="arrow"
//           arrowcontroller={arrowcontroller}
//           onClick={CharacterHandler}
//         />
//       </GuideLeftContents>
//       {arrowcontroller ? (
//         <div>
//           {Request_CharacterInfo.map((name) => (
//             <div
//               key={name.id}
//               onClick={() => {
//                 setTextcontroller(name.name)
//                 router.push(`/guide/character/${name.id}`)
//               }}
//             >
//               {name.name}
//             </div>
//           ))}
//         </div>
//       ) : null}

//       <LeftModeWrapper>
//         <ModeTitle>MODE GUIDE</ModeTitle>
//         <ModeGuideContents>MODE GUIDE</ModeGuideContents>
//       </LeftModeWrapper>
//     </GuideLeft>
//   )
// }

const GuideHeader = styled.div`
  width: 100%;
  height: 28.5rem;
  font-family: 'Bebas';
  background-image: url('/guideBg/characters_bg.png');
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
