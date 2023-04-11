import {
  ICharacterHistory,
  Request_CharacterInfo,
  SkillAbility,
} from 'src/constans/Characters'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { useRecoilState } from 'recoil'
import {
  ArrowControllerState,
  Guide_ControllerState,
  LoginRegistryState,
} from 'src/commons/store'
import ArrowBack from 'src/assets/icon/arrow_back.png'
import { breakpoints } from 'src/constans/MediaQuery'
import CustomHead from 'src/components/CustomHeader/CustomHeader'
import TopButtonImg from 'src/assets/bt_img/Topbt.png'
import { useCallback, useMemo, useState } from 'react'
import LoginRequiredModal from 'src/components/Modal/LoginRequiredModal'
import ProgramCheckModal from 'src/components/Modal/ProgramCheckModal'
import ModGuideBgImg from 'src/assets/Bg/FatalBg_Img.jpg'

interface ICharacterProps {
  id: number
  ment: string
  name: string
  job: string
  charactermessage: string
  realName: string
  age: string
  homeWorld: string
  character_select_url: string
  character_example_url: string
  ambition: string
  weapon_url: string
  character_history: ICharacterHistory[]
  skillAbility: SkillAbility[]
  page_Bg: string
}

interface ICharacterJobProps {
  characterName: string
}

interface IParamsProps {
  id: string
}

// export async function getStaticPaths() {
//   return {
//     paths: Request_CharacterInfo.map(({ id }) => ({
//       params: { id: id.toString() },
//     })),
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }: { params: IParamsProps }) {
//   const character = Request_CharacterInfo.find(({ id }) => id === +params.id)

//   return {
//     props: {
//       character,
//     },
//   }
// }

export default function ChracterDetailPage() {
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [isPlayModal, setIsPlayModal] = useState<boolean>(false)
  const [loginRequired, setLoginRequired] = useState<boolean>(false)

  const [textcontroller, setTextcontroller] = useRecoilState(
    Guide_ControllerState
  )
  const [arrowcontroller, setArrowController] =
    useRecoilState(ArrowControllerState)

  const CharacterHandler = () => {
    setArrowController(!arrowcontroller)
  }

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const RunProgramModal = () => {
    if (loginRegistry) {
      setIsPlayModal(!isPlayModal)
    } else {
      // You can add any action here that you want to perform when the user is not logged in.
      // For example, you can show a message or redirect the user to the login page.
      console.log('로그인 안되어있다')
      setLoginRequired(!loginRequired)
    }
  }
  // useRouer() 동적 라우터 로 쿼리를 통해서 id 를 가져온다.
  const router = useRouter()
  const { id } = router.query

  const character = useMemo(() => {
    if (!id) return null
    return Request_CharacterInfo.find((c) => c.id === +id)
  }, [id])

  if (!character) {
    return <div>Loading...</div>
  }

  return (
    <>
      <CustomHead
        title={`FATAL ${character.name}`}
        description="Never-Ending Combat on FatalZone"
      />
      {loginRequired ? (
        <LoginRequiredModal
          loginRequired={loginRequired}
          setLoginRequired={setLoginRequired}
        />
      ) : null}
      {isPlayModal ? (
        <ProgramCheckModal
          setIsPlayModal={setIsPlayModal}
          isPlayModal={isPlayModal}
        />
      ) : null}
      <CharacterIdWrapper>
        <HeroContainer>
          <Container maxWidth={'lg'}>
            <PageBackDiv>
              <PageBackImg src={ArrowBack.src} alt="arrow_back_page" />
              <p onClick={() => router.push('/hero')}>BACK</p>
            </PageBackDiv>

            <InnerContainer>
              <CharacterName>{character.name}</CharacterName>
              {/* <CharacterJob characterName={character.name}>
                {character.job}
              </CharacterJob> */}
              <ResponsiveImage>
                <Image
                  src={character.character_select_url}
                  alt="character_img"
                  priority
                  width={758}
                  height={512}
                />
              </ResponsiveImage>

              <AbilityLine>
                <h5>Ability</h5>
                <LineDivider></LineDivider>
              </AbilityLine>
              <AbiltySkillLine>
                {character.skillAbility &&
                  character.skillAbility.map((skill, index) => (
                    <AbiltyMapping key={index}>
                      <Image
                        src={skill.url}
                        alt="skill_icon"
                        width={200}
                        height={200}
                      />

                      <SkillName>{skill.skillName}</SkillName>
                      <SkillCommand>{skill.commandSkill}</SkillCommand>
                    </AbiltyMapping>
                  ))}
              </AbiltySkillLine>

              <StoryLine>
                <h5>Story</h5>
                <LineDivider></LineDivider>
              </StoryLine>
              <div>
                {character.character_history &&
                  character.character_history.map((history, index) => (
                    <StroyDivLine key={index}>
                      <StoryText>{history.history}</StoryText>
                    </StroyDivLine>
                  ))}
              </div>
              <PlayNowBt onClick={RunProgramModal} />
              <HeightDivider></HeightDivider>
            </InnerContainer>
          </Container>
        </HeroContainer>
        <HeroBgPage>
          <HeroBgImg src={character.page_Bg} alt="heroBg" />
        </HeroBgPage>
        <TopButton>
          <Image
            onClick={scrollToTop}
            src={TopButtonImg}
            alt="top_button"
            width={40}
            height={40}
          />
        </TopButton>
      </CharacterIdWrapper>
    </>
  )
}

const TopButton = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 5rem;
  cursor: pointer;
  z-index: 999;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    right: 1rem;
    bottom: 3.5rem;
  }
`

const CharacterIdWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #000000;
  padding: 1rem 0;
  background: url(${ModGuideBgImg.src}) no-repeat center;
  background-position: 50%;
  background-size: cover;
  z-index: -1;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const HeroContainer = styled.div`
  padding-top: 80px;
  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 60px;
  }
`

const PageBackDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #757575;
    padding-left: 1rem;
    cursor: pointer;
    :hover {
      color: #75ffde;
    }
    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: 24px;
    }
  }
`

const PageBackImg = styled.img`
  width: 37px;
  height: 37px;
  @media (max-width: ${breakpoints.smallTablet}px) {
    width: 19px;
    height: 19px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  /* justify-content: center;
  align-items: center; */
  @media screen and (min-width: ${breakpoints.smallTablet}px) {
  }
`

const ResponsiveImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 95%;
    height: auto;
    min-width: 350px;
  }
`

const AbiltySkillLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const AbiltyMapping = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
    @media screen and (max-width: ${breakpoints.mobile}px) {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
    }
  }
`

const SkillCommand = styled.p`
  font-family: 'Randhu';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding-top: 1rem;
  color: rgba(255, 255, 255, 0.5);
`

const SkillName = styled.p`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;

  color: #ffffff;
  white-space: pre-wrap;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 22px;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`

const CharacterName = styled.h5`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 200px;
  color: #ffffff;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 150px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 100px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 4rem;
  }
`

const CharacterJob = styled.p<ICharacterJobProps>`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  /* transform: translate(250%, -550%); */
  transform: ${({ characterName }) => {
    if (characterName === 'ollie') {
      return 'translate(150%, -550%)'
    } else if (characterName === 'CINDY') {
      return 'translate(500%, -550%)'
    } else if (characterName === 'Allisha') {
      return 'translate(250%, -550%)'
    } else if (characterName === 'GRady') {
      return 'translate(250%, -550%)'
    } else if (characterName === 'koonsman') {
      return 'translate(250%, -550%)'
    } else if (characterName === 'michelle') {
      return 'translate(200%, -550%)'
    } else {
      return 'translate(250%, -550%)'
    }
  }};
  @media (max-width: ${breakpoints.tablet}px) {
    transform: ${({ characterName }) => {
      if (characterName === 'ollie') {
        return 'translate(150%, -450%)'
      } else if (characterName === 'CINDY') {
        return 'translate(400%, -450%)'
      } else if (characterName === 'Allisha') {
        return 'translate(250%, -450%)'
      } else if (characterName === 'GRady') {
        return 'translate(200%, -450%)'
      } else if (characterName === 'koonsman') {
        return 'translate(200%, -450%)'
      } else if (characterName === 'michelle') {
        return 'translate(170%, -450%)'
      } else {
        return 'translate(250%, -550%)'
      }
    }};
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    transform: ${({ characterName }) => {
      if (characterName === 'ollie') {
        return 'translate(100%, -350%)'
      } else if (characterName === 'CINDY') {
        return 'translate(250%, -350%)'
      } else if (characterName === 'Allisha') {
        return 'translate(200%, -350%)'
      } else if (characterName === 'GRady') {
        return 'translate(150%, -350%)'
      } else if (characterName === 'koonsman') {
        return 'translate(100%, -350%)'
      } else if (characterName === 'michelle') {
        return 'translate(100%, -350%)'
      } else {
        return 'translate(250%, -550%)'
      }
    }};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 24px;
    transform: ${({ characterName }) => {
      if (characterName === 'ollie') {
        return 'translate(100%, -350%)'
      } else if (characterName === 'CINDY') {
        return 'translate(250%, -350%)'
      } else if (characterName === 'Allisha') {
        return 'translate(200%, -320%)'
      } else if (characterName === 'GRady') {
        return 'translate(150%, -350%)'
      } else if (characterName === 'koonsman') {
        return 'translate(150%, -350%)'
      } else if (characterName === 'michelle') {
        return 'translate(100%, -350%)'
      } else {
        return 'translate(250%, -550%)'
      }
    }};
  }
`

const AbilityLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 5rem;
  justify-content: center;
  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    margin-bottom: 2.5rem;
  }
`

const StoryLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 5rem;
  justify-content: center;
  h5 {
    position: absolute;
    font-family: 'Atomic Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    margin: 2.5rem 0;
  }
`

const StroyDivLine = styled.div`
  padding-bottom: 2rem;
  text-align: left;
`

const StoryText = styled.p`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  z-index: 5;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 1rem;
  }
`

const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-left: 1rem;
  border: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    #ffffff 100%
  );
  border-image-slice: 1;
`

const HeroBgPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 24rem;
  opacity: 0.2;
  z-index: 1;
  @media (max-width: ${breakpoints.tablet}px) {
    left: 15rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    left: 10rem;
  }
  @media (max-width: 600px) {
    left: 5rem;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const HeroBgImg = styled.img`
  width: 55%;
  height: auto;
  min-width: 1000px;
  @media (max-width: ${breakpoints.tablet}px) {
    min-width: 900px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    min-width: 800px;
  }
  @media (max-width: 600px) {
    min-width: 800px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    /* min-width: 800px; */
  }
`

const PlayNowBt = styled.div`
  margin: 2rem 0;
  background-image: url('/Playnow_off.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  z-index: 20;
  transition: background-image 0.3s ease;
  &:hover {
    background-image: url('/Playnow_on.png');
  }
  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0.5rem 0;
  }
`

const HeightDivider = styled.div`
  height: 0px;
  @media (max-width: ${breakpoints.tablet}px) {
    height: 150px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    height: 100px;
  }
`
