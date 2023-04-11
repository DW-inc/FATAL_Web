import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import ModExampleImg from 'src/assets/modGuideImg/mod_example.png'
import ModGuideBgImg from 'src/assets/Bg/FatalBg_Img.jpg'
import { breakpoints } from 'src/constans/MediaQuery'
export default function ModeDetailPage() {
  const router = useRouter()
  const { mode } = router.query
  return (
    <>
      <FixedDivider />
      <ModeDetailWrapper>
        <Container maxWidth={'lg'}>
          <ModInnerContainer>
            <ModTitle>{mode}</ModTitle>
            <ModDetailText>
              Faster than the other team
              <br /> Gather your target resources
            </ModDetailText>

            <ModDetailImg src={ModExampleImg.src} alt="detail" />
          </ModInnerContainer>
        </Container>
      </ModeDetailWrapper>
    </>
  )
}

const FixedDivider = styled.div`
  height: 80px;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
  }
`

const ModeDetailWrapper = styled.section`
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
`

const ModInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModTitle = styled.h1`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 180px;
  line-height: 285px;
  text-align: center;
  color: #ffffff;
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: 150px;
  }
  @media (max-width: 600px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 120px;
  }
`

const ModDetailText = styled.p`
  font-family: 'Bebas Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  opacity: 0.5;
`

const ModDetailImg = styled.img`
  margin-top: 5rem;
  width: 100%;
  height: auto;
`
