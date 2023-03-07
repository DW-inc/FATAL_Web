import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

interface MapImageProps {
  index: number
}

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#464646',
  paddingTop: '2rem',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 480px)': {
    display: 'none',
  },
}))

const TextWrapper = styled('div')(
  (theme) => css`
    /* transform: translateY(-50%); */
  `
)

const MapTopText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 2.8rem;
    color: rgba(255, 255, 255, 0.05);
    width: 80%;
    @media (max-width: 1350px) {
      font-size: 1.5rem;
      width: 100%;
    }
  `
)

const MapContainer = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  `
)

const MapBtWrapper = styled('div')(
  (theme) => css`
    display: flex;
    gap: 1.5rem;
  `
)

const FloorBt = styled('button')(
  (theme) => css`
    width: 80px;
    height: 80px;
    opacity: 0.3;
    border: 3px solid #ffffff;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
  `
)

const MapTitle = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
    margin-top: 3rem;
  `
)

const MapExplanation = styled('div')(
  (theme) => css`
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    flex-direction: column;
  `
)

const MapSubDetail = styled('div')(
  (theme) => css`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  `
)

const MapDetail = styled('div')(
  (theme) => css`
    width: 90%;

    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  `
)

const MapMainText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 75px;
    color: #9e9e9e;
    /* transform: translateY(-50%); */
  `
)

const MapRightWrapper = styled('div')(
  (theme) => css`
    position: inherit;
  `
)

const MapImage = styled.div<MapImageProps>`
  width: 100%;
  height: 25rem;
  background: #d9d9d9;
  border: 1px solid #fff;
  z-index: ${(props) => props.index + 1};
`

const MapRightText = styled('div')(
  (theme) => css`
    width: 25%;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.1);
  `
)

const MobileWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    background: #464646;
  `
)

const MobileTopText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding: 10px 20px;
    color: rgba(255, 255, 255, 0.1);
  `
)

const MobileFloorBtWrapper = styled('div')(
  (theme) => css`
    position: absolute;
    right: 2rem;
  `
)

const MobileFloorBt = styled('div')(
  (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 51px;
    background: #484848;
    border: 3px solid #606060;
    color: #969696;
    font-family: 'KoreanRKTR';
    font-style: normal;
  `
)

const MobileMapTextWrapper = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `
)

const MobileMapTitle = styled('div')(
  (theme) => css`
    width: 70%;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #ffffff;
  `
)
const MobileMapSub = styled('div')(
  (theme) => css`
    width: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  `
)

const MobileMapDetail = styled('div')(
  (theme) => css`
    width: 95%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
  `
)

const MobileMapBox = styled('div')(
  (theme) => css`
    width: 220px;
    height: 185px;
    background: #9f9f9f;
  `
)

const MobileMapWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    display: flex;
    padding: 20px;
  `
)

export default function FatalZoneMap() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

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

  const Floor = ['7F', 'B3', 'B7']
  const MobileFloor = ['ALL', '7F', 'B3', 'B7']
  const MapPicture = ['Map1']
  return isMobile ? (
    <MobileWrapper>
      <MobileTopText>
        IN THIS PLACE, WHERE THE STRENGHT IS EVERYTHING, A PLACE WHERE I CAN
        PROVE MY STRENGHT.
      </MobileTopText>
      <MobileMapWrapper>
        <MobileMapBox />
        <MobileFloorBtWrapper>
          {MobileFloor.map((value, index) => (
            <MobileFloorBt key={index}>{value}</MobileFloorBt>
          ))}
        </MobileFloorBtWrapper>
      </MobileMapWrapper>
      <MobileMapTextWrapper>
        <MobileMapTitle>SHOPPING CENTER</MobileMapTitle>
        <MobileMapSub>THE DIRTIEST, BUT THE MOST INNOVATION PLACE</MobileMapSub>
        <MobileMapDetail>
          It is the hideout of a hacker who decided to revolutionize. Halo alone
          is not enough. Acquire the master key and blow up the hacker&apos;s
          space visible through the bars. It has a stronger effect than Halo and
          can detonate a bomb attached to the opponent&apos;s body at once.
        </MobileMapDetail>
      </MobileMapTextWrapper>
    </MobileWrapper>
  ) : (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <TextWrapper>
          {/* <MapTopText>
          IN THIS PLACE, WHERE THE STRENGHT IS EVERYTHING, A PLACE WHERE I CAN
          PROVE MY STRENGHT.
        </MapTopText> */}
          <MapMainText>MAP</MapMainText>
        </TextWrapper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MapContainer>
              <MapBtWrapper>
                {Floor.map((value, index) => (
                  <FloorBt key={index}>{value}</FloorBt>
                ))}
              </MapBtWrapper>
              <div>
                <MapTitle>SHOPPING CENTER</MapTitle>
                <MapExplanation>
                  <MapSubDetail>
                    THE DIRTIEST, BUT THE MOST INNOVATION PLACE
                  </MapSubDetail>
                  <MapDetail>
                    It is the hideout of a hacker who decided to revolutionize.
                    Halo alone is not enough. Acquire the master key and blow up
                    the hacker&apos;s space visible through the bars. It has a
                    stronger effect than Halo and can detonate a bomb attached
                    to the opponent&apos;s body at once.
                  </MapDetail>
                </MapExplanation>
              </div>
            </MapContainer>
          </Grid>
          <Grid item xs={6}>
            <MapRightWrapper>
              {MapPicture.map((value, index) => (
                <MapImage index={index} key={index}>
                  {value}
                </MapImage>
              ))}
            </MapRightWrapper>
          </Grid>
        </Grid>
        {/* <MapRightText>
        AN ENDLESS BATTLE SPACE WHERE YOU HAVE TO FIGHT ONLY TO FIGHT
      </MapRightText> */}
      </Container>
    </Wrapper>
  )
}
