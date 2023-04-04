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
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'
import ArrowBack from 'src/assets/icon/arrow_back.png'
import { breakpoints } from 'src/constans/MediaQuery'
import CustomHead from 'src/components/CustomHeader/CustomHeader'
import TopButtonImg from 'src/assets/bt_img/Topbt.png'
import { useCallback } from 'react'

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

export async function getStaticPaths() {
  return {
    paths: Request_CharacterInfo.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: IParamsProps }) {
  const character = Request_CharacterInfo.find(({ id }) => id === +params.id)

  return {
    props: {
      character,
    },
  }
}

export default function ChracterDetailPage({
  character,
}: {
  character: ICharacterProps
}) {
  const router = useRouter()

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

  return (
    <>
      <CustomHead
        title={`FATAL ${character.name}`}
        description="FATAL BOMB HERO"
      />
      <CharacterIdWrapper>
        <HeroContainer>
          <Container maxWidth={'lg'}>
            <PageBackDiv>
              <Image src={ArrowBack} alt="arrow_back_page" />
              <p onClick={() => router.push('/hero')}>BACK</p>
            </PageBackDiv>

            <InnerContainer>
              <CharacterName>{character.name}</CharacterName>
              <CharacterJob characterName={character.name}>
                {character.job}
              </CharacterJob>
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
  background: #1b1b1b;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const HeroContainer = styled.div`
  padding-top: 80px;
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

const CharacterMessage = styled.h5`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  color: #000000;
  white-space: pre-wrap;
  text-align: center;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 1.8rem;
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

const WeponResponsiveImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 70%;
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
  font-family: 'Randhu';
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
        return 'translate(150%, -350%)'
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
        return 'translate(200%, -350%)'
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

const CharacterRealName = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    // Add your CSS properties for the second child of the p tag here
    padding-left: 2rem;
    color: red;
  }
`

const CharacterAge = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    // Add your CSS properties for the second child of the p tag here
    color: red;
  }
`

const CharacterHome = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    // Add your CSS properties for the second child of the p tag here
    padding-left: 2rem;
    color: red;
  }
`

const CharacterTactical = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    // Add your CSS properties for the second child of the p tag here
    padding-left: 2rem;
    color: red;
  }
`

const CharacterPassive = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    // Add your CSS properties for the second child of the p tag here
    padding-left: 2rem;
    color: red;
  }
`

const CharacterUltimate = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  p:nth-of-type(2) {
    padding-left: 2rem;
    color: red;
  }
`

const CharacterHistoryText = styled.p`
  width: 100%;
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  white-space: pre-wrap;
  padding-top: 2rem;
  padding-bottom: 5rem;
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

const WeaponLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  h5 {
    font-family: 'Randhu';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #232323;
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
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
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
  /* color: rgba(255, 255, 255, 0.8); */
  color: #fff;
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

const HeightDivider = styled.div`
  height: 300px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
    height: 150px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    height: 100px;
  }
`
