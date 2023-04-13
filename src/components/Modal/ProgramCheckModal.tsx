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
import CloseLoadingModal from 'src/assets/icon/clearwhite.png'
import ModalBackImg from 'src/assets/image/ProgramModal_bg.png'
import BtDownloadBgImg from 'src/assets/image/BTN_Download.png'
import BtGameBgImgOn from 'src/assets/image/GameStart_on.png'
import BtGameBgImgOff from 'src/assets/image/GameStart_off.png'
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
  background-image: url(${ModalBackImg.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
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
  position: absolute;
  right: 2rem;
  top: 3.8rem;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    top: 4.5rem;
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    top: 5.5rem;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const LuncherLoading = styled.div``

const LuncherText = styled.p`
  font-family: 'Atomic Marker';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    font-size: 40px;
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    font-size: 35px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 28px;
  }
`

const LineDivider = styled.div`
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  opacity: 0.2;
  margin-top: 50px;
`

const DownLoadText = styled.div`
  width: 100%;
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000000;
`
const DownLoadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(60%);
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
    transform: translateY(50%);
  }
  @media screen and (max-width: 600px) {
    transform: translateY(35%);
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`

const DownloadButton = styled.button`
  width: 201px;
  height: 49px;
  /* background-color: #000000; */
  background-image: url(${BtDownloadBgImg.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
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
    const URL =
      'https://fetalbomb-1316968684.cos.ap-seoul.myqcloud.com/FatalBombInstaller.exe'
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

  const ClickStartNow = () => {
    if (isOpenStartBt === true) {
      // ClickRunProgram()
    } else {
      return
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isPlayModal}
        closeAfterTransition
        onClose={CloseModal}
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
                        backgroundColor: '#fff',
                        borderRadius: '2px',
                        color: '#000',
                        fontSize: '1rem',
                        textAlign: 'center',
                        marginRight: '24px',
                      }}
                    >
                      1
                    </div>
                    Please run the downloaded {` `}
                    <span style={{ padding: ' 0 0.3rem ' }}>
                      FatalBombInstaller.exe
                    </span>
                    {` `}and install it.
                  </NotificationOne>
                  <NotificationTwo>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '2px',
                        color: '#000',
                        fontSize: '1rem',
                        textAlign: 'center',
                        marginRight: '24px',
                      }}
                    >
                      2
                    </div>
                    When the installation is complete, click
                    <span style={{ paddingLeft: '0.3rem' }}>START NOW.</span>
                  </NotificationTwo>
                </div>
                <StartButton
                  isOpenStartBt={isOpenStartBt}
                  onClick={() => {
                    if (isOpenStartBt) {
                      ClickRunProgram()
                    }
                  }}
                >
                  start now
                </StartButton>
              </>
            ) : (
              <>
                {/* <LuncherLoading>
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
                </LuncherLogo> */}
                <LuncherText>It will start soon!</LuncherText>
                {isDownLoadOpen ? (
                  <LoadAutomaticText>
                    If it doesn&apos;t start automatically?
                  </LoadAutomaticText>
                ) : null}
                <LineDivider />
                <DownLoadText>
                  {isDownLoadOpen ? (
                    <DownLoadWrapper>
                      <DownloadButton onClick={FtbdownClick}>
                        Download Launcher
                      </DownloadButton>
                    </DownLoadWrapper>
                  ) : (
                    <DownWaitText>Please wait a moment :)</DownWaitText>
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

const LoadAutomaticText = styled.div`
  position: absolute;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;

  opacity: 0.5;
  transform: translateY(50%);
`

const DownWaitText = styled.div`
  color: #ffffff;
  font-family: 'Bebas';
  font-weight: 400;
  font-size: 20px;
  opacity: 0.5;
  transform: translateY(75%);
`

const TopTitle = styled.div`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  color: #fff;
`

const NotificationOne = styled.div`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
  color: #fff;
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
  color: #fff;
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
  width: 201px;
  height: 49px;
  background-image: ${(props) =>
    props.isOpenStartBt
      ? `url(${BtGameBgImgOn.src})`
      : `url(${BtGameBgImgOff.src})`};
  background-repeat: no-repeat;
  background-position: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font */
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 5px;
  color: ${(props) => (props.isOpenStartBt ? '#000000' : '#ffffff')};
  cursor: pointer;
  transform: translateY(15px);
  @media screen and (max-width: ${breakpoints.tablet}px) {
  }

  @media screen and (max-width: ${breakpoints.smallTablet}px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
  }
`
