import React from 'react'
import styled from '@emotion/styled'
import Button from 'src/components/commons/Button'
import { Container } from '@mui/material'
import { breakpoints } from 'src/constans/MediaQuery'
export default function Download() {
  // const FtbdownClick = () => {
  //   const URL = 'http://192.168.0.10:2313/Version.txt'
  //   const exec = document.createElement('a')
  //   exec.setAttribute('href', URL)
  //   exec.click()
  // }

  const FtbdownClick = () => {
    const URL = 'http://192.168.0.10:2313/FatalBombInstaller.msi'
    const exec = document.createElement('a')
    exec.setAttribute('href', URL)
    exec.click()
  }

  return (
    <>
      <PageDivder />
      <Wrapper>
        <Container maxWidth={'lg'}>
          <InnerContainer>
            <DownloadTitle>THROW IT INTO THE WORLD!</DownloadTitle>
            <div>
              <DownloadText>
                A person who sees the light and prays, a person who wonders, a
                person who tries to grasp the situation.
              </DownloadText>
              <DownloadText>
                Cindy is staring blankly at the light and then
                approaches.&quot;Halo-b-11089&quot; written on the object.
              </DownloadText>
            </div>
            <DownloadVersion>version : 12.04.415</DownloadVersion>
            {/* <DownloadBt type="button" onClick={FtbdownClick}>
              Download Launcher
            </DownloadBt> */}
            <DownLoadBt onClick={FtbdownClick} />
          </InnerContainer>
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: url(${'Bg/download_bg.png'}) no-repeat center;
  background-size: 100% 100%;
`

const PageDivder = styled.div`
  height: 80px;
  @media (max-width: 980px) {
    height: 60px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DownloadTitle = styled.h4`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 27px;
  @media (max-width: 980px) {
    font-size: 3.5rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const DownloadText = styled.p`
  font-family: 'Bebas Light';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const DownloadVersion = styled.p`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 6rem;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
`

const DownLoadBt = styled.div`
  margin: 1rem 0;
  background-image: url('/PLAY NOW_OFF.png');
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 73px;
  transition: background-image 0.3s ease;

  &:hover {
    background-image: url('/PLAY NOW_ON.png');
  }

  @media (max-width: ${breakpoints.tablet}px) {
    // Apply styles for tablet
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }

  @media (max-width: ${breakpoints.mobile}px) {
    // Apply styles for mobile
    padding: 0;
    transform: translateY(25%);
  }
`
