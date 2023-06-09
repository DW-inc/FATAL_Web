import React from 'react'
import styled from '@emotion/styled'
import InstallImg from 'src/assets/icon/Union.png'
import PlayImg from 'src/assets/icon/Subtract.png'
import Image from 'next/image'
import { breakpoints } from 'src/constans/MediaQuery'

interface IProgramCheckModalProps {
  setIsPlayModal: React.Dispatch<React.SetStateAction<boolean>>
  isPlayModal: boolean
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }
  @media screen and (max-width: 980px) {
    margin-top: 60px;
  }
  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const InnerContainer = styled.div`
  width: 42rem;
  height: 26rem;
  padding: 3rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LuncherTitle = styled.h5`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #000000;
`

const ButtonWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 2rem;
`

const LuncherButton = styled.button`
  width: 16rem;
  height: 110px;
  background: #000000;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  .play_text {
    padding-top: 17px;
  }
`

const InstallText = styled.p`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #414141;
`

const PlayText = styled.p`
  padding-top: 1rem;
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #414141;
`

const BottomDiv = styled.div`
  width: 42rem;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #797979;
  cursor: pointer;
  button {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
`

const FixedHeader = styled.div`
  height: 80px;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

export default function ProgramCheckModal({
  setIsPlayModal,
  isPlayModal,
}: IProgramCheckModalProps) {
  const CloseModal = () => {
    setIsPlayModal(!isPlayModal)
  }
  const ClickRunProgram = () => {
    const url = 'Text:\\'
    const exec = document.createElement('a')
    exec.setAttribute('href', url)
    exec.click()
  }

  const FtbdownClick = () => {
    const URL = 'http://192.168.0.10:2313/Version.txt'
    const exec = document.createElement('a')
    exec.setAttribute('href', URL)
    exec.click()
  }

  return (
    <>
      <Wrapper>
        <InnerContainer>
          <LuncherTitle>
            Please check it out before the game starts!
          </LuncherTitle>
          <ButtonWrapper>
            <LuncherButton type="button" onClick={FtbdownClick}>
              <Image src={InstallImg} alt="install_img" />
              <p>Install Launcher</p>
            </LuncherButton>
            <LuncherButton type="button" onClick={ClickRunProgram}>
              <Image src={PlayImg} alt="install_img" />
              <p className="play_text">Play the game</p>
            </LuncherButton>
          </ButtonWrapper>
          <InstallText>
            - If the launcher is not installed, press the &lsquo;Install
            Launcher&lsquo; button, and if the launcher is installed, press the
            &lsquo;Play the game&lsquo; button.
          </InstallText>
          <PlayText>
            - If the &lsquo;Play the game&lsquo; button does not respond, make
            sure that the launcher is installed correctly.
          </PlayText>
        </InnerContainer>
        <BottomDiv onClick={CloseModal}>
          <button onClick={CloseModal}>닫기</button>
        </BottomDiv>
      </Wrapper>
    </>
  )
}
