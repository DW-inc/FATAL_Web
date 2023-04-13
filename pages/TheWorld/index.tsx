import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import TheWorldBgImg from 'src/assets/Bg/TheWorld_bg.png'
import { breakpoints } from 'src/constans/MediaQuery'

import CustomHead from 'src/components/CustomHeader/CustomHeader'
import LoginRequiredModal from 'src/components/Modal/LoginRequiredModal'
import ProgramCheckModal from 'src/components/Modal/ProgramCheckModal'
import { useRecoilState } from 'recoil'
import { LoginRegistryState } from 'src/commons/store'

export default function TheWorldPage() {
  const router = useRouter()

  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [isPlayModal, setIsPlayModal] = useState<boolean>(false)
  const [loginRequired, setLoginRequired] = useState<boolean>(false)
  const RunProgramModal = () => {
    if (loginRegistry) {
      setIsPlayModal(!isPlayModal)
    } else {
      // console.log('로그인 안되어있다')
      setLoginRequired(!loginRequired)
    }
  }

  return (
    <>
      <CustomHead
        title="FATAL BOMB"
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
      <FixedDivider />
      <WorldWrapper>
        <Container maxWidth={'lg'}>
          <WorldInnerContainer>
            <WorldTitle>THE WORLD</WorldTitle>
            <FirstWrapper>
              <FirstTitle>&quot;The Sink hole&quot;</FirstTitle>
              <FirstSubTitle>
                Humanity has plummeted into the deep cold dark with the giant
                sinkhole occurred on Earth
              </FirstSubTitle>
              <FirstDetailText>
                <p>
                  In 2190, humanity and the world government [FAITH] attempted
                  to build the Dyson Sphere to make leap to the next level of
                  civilization.
                </p>
                <p>
                  However, due to an unexplained gravity device collapse,
                  massive city size sinkholes occurred across the planet.
                </p>
              </FirstDetailText>
              <FirstDetailText>
                <p>
                  In a matter of minutes, the exponentially developed
                  civilization since the post-Industrial Revolution fell into
                  the deep, dark abyss{' '}
                </p>
                <p>
                  {' '}
                  with the massive collapse and chaos. The survivors were
                  initially relieved to be alive,
                </p>
                <p>
                  {' '}
                  but they were in despair at the sight of hell awaiting them.
                </p>
              </FirstDetailText>
              <FirstDetailText>
                <p>But where there is darkness, there is light.</p>
                <p>
                  {' '}
                  As the gravity device collapsed, the device fell onto the
                  ground and some parts of it fell into the sinkhole,
                </p>{' '}
                <p>
                  brought a new mineral resource, GEM, from the depths of the
                  earth to the surface where it can be mined.
                </p>
              </FirstDetailText>
            </FirstWrapper>
            <SecondWrapper>
              <SecondTitle>&quot;Chaos begins&quot;</SecondTitle>
              <SecondSubTitle>
                New resources and new weapons. They brought a new order of
                chaos.
              </SecondSubTitle>
              <SecondDetailText>
                <p>
                  The blue skies that people had always seen had turned bleak,
                  with giant chunks of scrap metal floating in the sky
                </p>
                <p>
                  like it’s foreshadowing humanity&lsquo;s future, and humanity
                  had forgotten the order they had established together.
                </p>
                <p>
                  The situation pushed people further into a primal and savage
                  world.
                </p>
                <p>
                  First with bare hands, then with stones and knives, the
                  desperate fights showing thousands of years set back,
                </p>
                <p>led to armed control by [FAITH].</p>
              </SecondDetailText>
              <SecondDetailText>
                <p>
                  While studying GEM, FAITH realized that when combined with
                  [HALO],
                </p>
                <p>
                  the power source of the Dyson Sphere, GEM generates
                  near-infinite energy. In order to mine GEM in earnest,
                </p>
                <p>
                  a facility called the FAITH CORE is set up halfway between the
                  Dyson Sphere and the ground surface,
                </p>

                <p>
                  {' '}
                  and installs modifications of the Dyson Sphere&apos;s reactor
                  and defense weapon punisher,
                </p>
                <p>
                  which use Halo as an energy source, as a device to mine GEM
                  and combine it with HALO.
                </p>
              </SecondDetailText>
              <SecondDetailText>
                In the process, an unprecedented weapon has emerged: a
                specialized bomb that resembles the primitive
                <br /> and most destructive contemporary world, and as with any
                new means of violence, the innovation of weaponry has been
                pointing
                <br /> at the weak in the hands of the strong, which led to
                domination and oppression.
                <br /> With all these preparations in place, FAITH began to send
                workers underground to mine.
                <br /> Adapting to the new apocalyptic era, FAITH&apos;s
                executives began to divide classes apart from the common people,
                <br /> and the people, including the workers, began to live in
                the residential region, the COLONY, on the edge of the sinkhole.
              </SecondDetailText>
            </SecondWrapper>
            <ThirdWrapper>
              <ThirdTitle>&quot;Generation of Savages&quot;</ThirdTitle>
              <ThirdSubTitle>
                Those who love the rule of savagery. We call them the Generation
                of Savages.
              </ThirdSubTitle>
              <ThirdDetailText>
                <p>
                  Everyone has forgotten that great power comes at a great cost.
                  Exposure to the chemical reactions
                </p>
                <p>
                  that occur during the process of combining HALO and GEM has
                  caused people to suffer from insomnia, psychosis, and other
                  side effects that can lead to
                </p>{' '}
                <p>
                  superhuman strength or increased violence, a phenomenon we
                  call OVERWHELMING.
                </p>{' '}
                <p>
                  Some people saw this phenomenon as a sign of divine power, and
                  a blind fanaticism [WORSHIP] was born.
                </p>{' '}
                <p>
                  The cases of people voluntarily participating in mining to
                  experience overwhelming appeared,
                </p>{' '}
                <p>and it gradually developed into a social problem.</p>{' '}
                <p>
                  Taking this seriously, Pace began sending prisoners down to
                  the underground as laborers,
                </p>
                <p>
                  {' '}
                  while using regular soldiers armed with powerful weapons as
                  leashes for the prisoners.
                </p>
              </ThirdDetailText>
              <ThirdDetailText>
                <p>
                  The prisoners suffered the same side effects, and it&quot;s
                  unlikely that they&quot;d be meekly compliant after gaining
                  such power.
                </p>
                <p>
                  The prisoners who gained superhuman strength escaped from the
                  mine
                </p>
                <p>
                  and gathered in the remaining of a wreck town on the edge of
                  the sinkhole.
                </p>
                <p>
                  To keep them out, FAITH set up a first and second line of
                  defense at the edge of the sinkhole, and to quell the looting
                  and rampage,
                </p>
                <p>
                  they researched OVERWHELMING for a project to develop
                  superhumans without side effects.
                </p>
                <p>
                  {' '}
                  Thus was born FAITH&quot;s most powerful weapon: a regular
                  army special forces unit with superhumans.
                </p>
              </ThirdDetailText>
              <ThirdDetailText>
                <p>
                  A man named &quot;X&quot; appears in front of the prisoners
                  living in the GHETTO of wreck twon. He gathered the
                  controllable people
                </p>{' '}
                <p>
                  among the civilians, prisoners, and outlaws who have gained
                  superhuman strength
                </p>
                <p>
                  and created a resistance organization [CREED] to overthrow
                  FAITH.
                </p>
              </ThirdDetailText>
            </ThirdWrapper>

            <FourthWrapper>
              <FourthTitle>
                &quot;Never-Ending Combat in Fatal Zone&quot;
              </FourthTitle>
              <FourthDetailText>
                <p>The last utopia found in the midst of strife.</p>
                <p>The last honor left in a dystopia.</p>
                <p>The never-ending battle for it</p>
                <p>begins in the Fatal Zone.</p>
                <p>Throw to the world, Run for the world!</p>
              </FourthDetailText>
            </FourthWrapper>
            <BottomTitle>{'<FATAL BOMB>'}</BottomTitle>
            <PlayShowMore onClick={RunProgramModal}>
              <CustomImg
                className="image-off"
                src="/Playnow_off.png"
                alt="Show More Button Off"
              />
              <CustomImg
                className="image-on"
                src="/Playnow_on.png"
                alt="Show More Button On"
              />
            </PlayShowMore>
          </WorldInnerContainer>
        </Container>
      </WorldWrapper>
    </>
  )
}
const CustomImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`

const PlayShowMore = styled.div`
  margin: 3rem 0 5rem 0;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  z-index: 10;
  position: relative;
  overflow: hidden;
  .image-on,
  .image-off {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
  }

  .image-on {
    opacity: 0;
  }

  &:hover .image-off {
    opacity: 0;
  }

  &:hover .image-on {
    opacity: 1;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    display: none;
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
    margin: 0;
    width: 250px;
    transform: translate(0, 150%);
  }
`

const BottomTitle = styled.h2`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 120px;
  text-align: center;
  color: #ffffff;
  margin-top: 50px;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 110px;
    margin-bottom: 50px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 100px;
  }
  @media (max-width: 600px) {
    font-size: 80px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 60px;
  }
`

const FourthDetailText = styled.div`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
`

const FourthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const FourthTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const ThirdTitle = styled.h3`
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 35px;
  }
`

const ThirdSubTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const ThirdDetailText = styled.div`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 26px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const SecondTitle = styled.h3`
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 35px;
  }
`

const SecondSubTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const SecondDetailText = styled.div`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 26px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const FixedDivider = styled.div`
  height: 80px;
  @media (max-width: ${breakpoints.tablet}px) {
    height: 60px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const WorldWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1b1b1b;
  background: url(${TheWorldBgImg.src}) no-repeat center;
  background-position: 50%;
  background-size: cover;
`

const WorldInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

const WorldTitle = styled.h1`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 82px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 90px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 80px;
  }
`

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FirstTitle = styled.h3`
  font-family: 'Bebas';

  font-weight: 400;
  font-size: 50px;
  text-align: center;

  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 35px;
  }
`

const FirstSubTitle = styled.h4`
  font-family: 'Atomic Marker';
  font-weight: 400;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const FirstDetailText = styled.div`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 26px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
  }
`
