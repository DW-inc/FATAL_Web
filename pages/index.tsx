import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Container, css } from '@mui/material'
import FatalZoneInfo from 'src/components/FatalZoneInfo'
import FatalZoneMap from 'src/components/FatalZoneMap'
import FatalCharacters from 'src/components/FatalCharacters'
import FatalInsert from 'src/components/FatalInsert'
import FatalHalo from 'src/components/FatalHalo'
import arrow from 'src/assets/icon/arrow.png'
import FatalZoneMain from 'src/components/FatalZoneMain'
import { GetStaticProps } from 'next'

export interface R3FProps {
  idolGltfSrc: string
  nurseGltfSrc: string
  ceilSrc: string
  standSrc: string
  logoSrc: string
  hallSrc: string
  standBeamSrc: string
  groundTexture: string[]
}

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#959595',
  overflowX: 'hidden',
})

const LineProvider = styled('div')(
  css`
    width: 100%;
    height: 2.5rem;
    background: #d3d3d3;
  `
)

const FatalZoneStage = styled('div')(
  css`
    width: 100%;
    height: 168px;
    background: #0c0c0c;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    text-align: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1350px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    p {
      font-family: 'Bebas';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      text-align: center;
      letter-spacing: 0.675em;

      color: #ffffff;
      @media (max-width: 1350px) {
        font-size: 0.8rem;
      }
      @media (max-width: 480px) {
        font-size: 7px;
      }
    }
  `
)

const TopButton = styled('button')(
  css`
    width: 45px;
    height: 45px;
    background-color: #000;
    position: fixed;
    right: 32px;
    bottom: 40px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `
)

export default function Home({
  idolGltfSrc,
  nurseGltfSrc,
  ceilSrc,
  standSrc,
  logoSrc,
  hallSrc,
  standBeamSrc,
  groundTexture,
}: R3FProps) {
  const router = useRouter()
  // 이미지 모바일
  const [isMobile, setIsMobile] = useState<boolean>(false)

  //화면 resize
  const [mobileResize, setMobileResize] = useState<number>(0)

  const handleResize = () => {
    setMobileResize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const time = setTimeout(() => {
      setMobileResize(window.innerWidth)
    }, 0.0000000000000000001)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(time)
    }
  }, [])

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

  const GotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>FATAL BOMB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="FATAL BOMB" />
        <meta property="og:description" content="세상을 향해 지배하자" />
        <meta property="og:image" content="/main.PNG" />
        {/* <meta property="og:url" content="https://my-page.com" /> 추후 주소 수정  */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <FatalZoneMain />
        <LineProvider />
        <FatalZoneInfo />
        <FatalZoneStage>
          <Container maxWidth={'lg'}>
            Welcome Stage Fatal Zone
            <p>NEVER - ENDING BATTLE IN FATAL ZONE</p>
          </Container>
        </FatalZoneStage>
        <FatalHalo />
        <FatalZoneMap />
        <FatalCharacters
          idolGltfSrc={idolGltfSrc}
          nurseGltfSrc={nurseGltfSrc}
          ceilSrc={ceilSrc}
          standSrc={standSrc}
          logoSrc={logoSrc}
          hallSrc={hallSrc}
          standBeamSrc={standBeamSrc}
          groundTexture={groundTexture}
        />
        <FatalInsert />
        <TopButton>
          <Image src={arrow} onClick={GotoTop} alt="go to Top" />
        </TopButton>
      </Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const idolGltfSrc = 'characters/idol6.gltf'
  const nurseGltfSrc = 'characters/nurse2Draco.gltf'
  const ceilSrc = 'characters/lightbeam4.gltf'
  const standSrc = 'characters/SM_Frame01.gltf'
  const logoSrc = 'characters/logo.gltf'
  const hallSrc = 'characters/bg.gltf'
  const groundTexture = [
    'characters/texture1.jpg',
    'characters/texturenormal.jpg',
  ]
  const standBeamSrc = 'characters/standbeam.gltf'

  return {
    props: {
      idolGltfSrc,
      nurseGltfSrc,
      ceilSrc,
      standSrc,
      logoSrc,
      hallSrc,
      groundTexture,
      standBeamSrc,
    },
  }
}
