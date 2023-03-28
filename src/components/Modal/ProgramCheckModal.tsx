import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Cookie from 'js-cookie'
import Image from 'next/image'
import { breakpoints } from 'src/constans/MediaQuery'
import { useRouter } from 'next/router'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import LoadingCheckImg from 'src/assets/image/Spinner-Dots-5.gif'
import LoadingLogo from 'src/assets/image/download_logo.png'
import CloseLoadingModal from 'src/assets/icon/clear.png'
import axios from 'axios'

interface IProgramCheckModalProps {
  setIsPlayModal: React.Dispatch<React.SetStateAction<boolean>>
  isPlayModal: boolean
}

interface IIsOpenStartButtonProps {
  isOpenStartBt: boolean
}

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  height: 22rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: ${breakpoints.tablet}px) {
    width: 35rem;
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    width: 32rem;
  }
  @media screen and (max-width: 600px) {
    width: 28.5rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: 27rem;
  }
`

const LuncherLogo = styled.div`
  margin-top: 27px;
`

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const LuncherLoading = styled.div``

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
  margin-top: 30px;
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

export default function ProgramCheckModal({
  setIsPlayModal,
  isPlayModal,
}: IProgramCheckModalProps) {
  const CloseModal = () => {
    setIsPlayModal(!isPlayModal)
    setIsDownLoadOpen(false)
  }
  const [isDownLoadOpen, setIsDownLoadOpen] = useState<boolean>(false)
  const [goDownLoadDiv, setGoDownLoadDiv] = useState<boolean>(false)
  const [isOpenStartBt, setIsOpenStartBt] = useState<boolean>(false)

  const router = useRouter()

  const ClickRunProgram = () => {
    const url = 'fatalbomb:\\'
    const exec = document.createElement('a')
    exec.setAttribute('href', url)
    exec.click()
  }

  const FtbdownClick = () => {
    setGoDownLoadDiv(true)
    const URL = 'http://192.168.0.10:2313/FatalBombInstaller.msi'
    const exec = document.createElement('a')
    exec.setAttribute('href', URL)
    exec.click()
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
    ClickRunProgram()
  }, [])

  useEffect(() => {
    ClickRunProgram()
    // fetchGameStatus()
    setTimeout(() => {
      setIsDownLoadOpen(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (goDownLoadDiv === true) {
      setTimeout(() => {
        setIsOpenStartBt(true)
      }, 5000)
    }
  }, [goDownLoadDiv])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isPlayModal}
        closeAfterTransition
        // onClose={CloseModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isPlayModal}>
          <InnerContainer>
            <CloseButton>
              <Image
                src={CloseLoadingModal}
                alt="close_img"
                onClick={CloseModal}
                style={{ cursor: 'pointer' }}
              />
            </CloseButton>
            {goDownLoadDiv ? (
              <>
                <TopTitle>Notification</TopTitle>
                <div>
                  <NotificationOne>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#1E1E1E',
                        borderRadius: '2px',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        marginRight: '24px',
                      }}
                    >
                      1
                    </div>
                    Please run the downloaded {` `}
                    <strong style={{ padding: ' 0 0.3rem ' }}>
                      FatalBombInstaller.exe
                    </strong>
                    {` `}and install it.
                  </NotificationOne>
                  <NotificationTwo>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#1E1E1E',
                        borderRadius: '2px',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        marginRight: '24px',
                      }}
                    >
                      2
                    </div>
                    When the installation is complete, click
                    <strong style={{ paddingLeft: '0.3rem' }}>
                      START NOW.
                    </strong>
                  </NotificationTwo>
                </div>
                <StartButton isOpenStartBt={isOpenStartBt}>
                  start now
                </StartButton>
              </>
            ) : (
              <>
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
              </>
            )}
          </InnerContainer>
        </Fade>
      </Modal>
    </div>
  )
}

// goDownLoadDiv

const TopTitle = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  color: #000000;
`

const NotificationOne = styled.div`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-top: 3.2rem;
  color: #252525;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 1rem;
  }
`

const NotificationTwo = styled.div`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
  color: #252525;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 1rem;
  }
`

const StartButton = styled.div<IIsOpenStartButtonProps>`
  width: 32rem;
  height: 43px;
  background: #252525;
  text-transform: uppercase;
  opacity: ${(props) => (props.isOpenStartBt ? '1' : '0.5')};
  display: flex;
  justify-content: center;
  align-items: center;
  /* font */
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin-top: 4rem;
  color: #ffffff;
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    width: 27rem;
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 25rem;
    font-size: 18px;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: 23rem;
    font-size: 1rem;
  }
`
