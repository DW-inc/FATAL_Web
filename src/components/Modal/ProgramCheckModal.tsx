import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import InstallImg from 'src/assets/icon/Union.png'
import PlayImg from 'src/assets/icon/Subtract.png'
import Image from 'next/image'
import { breakpoints } from 'src/constans/MediaQuery'
import { useRouter } from 'next/router'

import LoadingCheckImg from 'src/assets/image/Spinner-Dots-5.gif'
import LoadingLogo from 'src/assets/image/download_logo.png'
import CloseLoadingModal from 'src/assets/icon/clear.png'

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
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const InnerContainer = styled.div`
  width: 38rem;
  height: 22rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
`

const LuncherLogo = styled.div`
  margin-top: 27px;
`

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const LuncherLoading = styled.div`
  /* @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotate-360 {
    animation: rotate360 2s linear infinite;
  } */
`

const LuncherText = styled.p`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`

const LineDivider = styled.div`
  width: 100%;
  border: 1px solid #000;
  opacity: 0.2;
  margin-top: 55px;
`

const DownLoadText = styled.div`
  width: 100%;
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000000;

  margin-top: 1.4rem;
`
const DownLoadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DownloadButton = styled.button`
  width: 146px;
  height: 38px;
  background-color: #000000;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
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
    setIsDownLoadOpen(false)
  }
  const [isDownLoadOpen, setIsDownLoadOpen] = useState<boolean>(false)
  const router = useRouter()

  // const ClickRunProgram = () => {
  //   const url = 'Text:\\'
  //   const exec = document.createElement('a')
  //   exec.setAttribute('href', url)
  //   exec.click()
  // }

  const ClickRunProgram = () => {
    const url = 'fatalbomb:\\'
    const exec = document.createElement('a')
    exec.setAttribute('href', url)
    exec.click()
  }

  const FtbdownClick = () => {
    const URL = 'http://192.168.0.10:2313/FatalBombInstaller.msi'
    const exec = document.createElement('a')
    exec.setAttribute('href', URL)
    exec.click()
  }

  const DownloadPage = () => {
    router.push('/download')
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setIsPlayModal(false)
      setIsDownLoadOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, setIsPlayModal])

  useEffect(() => {
    setTimeout(() => {
      setIsDownLoadOpen(true)
    }, 5000)
  })

  return (
    <>
      <Wrapper>
        <InnerContainer>
          <CloseButton>
            <Image
              src={CloseLoadingModal}
              alt="close_img"
              onClick={CloseModal}
              style={{ cursor: 'pointer' }}
            />
          </CloseButton>
          <LuncherLoading>
            <Image
              src={LoadingCheckImg}
              alt="loading_img"
              width={48}
              height={48}
              className="rotate-360"
            />
          </LuncherLoading>
          <LuncherLogo>
            <Image src={LoadingLogo} alt="logo_img" />
          </LuncherLogo>
          <LuncherText>It will start soon!</LuncherText>
          <LineDivider />
          <DownLoadText>
            {isDownLoadOpen ? (
              <DownLoadWrapper>
                <div>
                  <p>If it doesn&apos;t start automatically?</p>
                  <p>Download Fatal Bomb Launcher</p>
                </div>
                <DownloadButton onClick={FtbdownClick}>
                  Download Launcher
                </DownloadButton>
              </DownLoadWrapper>
            ) : (
              <div>Please wait a moment :)</div>
            )}
          </DownLoadText>
        </InnerContainer>
      </Wrapper>
    </>
  )
}
