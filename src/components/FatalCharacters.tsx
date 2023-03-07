import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import arrow_up from './../assets/icon/mobile_up.png'
import arrow_down from './../assets/icon/mobile_down.png'
import R3F from 'src/3d/3d_model/CharactersModel'
import { GetStaticProps } from 'next'
import { useRecoilState } from 'recoil'
import { clickModelState, jobState } from 'src/commons/store'
import { R3FProps } from 'pages'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2B2B2B',
  overflow: 'hidden',
  paddingTop: '2rem',
}))

const TopTitleDiv = styled('div')(
  (theme) => css`
    padding-bottom: 1rem;
    /* transform: translate(-10%, -40%); */
  `
)

const LeftWrapper = styled('div')((theme) => css``)

const RightWrapper = styled('div')(
  (theme) => css`
    @media (max-width: 480px) {
      display: none;
    }
  `
)

const CharactersTitle = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 75px;
    color: #9e9e9e;
  `
)

const CharactersBox = styled('div')(
  (theme) => css`
    width: 590px;
    height: 710px;
    background: #d9d9d9;
  `
)

const CharactersTop = styled('div')(
  (theme) => css`
    display: flex;
    align-items: flex-end;
  `
)

const CharacterName = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #ffffff;
  `
)

const CharacterJob = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    padding: 0.5rem;
  `
)

const CharactersExplanation = styled('div')(
  (theme) => css`
    width: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ffffff;
  `
)

const CharacterPicOne = styled('div')(
  (theme) => css`
    /* width: calc(100%); */
    width: 100%;
    height: 185px;
    background: rgba(217, 217, 217, 0.3);
  `
)

const CharacterPicTwo = styled('div')(
  (theme) => css`
    /* width: 100%; */
    width: 100%;
    height: 135px;
    background: rgba(217, 217, 217, 0.3);
    margin-top: 12px;
  `
)

const CharactersSelect = styled('div')(
  (theme) => css`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    grid-gap: 0.5rem;
    width: 90%;
    margin-top: 6.5rem; */
  `
)
const CharacterSelectBox = styled('div')(
  (theme) => css`
    width: 80px;
    height: 80px;
    background: #a5a5a5;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const MobileWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    background: #2b2b2b;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
)

const MobileTopTitle = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    text-align: center;
    color: #9e9e9e;
  `
)

const MobileCharacterBox = styled('div')(
  (theme) => css`
    width: 223px;
    height: 454px;
    background: #d9d9d9;
    margin-left: 2rem;
  `
)

const MobileSelectBoxWrapper = styled('div')(
  (theme) => css`
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
)

const MbBoxWrapper = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
  `
)

const MbCharacterBox = styled('div')(
  (theme) => css`
    width: 3.5rem;
    height: 3.5rem;
    background: #7d7d7d;
    border: 4px solid #a8a8a8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  `
)

const MbCharacterBottom = styled('div')(
  (theme) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  `
)

const MbLeftWrapper = styled('div')(
  (theme) => css`
    width: 100%;
  `
)

const MbCharacter = styled('div')(
  (theme) => css`
    display: flex;
    align-items: flex-end;
  `
)

const MbCharacterName = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
  `
)

const MbCharacterJob = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
  `
)

const MbCharacterDetail = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  `
)

const MbRightBox = styled('div')(
  (theme) => css`
    width: 100px;
    height: 95px;
    background: rgba(217, 217, 217, 0.3);
  `
)

export default function FatalCharacters(props: R3FProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [clickModel, setClickModel] = useRecoilState(clickModelState)
  const [clickJob, setClickJob] = useRecoilState(jobState)
  // console.log(clickModel)
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
  const MobileCharacters = ['ALLISHA', 'OLLI', 'IDOL', '1', '2']
  // const SelectCharacters = ['ALLISHA', 'OLLI', 'IDOL', '1', '2', '3', '4', '5']
  const SelectCharacters = [
    { NAME: 'ALLISHA', JOB: 'Nurse' },
    { NAME: 'OLLI', JOB: 'Doctor' },
    { NAME: 'IDOL', JOB: 'Singer' },
    { NAME: '1', JOB: 'Job1' },
    { NAME: '2', JOB: 'Job2' },
    { NAME: '3', JOB: 'Job3' },
    { NAME: '4', JOB: 'Job4' },
    { NAME: '5', JOB: 'Job5' },
  ]

  const ClickCharacter = (value: string) => {
    setClickModel(value)
    const selectedCharacter = SelectCharacters.find(
      (character) => character.NAME === value
    )
    if (selectedCharacter) {
      setClickJob(selectedCharacter.JOB)
    }
  }

  return isMobile ? (
    <MobileWrapper>
      <div style={{ width: '100%', display: 'flex', paddingLeft: '2rem' }}>
        <MobileTopTitle>HEROES</MobileTopTitle>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <MobileCharacterBox /> */}
        <R3F
          idolGltfSrc={props.idolGltfSrc}
          nurseGltfSrc={props.nurseGltfSrc}
          ceilSrc={props.ceilSrc}
          standSrc={props.standSrc}
          logoSrc={props.logoSrc}
          hallSrc={props.hallSrc}
          standBeamSrc={props.standBeamSrc}
          groundTexture={props.groundTexture}
        />
        <MobileSelectBoxWrapper>
          <Image
            src={arrow_up}
            alt="select_arrow_up"
            style={{ marginBottom: '1rem' }}
          />
          <MbBoxWrapper>
            {MobileCharacters.map((value, index) => (
              <MbCharacterBox key={index} onClick={() => ClickCharacter(value)}>
                {value}
              </MbCharacterBox>
            ))}
          </MbBoxWrapper>
          <Image src={arrow_down} alt="select_arrow_down" />
        </MobileSelectBoxWrapper>
      </div>
      <MbCharacterBottom>
        <MbLeftWrapper>
          <MbCharacter>
            <MbCharacterName>ALLISHA</MbCharacterName>
            <MbCharacterJob>NURSE</MbCharacterJob>
          </MbCharacter>
          <MbCharacterDetail>
            In accordance with my father&apos;s will, &quot;All life is
            precious,&quot;I decided to be the fairest nurse.
          </MbCharacterDetail>
        </MbLeftWrapper>
        <MbRightBox />
      </MbCharacterBottom>
    </MobileWrapper>
  ) : (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <TopTitleDiv>
          <CharactersTitle>HEROS</CharactersTitle>
        </TopTitleDiv>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <LeftWrapper>
              <R3F
                idolGltfSrc={props.idolGltfSrc}
                nurseGltfSrc={props.nurseGltfSrc}
                ceilSrc={props.ceilSrc}
                standSrc={props.standSrc}
                logoSrc={props.logoSrc}
                hallSrc={props.hallSrc}
                standBeamSrc={props.standBeamSrc}
                groundTexture={props.groundTexture}
              />
            </LeftWrapper>
          </Grid>
          <Grid item xs={5}>
            <RightWrapper>
              <CharactersTop>
                <CharacterName>{clickModel}</CharacterName>
                <CharacterJob>{clickJob}</CharacterJob>
              </CharactersTop>
              <CharactersExplanation>
                In accordance with my father&apos;s will, &quot;All life is
                precious,&quot; I decided to be the fairest nurse.
              </CharactersExplanation>
              <CharacterPicOne></CharacterPicOne>
              <CharacterPicTwo></CharacterPicTwo>
              {/* <CharactersSelect> */}
              <Grid container>
                {SelectCharacters.map((character, index) => (
                  <Grid
                    item
                    xs={5}
                    sm={3}
                    md={2.5}
                    key={index}
                    onClick={() => ClickCharacter(character.NAME)}
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '5px',
                      border: '1px solid black',
                    }}
                  >
                    {character.NAME}
                  </Grid>
                ))}
              </Grid>
              {/* </CharactersSelect> */}
            </RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const idolGltfSrc = 'characters/idol6.gltf'
  const nurseGltfSrc = 'characters/nurse2Draco.gltf'
  const ceilSrc = 'characters/lightbeam4.gltf'
  const standSrc = 'characters/SM_Frame01.gltf'
  const logoSrc = 'characters/logo.gltf'
  const hallSrc = 'characters/bg.gltf'
  const groundTexture = [
    'characters/texture1.jpg',
    'characters/texturenormal.jpg',
  ]
  const standBeamSrc = 'characters/standbeam.gltf'

  return {
    props: {
      idolGltfSrc,
      nurseGltfSrc,
      ceilSrc,
      standSrc,
      logoSrc,
      hallSrc,
      groundTexture,
      standBeamSrc,
    },
  }
}
