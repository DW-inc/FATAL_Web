import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import PageTransition from 'src/components/Transition/PageTransition'
import { Grid } from '@mui/material'
import ModGuide_one_img from 'src/assets/modGuideImg/modGuide_one.png'
import ModGuide_two_img from 'src/assets/modGuideImg/modGuide_two.png'
import ModGuide_three_img from 'src/assets/modGuideImg/modGuide_three.png'
import { breakpoints } from 'src/constans/MediaQuery'
import { Theme } from '@mui/material/styles'
import CustomHead from 'src/components/CustomHeader/CustomHeader'

const ModeGuideWrapper = styled.section`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1b1b1b;
  padding: 1rem;
`

const ModGuideTopLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModGuideTitle = styled.h2`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 4.2rem;
  }
`

const ModGuideText = styled.p`
  font-family: 'Bebas Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: #ffffff;

  opacity: 0.5;
`

export default function ModGuide() {
  return (
    <>
      <CustomHead
        title="FATAL GUIDE"
        description="Never-Ending Combat on FatalZone"
      />

      <PageTransition>
        <ModeGuideWrapper>
          <CustomContainer maxWidth={'lg'}>
            <ModGuideTopLine>
              <ModGuideTitle>mod guide</ModGuideTitle>
              <ModGuideText>
                Check out what modes are available and find the game mode that
                suits your style
              </ModGuideText>
            </ModGuideTopLine>
            <CustomGrid container spacing={5} justifyContent={'center'}>
              <Grid item md={4} sm={6.4}>
                <ModCard>
                  <ImageContainer>
                    <ModImgOne
                      src={ModGuide_one_img.src}
                      alt="mod_img"
                    ></ModImgOne>
                    <BlurDivider />
                  </ImageContainer>
                  <ModCardTitle>HIJACK</ModCardTitle>
                  <ModCardText>
                    Faster than the other team <br /> Gather your target
                    resources
                  </ModCardText>
                </ModCard>
              </Grid>
              <Grid item md={4} sm={6.4}>
                <ModCard>
                  <ImageContainer>
                    <ModImgOne
                      src={ModGuide_two_img.src}
                      alt="mod_img"
                    ></ModImgOne>
                    <BlurDivider />
                  </ImageContainer>
                  <ModCardTitle>?</ModCardTitle>
                  <ModCardText>COMING SOON</ModCardText>
                </ModCard>
              </Grid>
              <Grid item md={4} sm={6.4}>
                <ModCard>
                  <ImageContainer>
                    <ModImgOne
                      src={ModGuide_three_img.src}
                      alt="mod_img"
                    ></ModImgOne>
                    <BlurDivider />
                  </ImageContainer>
                  <ModCardTitle>?</ModCardTitle>
                  <ModCardText>COMING SOON</ModCardText>
                </ModCard>
              </Grid>
            </CustomGrid>
          </CustomContainer>
          {/* <GuidDivider></GuidDivider> */}
        </ModeGuideWrapper>
      </PageTransition>
    </>
  )
}

const CustomContainer = styled(Container)`
  margin: 6rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const CustomGrid = styled(Grid)`
  padding: 3rem 0;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 10px;
`

const ModCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 5px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.4) 80%,
    #000000 80%
  );
  z-index: 2;
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
    border: 3px solid #53ffd6;
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
  &:hover ${ImageContainer} {
    border: 1px solid #53ffd6;
  }
`

const ModImgOne = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const BlurDivider = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.269939) 50.13%,
    #000000 85%
  );
  border-radius: 10px;
  height: 100px;
  bottom: 0rem;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const ModCardTitle = styled.h4`
  position: absolute;
  font-family: 'Randhu';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 2px 4px #787878;
  z-index: 5;
`

const ModCardText = styled.p`
  position: absolute;
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
  margin-top: 120px;
  z-index: 5;
`
