import { Request_CharacterInfo } from 'src/constans/Characters'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { useRecoilState } from 'recoil'
import { ArrowControllerState, Guide_ControllerState } from 'src/commons/store'

interface ICharacterProps {
  id: number
  ment: string
  name: string
  job: string
  charactermessage: string
  realName: string
  age: string
  homeWorld: string
  tacticalAbliity: string
  passiveAbility: string
  ultimateAbility: string
  character_select_url: string
  character_example_url: string
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

  return (
    <GuideWrapper>
      <HeroContainer>
        <Container maxWidth={'lg'}>
          <Grid container direction="row" md={14} alignItems="center">
            <Grid item md={6}>
              <ResponsiveImage>
                <Image
                  src={character?.character_example_url}
                  alt="character_img"
                  width={550} // Add width value
                  height={550} // Add height value
                />
              </ResponsiveImage>
            </Grid>
            <Grid item md={6}>
              <Grid container justifyContent="center" alignItems="center">
                <div>
                  <CharacterMent>{character.ment}</CharacterMent>
                  <CharacterNameLine>
                    <CharacterName>{character.name}</CharacterName>
                    <CharacterJob>{character.job}</CharacterJob>
                  </CharacterNameLine>
                  <CharacterMessage>
                    {character.charactermessage}
                  </CharacterMessage>
                </div>
                <div>
                  <CharacterRealName>
                    <p>Real Name</p> <p>{character.realName}</p>
                  </CharacterRealName>
                  <CharacterAge>
                    <p>Age</p> <p>{character.age}</p>
                  </CharacterAge>
                  <CharacterHome>
                    <p>Home World</p> <p>{character.homeWorld}</p>
                  </CharacterHome>
                  <CharacterTactical>
                    <p>Tactical Abliity</p> <p>{character.tacticalAbliity}</p>
                  </CharacterTactical>
                  <CharacterPassive>
                    <p>Passive Ability</p> <p>{character.passiveAbility}</p>
                  </CharacterPassive>
                  <CharacterUltimate>
                    <p>Ultimate Ability</p> <p>{character.ultimateAbility}</p>
                  </CharacterUltimate>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </HeroContainer>
    </GuideWrapper>
  )
}

// const GuideWrapper = styled('section')({

// })

const GuideWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #000000;
`

const HeroContainer = styled.div``

const ResponsiveImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      max-width: 707px;
      height: auto;
    }
  }
`

const CharacterMent = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`

const CharacterNameLine = styled.div`
  display: flex;
  align-items: center;
`

const CharacterName = styled.p`
  font-family: 'KoreanRKTR';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
`

const CharacterJob = styled.p`
  font-family: 'KoreanRKTR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`

const CharacterMessage = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  width: 70%;
`

const CharacterRealName = styled.div`
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
  p:nth-child(2) {
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
  p:nth-child(2) {
    // Add your CSS properties for the second child of the p tag here
    padding-left: 2rem;
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
  p:nth-child(2) {
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
  p:nth-child(2) {
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
  p:nth-child(2) {
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
  p:nth-child(2) {
    padding-left: 2rem;
    color: red;
  }
`
