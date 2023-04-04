import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import { breakpoints } from 'src/constans/MediaQuery'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.mobile}px) {
    justify-content: unset;
    /* align-items: unset; */
    padding-top: 4rem;
  }
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 0px;
  }
`

const StyledTypography = styled(Typography)`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 93px;
  color: #e4ff00;
  z-index: 10;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 5rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 4.4rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    /* font-size: 3.2rem; */
  }
`

const PlayProve = styled.p`
  font-family: 'Bebas Kai';
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 3.2rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    /* font-size: 1.6rem; */
  }
`

const PlayProveStory = styled.p`
  font-family: 'Nextrue Con Regular';
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;
  padding-top: 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 2rem);
    font-size: 1rem;
  }
`
const PlayProveStoryOne = styled.p`
  font-family: 'Nextrue Con Regular';
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;
  padding-top: 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 2rem);
    font-size: 1rem;
  }
`

const PlayProveStoryTwo = styled.p`
  font-family: 'Nextrue Con Regular';
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 2rem);
    font-size: 1rem;
  }
`

const PlayProveBomb = styled.p`
  width: 75%;
  font-family: 'Nextrue Con Regular Slant';
  font-size: 3.125rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;
  padding-top: 1rem;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 80%;
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    width: 90%;
    font-size: 2.2rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 1rem);
    font-size: 1.2rem;
  }
`

const PlayProvePurpose = styled.p`
  font-family: 'Nextrue Con Light Slant';
  font-size: 2.4rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;
  padding-top: 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 1rem);
    font-size: 1.2rem;
  }
`

const PlayProveFun = styled.p`
  font-family: 'Nextrue Con Regular Slant';
  font-size: 2.875rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    width: calc(100% - 1rem);
    font-size: 1.4rem;
  }
`
const PlayShowMore = styled.div`
  margin: 2rem 0;
  background-image: url('/SHOWMORE_button_ OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 50px;
  transition: background-image 0.3s ease;
  z-index: 10;
  &:hover {
    background-image: url('/SHOWMORE_button_ ON.png');
  }
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    /* font-size: 1.2vw; */
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
    margin: 0.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 0;
    margin: 0.5rem 0;
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

export default function FatalPlay() {
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
  return (
    <>
      <VideoBackground
        loop
        muted
        autoPlay
        playsInline
        src="/video/Main_bg.mp4"
      ></VideoBackground>
      <Wrapper>
        <Container maxWidth={'lg'}>
          <InnerContainer>
            <StyledTypography variant="h2" sx={{ textAlign: { xs: 'center' } }}>
              If you want anything,Take it.
            </StyledTypography>
            <PlayProve>It&apos;s only combat that makes it happen!</PlayProve>
            {/* <PlayProveStory>
              Prove yourself in battle against the backdrop of a devastated
              Apocalypse world.
            </PlayProveStory>
            <PlayProveStoryOne>
              Through the various maps and battle modes of team battles,
            </PlayProveStoryOne>
            <PlayProveStoryTwo>
              complete the given missions and show your fighting sense to your
              heart&apos;s
            </PlayProveStoryTwo>
            <PlayProveBomb>
              There are a lot of different types of bombs that go off, and
              they&apos;re walking through the sky and the earth.
            </PlayProveBomb>
            <PlayProvePurpose>
              Be one of the combatants, for your camp, for your purpose.
            </PlayProvePurpose>
            <PlayProveFun>
              Just throw yourself in constant trouble for fun.
            </PlayProveFun> */}
            <PlayShowMore></PlayShowMore>
          </InnerContainer>
        </Container>
      </Wrapper>
    </>
  )
}
