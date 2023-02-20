import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

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
}))

const TextWrapper = styled('div')(
  (theme) => css`
    width: 60%;
    display: flex;
    flex-direction: column;
  `
)

const MapTopText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 52px;
    color: rgba(255, 255, 255, 0.05);
    width: 80%;
  `
)

const MapContainer = styled('div')(
  (theme) => css`
    width: 50%;
    margin-top: 7.5rem;
  `
)

const MapBtWrapper = styled('div')(
  (theme) => css`
    width: 40%;
    display: flex;
    justify-content: space-between;
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
    width: 20%;
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
    width: 40%;
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
  `
)

const MapRightWrapper = styled('div')(
  (theme) => css`
    position: absolute;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20rem;
    display: flex;
  `
)

const MapImage = styled.div<MapImageProps>`
  width: 43rem;
  height: 25rem;
  position: absolute;
  background: #d9d9d9;
  border: 1px solid #fff;
  margin: 0 auto;
  right: ${(props) => props.index * 10}px;
  top: ${(props) => props.index * -10}px;
  z-index: ${(props) => props.index + 1};
`

const MapRightText = styled('div')(
  (theme) => css`
    width: 25%;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.1);
  `
)

export default function FatalZoneMap() {
  const Floor = ['7F', 'B3', 'B7']
  const MapPicture = ['Map1', 'Map2']
  return (
    <Wrapper>
      <TextWrapper>
        <MapTopText>
          IN THIS PLACE, WHERE THE STRENGHT IS EVERYTHING, A PLACE WHERE I CAN
          PROVE MY STRENGHT.
        </MapTopText>
        <MapMainText>MAP</MapMainText>
      </TextWrapper>
      <MapContainer>
        <MapBtWrapper>
          {Floor.map((value, index) => (
            <FloorBt key={index}>{value}</FloorBt>
          ))}
        </MapBtWrapper>
        <MapTitle>SHOPPING CENTER</MapTitle>
        <MapExplanation>
          <MapSubDetail>
            THE DIRTIEST, BUT THE MOST INNOVATION PLACE
          </MapSubDetail>
          <MapDetail>
            It is the hideout of a hacker who decided to revolutionize. Halo
            alone is not enough. Acquire the master key and blow up the
            hacker&apos;s space visible through the bars. It has a stronger
            effect than Halo and can detonate a bomb attached to the
            opponent&apos;s body at once.
          </MapDetail>
        </MapExplanation>
      </MapContainer>
      <MapRightWrapper>
        {MapPicture.map((value, index) => (
          <MapImage index={index} key={index}>
            {value}
          </MapImage>
        ))}
      </MapRightWrapper>
      <MapRightText>
        AN ENDLESS BATTLE SPACE WHERE YOU HAVE TO FIGHT ONLY TO FIGHT
      </MapRightText>
    </Wrapper>
  )
}
