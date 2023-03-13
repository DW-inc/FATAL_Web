import { Request_CharacterInfo } from 'src/constans/Characters'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import CharacterArrowImg from 'src/assets/icon/character_arrow.png'

export async function getStaticPaths() {
  return {
    paths: Request_CharacterInfo.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const character = Request_CharacterInfo.find(({ id }) => id === +params.id)

  return {
    props: {
      character,
    },
  }
}

export default function ChracterDetailPage({ character }) {
  const router = useRouter()

  const [textcontroller, setTextcontroller] = useRecoilState(
    Guide_ControllerState
  )
  const [arrowcontroller, setArrowController] =
    useRecoilState(ArrowControllerState)

  const CharacterHandler = () => {
    setArrowController(!arrowcontroller)
  }
  const GuideLEft = ['CONTROL', 'CHARACTER']

  return (
    <GuideWrapper>
      {/* <GuideHeader>
        <GuideText>GUIDE BOOK</GuideText>
        <GuideContentsTitle>Character</GuideContentsTitle>
      </GuideHeader> */}
      <GuideContainer>
        {/* <GuideLeft>
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
          <GuideLeftContents onClick={CharacterHandler}>
            CHARACTER
            <CharacterArrow
              src={CharacterArrowImg.src}
              alt="arrow"
              arrowcontroller={arrowcontroller}
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
        </GuideLeft> */}
        <Container maxWidth={'lg'}>
          <h1>{character.name}</h1>
          <p>{character.realName}</p>
          <p>{character.age}</p>
        </Container>
      </GuideContainer>
    </GuideWrapper>

    // <div
    //   style={{
    //     width: '100%',
    //     height: '100vh',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >

    // </div>
  )
}

const GuideWrapper = styled('section')({
  marginTop: '5rem',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
})

const GuideHeader = styled('div')({
  width: '100%',
  height: '28.5rem',
  backgroundImage: `url(${'/guideBg/characters_bg.png'})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
})

const GuideText = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#808080',
  transform: 'translate(0,50%)',
})

const GuideContentsTitle = styled('h3')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '80px',
  textAlign: 'center',
  color: '#FFF',
  transform: 'translate(0,25%)',
})

const GuideContainer = styled('div')({
  display: 'flex',
  marginTop: '56px',

  '.responsive-image': {
    width: '100%',
    height: 'auto',
  },
})

const GuideLeft = styled('div')({
  // width: '22.5rem',
  fontFamily: 'Bebas',
  diplay: 'flex',
  flexDirection: 'column',
  // paddingLeft: '4.375rem',
  transform: 'translateX(30%)',
})

const GuideLeftTitle = styled('h5')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const LeftModeWrapper = styled('div')({
  marginTop: '79px',
})

const GuideLeftContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const ModeTitle = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  color: '#000',
  borderBottom: '1px solid #000',
})

const ModeGuideContents = styled('div')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '30px',
  color: '#000',
})

const ChracterCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

const CharacterName = styled('p')({
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '48px',

  color: '#323232',
})

// const CharacterArrow = styled('img')<IArrowProps>(({ arrowcontroller }) => ({
//   width: '24px',
//   height: '24px',
//   transform: arrowcontroller ? 'rotate(180deg)' : 'rotate(0deg)',
// }))
