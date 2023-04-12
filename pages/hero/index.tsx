import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import Image from 'next/image'
import Guide_ControllerImg from 'src/assets/image/guide_controller.png'
import { Request_CharacterInfo } from 'src/constans/Characters'
import { useRouter } from 'next/router'
import ALISHAImg from 'src/assets/image/character/ALISHA.png'
import CINDYImg from 'src/assets/image/character/CINDY.png'
import GRADYImg from 'src/assets/image/character/GRADY.png'
import KOONSMANImg from 'src/assets/image/character/KOONSMAN.png'
import MICHELLEImg from 'src/assets/image/character/MICHELLE.png'
import OLLIEImg from 'src/assets/image/character/OLLIE.png'
import COMMINGSOONImGMan from 'src/assets/image/character/commingSoonMan.png'
import COMMINGSOONImGWooman from 'src/assets/image/character/commingSoonWooman.png'
import { Grid } from '@mui/material'
import { breakpoints } from 'src/constans/MediaQuery'
import CharacterCommingModal from 'src/components/Modal/CharacterCommingModal'
import PageTransition from 'src/components/Transition/PageTransition'
import CustomHead from 'src/components/CustomHeader/CustomHeader'
import { useTheme, useMediaQuery } from '@material-ui/core'
import Before_hover_Img from 'src/assets/bt_img/before-hover.png'
import After_hover_Img from 'src/assets/bt_img/after-hover.png'
import ModGuideBgImg from 'src/assets/Bg/FatalBg_Img.png'
interface INameCommingSoon {
  isComingSoon: boolean
}

const CharacterListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1b1b1b;
  background: url(${ModGuideBgImg.src}) no-repeat center;
  background-position: 50%;
  background-size: cover;

  /* background: #fff; */
`

const PageDivider = styled.div`
  /* padding-top: 80px; */
`

const HeroTextLine = styled.div`
  font-family: 'Noto Sans';
  color: #000;
  padding: 3rem;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 1rem 0.5rem 1rem;
  }
`

const HeroTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  text-align: center;
  color: #ffffff;
  /* background: linear-gradient(90deg, #1b1b1b 0%, rgba(0, 0, 0, 0) 30%),
    linear-gradient(270deg, #1b1b1b 0%, rgba(0, 0, 0, 0) 40%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.46875) 73.12%,
      rgba(255, 255, 255, 0) 100%
    ); */

  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 55px;
  }
  @media (max-width: 600px) {
    font-size: 45px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.9rem;
  }
`

const HeroDetailText = styled.p`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: #ffffff;

  opacity: 0.5;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* padding: 0rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const CharacterImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  min-width: 240px;
  padding: 0.8rem;
  border-radius: 10px;
  &:hover {
    border: 1px solid #53ffd6;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    min-width: 200px;
    padding: 0.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0.6rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 146px;
    padding: 0.4rem;
  }
`

const CharacterName = styled.div<INameCommingSoon>`
  position: absolute;
  bottom: 2rem; // Adjust this to change the vertical position of the text
  left: 0; // Adjust this to change the horizontal position of the text
  width: 100%;
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: ${(props) => (props.isComingSoon ? '36' : '48')}px;
  padding: ${(props) => (props.isComingSoon ? '0.35' : '0')}rem;
  color: #fff;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${(props) => (props.isComingSoon ? '24' : '32')}px;
    padding: ${(props) => (props.isComingSoon ? '0.35' : '0')}rem;
  }
`

// const ChracterCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 3px solid rgba(255, 255, 255, 0.2);
//   border-radius: 20px;
//   transition: background-color 1s ease-in-out;
//   cursor: pointer;

//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: transparent;
//     transition: background-color 1s ease-in-out;
//     border-radius: 10px;
//     z-index: 1;
//   }

//   &:hover::before {
//     background: linear-gradient(
//       180deg,
//       rgba(70, 121, 109, 0) 50%,
//       rgba(83, 255, 214, 0.15) 64.13%,
//       rgba(83, 255, 214, 0.25) 76.31%,
//       #53ffd6 100%
//     );
//   }
// `

const ChracterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.4) 80%,
    #000000 80%
  );
  z-index: 2;
  background-image: url(${Before_hover_Img.src});
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    transition: opacity 0.2s linear;
    border-radius: 10px;
    z-index: -1;
    opacity: 0.5;
  }

  &:hover::before {
    background: linear-gradient(
      180deg,
      rgba(70, 121, 109, 0) 50%,
      rgba(83, 255, 214, 0.15) 64.13%,
      rgba(83, 255, 214, 0.25) 76.31%,
      #53ffd6 100%
    );
    z-index: 2;
    opacity: 1;
  }
  &:hover {
    background-image: url(${After_hover_Img.src});
  }

  &:hover > ${CharacterImg} {
    border: 1px solid #53ffd6 !important;
  }
`

const ChractersImg = [
  {
    name: 'ollie',
    src: OLLIEImg,
  },
  {
    name: 'CINDY',
    src: CINDYImg,
  },
  {
    name: 'Allisha',
    src: ALISHAImg,
  },
  {
    name: 'GRady',
    src: GRADYImg,
  },
  {
    name: 'koonsman',
    src: KOONSMANImg,
  },
  {
    name: 'michelle',
    src: MICHELLEImg,
  },
  {
    name: '?',
    src: COMMINGSOONImGMan,
  },
  {
    name: '?\n',
    src: COMMINGSOONImGWooman,
  },
]

export default function Characters() {
  const router = useRouter()
  const [isOpenCommingSoonModal, setIsOpenCommingSoonModal] =
    useState<boolean>(false)

  const theme = useTheme()

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  return (
    <>
      <CustomHead
        title="FATAL HERO"
        description="Never-Ending Combat on FatalZone"
      />

      <PageTransition>
        {isOpenCommingSoonModal ? (
          <CharacterCommingModal
            isOpenCommingSoonModal={isOpenCommingSoonModal}
            setIsOpenCommingSoonModal={setIsOpenCommingSoonModal}
          />
        ) : null}
        <CharacterListWrapper>
          <PageDivider />
          <Container maxWidth={'lg'} style={{ padding: '4rem 2rem' }}>
            <HeroTextLine>
              <HeroTitle>Please choose HERO</HeroTitle>
              <HeroDetailText>
                Find a hero that fits your style of play among many heroes.
                <br />
                You can learn one hero perfectly or try all heroes.
              </HeroDetailText>
              {/* <HeroDetailText>
                한 명의 히어로를 완벽히 익히거나 모든 히어로를 사용해 볼 수
                있습니다.
              </HeroDetailText> */}
            </HeroTextLine>
            <Grid
              container
              justifyContent={'center'}
              spacing={isSmallScreen ? 2.5 : isMediumScreen ? 6 : 10}
            >
              {Request_CharacterInfo.map(({ name, id }) => {
                const characterImg = ChractersImg.find(
                  (img) => img.name === name
                )?.src
                if (!characterImg) {
                  return null
                }
                const handleClick = () => {
                  if (id === 7 || id === 8) {
                    setIsOpenCommingSoonModal(true)
                  } else {
                    router.push(`/hero/${id}`)
                  }
                }
                return (
                  <Grid
                    item
                    xs={6}
                    md={3.8}
                    sm={5}
                    className="Character_card"
                    key={id}
                    onClick={handleClick}
                  >
                    <ChracterCard>
                      <ImageContainer>
                        <CharacterImg
                          src={characterImg.src}
                          alt="select_character"
                        />
                        <CharacterName isComingSoon={name === '?'}>
                          {name}
                        </CharacterName>
                        <BlurDivider />
                      </ImageContainer>
                    </ChracterCard>
                  </Grid>
                )
              })}
            </Grid>
            <CharacterComming>
              There will be 10+ characters in Early Access
            </CharacterComming>
          </Container>
        </CharacterListWrapper>
      </PageTransition>
    </>
  )
}

const CharacterComming = styled.p`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin: 4rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const BlurDivider = styled.div`
  position: absolute;
  width: 93%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.269939) 50.13%,
    #000000 85%
  );
  border-radius: 10px;
  height: 100px;
  bottom: 0.7rem;
  @media (max-width: ${breakpoints.tablet}px) {
    bottom: 0.5rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    bottom: 0.66rem;
    width: 93%;
  }
  @media (max-width: 600px) {
    bottom: 0.5rem;
    width: 91%;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 90%;
    bottom: 0.4rem;
  }
`
