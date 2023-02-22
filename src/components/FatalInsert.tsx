import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

// const Wrapper = styled('div')((theme) => ({
//   width: '100%',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background:
//     'linear-gradient(360deg, #464646 1.2%, rgba(70, 70, 70, 70) 1.86%)',
// }))

const Wrapper = styled('div')(
  css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(
      360deg,
      #464646 1.2%,
      rgba(70, 70, 70, 70) 1.86%
    );
  `
)

const InsertTopTextWrap = styled('div')(
  css`
    display: flex;
    flex-direction: column;
  `
)

const InsertTitle = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    color: #ffffff;
  `
)

const InsertDetail = styled('div')(css`
  font-family: 'KoreanRKTR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  margin-top: 1rem;
  color: #ffffff;
`)

const InsertContainer = styled('div')(css`
  display: flex;
  flex-direction: column;
`)

const InsertVideoText = styled('div')(css`
  font-family: 'KoreanRKTR';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  text-align: center;

  color: #ffffff;
`)

const InsertVideoWrap = styled('div')(css`
  display: flex;
  margin-top: 3.5rem;
`)

const InsertBoxOne = styled('div')(css`
  width: 590px;
  height: 321px;
  background: #9f9f9f;
`)

const InsertBoxTwo = styled('div')(css`
  width: 590px;
  height: 321px;
  background: #9f9f9f;
  margin-left: 1rem;
`)

export default function FatalInsert() {
  return (
    <Wrapper>
      <InsertTopTextWrap>
        <InsertTitle>ICONIC HERO APPROACHES</InsertTitle>
        <InsertDetail>
          More than 14 class heroes and many global NPCs will be released.
        </InsertDetail>
      </InsertTopTextWrap>
      <InsertContainer>
        <InsertVideoText>FATAL BOMB INSERT VIDEO</InsertVideoText>
        <InsertVideoWrap>
          <InsertBoxOne />
          <InsertBoxTwo />
        </InsertVideoWrap>
      </InsertContainer>
    </Wrapper>
  )
}
