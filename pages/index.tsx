import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Container, css } from '@mui/material'
import FatalZoneInfo from 'src/components/FatalHero'
import FatalZoneMap from 'src/components/FatalZoneField'
import FatalCharacters from 'src/components/FatalCharacters'
import FatalInsert from 'src/components/FatalPlay'
import FatalHalo from 'src/components/FatalMod'
import arrow from 'src/assets/icon/arrow.png'
import FatalZoneMain from 'src/components/FatalZoneMain'
import { GetStaticProps } from 'next'
import { getCookie } from 'src/utils/cookies'
import axios from 'axios'
import FatalHero from 'src/components/FatalHero'
import FatalMod from 'src/components/FatalMod'
import FatalZoneField from 'src/components/FatalZoneField'
import FatalPlay from 'src/components/FatalPlay'

export interface Theme {
  breakpoints: {
    down: (breakpoint: string) => string
  }
}

export interface IScrollbuttonProps {
  id: string
}

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
  overflowX: 'hidden',
})

const LeftNaviBarFixed = styled('div')(css`
  position: fixed;
  left: 2rem;
  bottom: 40%;
`)

const LeftNaviContainer = styled('div')(css`
  width: 112px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`)

const Circle = styled('div')(css`
  width: 9px;
  height: 9px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;
`)

const LeftNavis = styled('div')(css`
  margin-left: 1.5rem;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  opacity: 0.5;
`)

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

  const LeftNaviContents = ['WORLD VIEW', 'HERO', 'MOD', 'FIELD', 'PLAY NOW']

  const LeftNaviHandler = (index: number) => {
    const target = document.getElementById(LeftNaviContents[index])

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const LeftNaviBar = () => {
    useEffect(() => {
      LeftNaviContents.forEach((content, index) => {
        const target = document.getElementById(content)
        if (target) {
          target.setAttribute('id', content)
        }
      })
    }, [])

    return (
      <LeftNaviBarFixed>
        <LeftNaviContainer>
          {LeftNaviContents.map((value, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-around',
              }}
              onClick={() => LeftNaviHandler(index)}
            >
              <Circle />
              <LeftNavis>{value}</LeftNavis>
            </div>
          ))}
        </LeftNaviContainer>
      </LeftNaviBarFixed>
    )
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
        <FatalZoneMain id={LeftNaviContents[0]} />
        <FatalHero id={LeftNaviContents[1]} />
        <FatalMod id={LeftNaviContents[2]} />
        <FatalZoneField id={LeftNaviContents[3]} />
        <FatalPlay id={LeftNaviContents[4]} />
        {/* <FatalCharacters
          idolGltfSrc={idolGltfSrc}
          nurseGltfSrc={nurseGltfSrc}
          ceilSrc={ceilSrc}
          standSrc={standSrc}
          logoSrc={logoSrc}
          hallSrc={hallSrc}
          standBeamSrc={standBeamSrc}
          groundTexture={groundTexture}
        /> */}

        {/* <TopButton>
          <Image src={arrow} onClick={GotoTop} alt="go to Top" />
        </TopButton> */}
        <LeftNaviBar />
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
