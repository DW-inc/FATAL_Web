import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'
import { Request_CharacterInfo } from 'src/constans/Characters'

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

export function LayoutGuideLeft() {
  const router = useRouter()
  const [textcontroller, setTextcontroller] = useRecoilState(
    Guide_ControllerState
  )
  const [arrowcontroller, setArrowController] =
    useRecoilState(ArrowControllerState)

  const CharacterHandler = () => {
    setArrowController(!arrowcontroller)
  }

  return (
    <GuideLeft>
      <GuideLeftTitle>BASIC GUIDE</GuideLeftTitle>
      <GuideLeftContents
        style={{ color: textcontroller === 'CONTROL' ? 'pink' : '#000' }}
        onClick={() => {
          setTextcontroller('CONTROL')
          router.push('/guide')
        }}
      >
        CONTROL
      </GuideLeftContents>
      <GuideLeftContents>
        <p onClick={() => router.push('/guide/character')}>CHARACTER</p>
        <CharacterArrow
          src={CharacterArrowImg.src}
          alt="arrow"
          arrowcontroller={arrowcontroller}
          onClick={CharacterHandler}
        />
      </GuideLeftContents>
      {arrowcontroller ? (
        <div>
          {Request_CharacterInfo.map((name) => (
            <div
              key={name.id}
              onClick={() => {
                setTextcontroller(name.name)
                router.push(`/guide/character/${name.id}`)
              }}
            >
              {name.name}
            </div>
          ))}
        </div>
      ) : null}

      <LeftModeWrapper>
        <ModeTitle>MODE GUIDE</ModeTitle>
        <ModeGuideContents>MODE GUIDE</ModeGuideContents>
      </LeftModeWrapper>
    </GuideLeft>
  )
}

const GuideHeader = styled('div')({
  width: '100%',
  height: '28.5rem',
  fontFamily: 'Bebas',
  backgroundImage: `url(${'/guideBg/characters_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const GuideText = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#808080',
})

const GuideContentsTitle = styled('h3')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
  color: '#FFF',
})

export function LayoutGuideHeader() {
  return (
    <GuideHeader>
      <GuideText>GUIDE BOOK</GuideText>
      <GuideContentsTitle>HERO</GuideContentsTitle>
    </GuideHeader>
  )
}
