import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

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
    margin: 7rem 0 5rem 0;
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

export default function FatalCharacters() {
  const SelectCharacters = ['ALLISHA', 'OLLI', 'IDOL', '1', '2', '3', '4', '5']
  return (
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
