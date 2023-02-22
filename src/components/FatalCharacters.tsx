import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import arrow_up from './../assets/icon/mobile_up.png'
import arrow_down from './../assets/icon/mobile_down.png'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2B2B2B',
}))

const TopTitleDiv = styled('div')(
  (theme) => css`
    margin: 5rem 0 5rem 0;
  `
)

const LeftWrapper = styled('div')((theme) => css``)

const RightWrapper = styled('div')((theme) => css``)

const CharactersTitle = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 75px;
    color: #9e9e9e;
  `
)

const CharactersBox = styled('div')(
  (theme) => css`
    width: 590px;
    height: 710px;
    background: #d9d9d9;
  `
)

const CharactersTop = styled('div')(
  (theme) => css`
    display: flex;
    align-items: flex-end;
  `
)

const CharacterName = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #ffffff;
  `
)

const CharacterJob = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    padding: 0.5rem;
  `
)

const CharactersExplanation = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ffffff;
  `
)

const CharacterPicOne = styled('div')(
  (theme) => css`
    width: 386px;
    height: 185px;
    background: rgba(217, 217, 217, 0.3);
  `
)

const CharacterPicTwo = styled('div')(
  (theme) => css`
    width: 386px;
    height: 135px;
    background: rgba(217, 217, 217, 0.3);
    margin-top: 12px;
  `
)

const CharactersSelect = styled('div')(
  (theme) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    grid-gap: 1rem;
    width: 70%;
    margin-top: 6.5rem;
  `
)
const CharacterSelectBox = styled('div')(
  (theme) => css`
    width: 80px;
    height: 80px;
    background: #a5a5a5;
  `
)

const MobileWrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    background: #2b2b2b;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
)

const MobileTopTitle = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    text-align: center;
    color: #9e9e9e;
  `
)

const MobileCharacterBox = styled('div')(
  (theme) => css`
    width: 223px;
    height: 454px;
    background: #d9d9d9;
    margin-left: 2rem;
  `
)

const MobileSelectBoxWrapper = styled('div')(
  (theme) => css`
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
)

const MbBoxWrapper = styled('div')(
  (theme) => css`
    display: flex;
    flex-direction: column;
  `
)

const MbCharacterBox = styled('div')(
  (theme) => css`
    width: 3.5rem;
    height: 3.5rem;
    background: #7d7d7d;
    border: 4px solid #a8a8a8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  `
)

const MbCharacterBottom = styled('div')(
  (theme) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  `
)

const MbLeftWrapper = styled('div')(
  (theme) => css`
    width: 100%;
  `
)

const MbCharacter = styled('div')(
  (theme) => css`
    display: flex;
    align-items: flex-end;
  `
)

const MbCharacterName = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
  `
)

const MbCharacterJob = styled('div')(
  (theme) => css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
  `
)

const MbCharacterDetail = styled('div')(
  (theme) => css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  `
)

const MbRightBox = styled('div')(
  (theme) => css`
    width: 100px;
    height: 95px;
    background: rgba(217, 217, 217, 0.3);
  `
)

export default function FatalCharacters() {
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
  const MobileCharacters = ['ALLISHA', 'OLLI', 'IDOL', '1', '2']
  const SelectCharacters = ['ALLISHA', 'OLLI', 'IDOL', '1', '2', '3', '4', '5']
  return isMobile ? (
    <MobileWrapper>
      <div style={{ width: '100%', display: 'flex', marginLeft: '2rem' }}>
        <MobileTopTitle>HEROES</MobileTopTitle>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MobileCharacterBox />
        <MobileSelectBoxWrapper>
          <Image
            src={arrow_up}
            alt="select_arrow_up"
            style={{ marginBottom: '1rem' }}
          />
          <MbBoxWrapper>
            {MobileCharacters.map((value, index) => (
              <MbCharacterBox key={index}>{value}</MbCharacterBox>
            ))}
          </MbBoxWrapper>
          <Image src={arrow_down} alt="select_arrow_down" />
        </MobileSelectBoxWrapper>
      </div>
      <MbCharacterBottom>
        <MbLeftWrapper>
          <MbCharacter>
            <MbCharacterName>ALLISHA</MbCharacterName>
            <MbCharacterJob>NURSE</MbCharacterJob>
          </MbCharacter>
          <MbCharacterDetail>
            In accordance with my father&apos;s will, &quot;All life is
            precious,&quot;I decided to be the fairest nurse.
          </MbCharacterDetail>
        </MbLeftWrapper>
        <MbRightBox />
      </MbCharacterBottom>
    </MobileWrapper>
  ) : (
    <Wrapper>
      <TopTitleDiv>
        <CharactersTitle>HEROS</CharactersTitle>
      </TopTitleDiv>
      <div
        style={{
          width: '70%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <LeftWrapper>
          <CharactersBox />
        </LeftWrapper>
        <RightWrapper>
          <CharactersTop>
            <CharacterName>ALLISHA</CharacterName>
            <CharacterJob>NURSE</CharacterJob>
          </CharactersTop>
          <CharactersExplanation>
            In accordance with my father&apos;s will, &quot;All life is
            precious,&quot; I decided to be the fairest nurse.
          </CharactersExplanation>
          <CharacterPicOne></CharacterPicOne>
          <CharacterPicTwo></CharacterPicTwo>
          <CharactersSelect>
            {SelectCharacters.map((value, index) => (
              <CharacterSelectBox key={index}>{value}</CharacterSelectBox>
            ))}
          </CharactersSelect>
        </RightWrapper>
      </div>
    </Wrapper>
  )
}
