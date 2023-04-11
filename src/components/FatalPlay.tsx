import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import { breakpoints } from 'src/constans/MediaQuery'
import LoginRequiredModal from './Modal/LoginRequiredModal'
import ProgramCheckModal from './Modal/ProgramCheckModal'
import { useRecoilState } from 'recoil'
import { LoginRegistryState } from 'src/commons/store'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    /* justify-content: unset; */
    /* align-items: unset; */
    /* padding-top: 4rem; */
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
    margin-bottom: 10rem;
  }
`

const StyledTypography = styled(Typography)`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  color: #e4ff00;
  z-index: 10;
  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
    font-size: 5rem;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 2.4rem;
  }
`

const PlayProve = styled.p`
  font-family: 'Bebas Kai';
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  opacity: 0.7;
  padding-top: 1rem;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    font-size: 1.2rem;
  }
`

const PlayShowMore = styled.div`
  margin: 5rem 0;
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
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
    margin: 0;
    width: 250px;
    transform: translate(0, 150%);
  }
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

export default function FatalPlay() {
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [isPlayModal, setIsPlayModal] = useState<boolean>(false)
  const [loginRequired, setLoginRequired] = useState<boolean>(false)

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

  return (
    <>
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
              Throw yourself out
              <br /> into the world!
            </StyledTypography>
            <PlayProve>Dive to the bottom of a giant sinkhole</PlayProve>

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
          </InnerContainer>
        </Container>
      </Wrapper>
    </>
  )
}

const CustomImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`
