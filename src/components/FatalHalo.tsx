import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

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
    display: flex;
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
    margin-left: 6rem;
  `
)

const CenterBox = styled('div')(
  (theme) => css`
    width: 426px;
    height: 558px;
    background: #d9d9d9;
    @media (max-width: 480px) {
      width: 228px;
      height: 298px;
    }
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

const MobileWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    background: #2b2b2b;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `
)

const MobileCenter = styled('div')(
  (theme) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
  `
)

const MobileBox = styled('div')(
  (theme) => css`
    width: 228px;
    height: 298px;
    background: #d9d9d9;
  `
)

const MobileHalo = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #8a8a8a;
    position: absolute;
    transform: rotate(90deg);
    right: 0.5rem;
    top: 10rem;
  `
)

const MobileLeft = styled('div')(
  (theme) => css`
    position: absolute;
    top: 8rem;
    left: 1.5rem;
  `
)

const MobileLeftBox1 = styled('div')(
  (theme) => css`
    width: 165px;
    height: 95px;
    background: rgba(217, 217, 217, 0.15);
  `
)

const MobileRight = styled('div')(
  (theme) => css`
    position: absolute;
    right: 1rem;
    top: 5rem;
  `
)

const MobileRightBox1 = styled('div')(
  (theme) => css`
    width: 106px;
    height: 152px;
    background: rgba(217, 217, 217, 0.15);
  `
)

const MobileBtLeftBox = styled('div')(
  (theme) => css`
    width: 105px;
    height: 94px;
    background: rgba(217, 217, 217, 0.15);
    position: absolute;
    bottom: 15rem;
    left: 1rem;
  `
)

const MobileBtRightBox = styled('div')(
  (theme) => css`
    width: 165px;
    height: 95px;
    background: rgba(217, 217, 217, 0.15);
    position: absolute;

    bottom: 15rem;
    right: 1rem;
  `
)

const MobileTextTop = styled('div')(
  (theme) => css`
    width: 85%;
    display: flex;
    justify-content: center;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    margin-top: 55px;
  `
)

const MobileTextBt = styled('div')(
  (theme) => css`
    width: 85%;
    display: flex;
    justify-content: center;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    margin-top: 45px;
  `
)

export default function FatalHalo() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
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
  }, [isMobile])
  return isMobile ? (
    <MobileWrapper>
      <MobileCenter>
        <MobileBox />
      </MobileCenter>
      <MobileHalo>HALO</MobileHalo>
      <MobileLeft>
        <MobileLeftBox1></MobileLeftBox1>
      </MobileLeft>
      <MobileRight>
        <MobileRightBox1></MobileRightBox1>
      </MobileRight>
      <MobileBtLeftBox />
      <MobileBtRightBox />
      <MobileTextTop>
        Activate the halo in the box and detonate a time bomb mounted on the
        opponent&apos;s body.
      </MobileTextTop>
      <MobileTextBt>
        A constant battle with heroes and bombs, your victory is the team&apos;s
        victory.
      </MobileTextBt>
    </MobileWrapper>
  ) : (
    // <p>p</p>
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
