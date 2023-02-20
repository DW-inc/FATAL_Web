import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#282828',
}))

const HaloContainer = styled('div')(
  (theme) => css`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  `
)

const HaloLeft = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `
)

const LeftBoxOne = styled('div')(
  (theme) => css`
    width: 285px;
    height: 164px;
    background: rgba(217, 217, 217, 0.2);
  `
)

const LeftBoxTwo = styled('div')(
  (theme) => css`
    width: 184px;
    height: 164px;
    background: rgba(217, 217, 217, 0.2);
    margin-top: 4rem;
  `
)

const HaloCenter = styled('div')(
  (theme) => css`
    display: flex;
    align-items: flex-start;
  `
)

const CenterBox = styled('div')(
  (theme) => css`
    width: 426px;
    height: 558px;
    background: #d9d9d9;
  `
)

const CenterText = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    margin-top: 2.5rem;
    color: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  `
)

const HaloRight = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  `
)

const RightBoxOne = styled('div')(
  (theme) => css`
    width: 182px;
    height: 261px;
    background: rgba(217, 217, 217, 0.2);
  `
)

const RightBoxTwo = styled('div')(
  (theme) => css`
    width: 285px;
    height: 164px;
    background: rgba(217, 217, 217, 0.2);
    margin-top: 8rem;
  `
)

export default function FatalHalo() {
  return (
    <Wrapper>
      <HaloContainer>
        <HaloLeft>
          <LeftBoxOne></LeftBoxOne>
          <LeftBoxTwo></LeftBoxTwo>
        </HaloLeft>
        <HaloCenter>
          <CenterBox></CenterBox>
          <CenterText>HALO</CenterText>
        </HaloCenter>
        <HaloRight>
          <RightBoxOne></RightBoxOne>
          <RightBoxTwo></RightBoxTwo>
        </HaloRight>
      </HaloContainer>
    </Wrapper>
  )
}
