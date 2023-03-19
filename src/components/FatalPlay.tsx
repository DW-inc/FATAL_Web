import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { IScrollbuttonProps } from 'pages'
import showMore_off from 'src/assets/bt_img/SHOWMORE_button_ OFF.png'
import showMore_on from 'src/assets/bt_img/SHOWMORE_button_ ON.png'
import Image from 'next/image'
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

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url('Bg/PlayNowBg.png') no-repeat center;
  background-position: 50%;
  background-size: cover;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  h4 {
    font-family: 'Randhu';
    font-weight: 400;
    font-size: 93px;
    text-align: center;
    color: #e4ff00;
  }

  .play_prove {
    font-family: 'Nextrue-Bold-Slant';
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
  }

  .play_prove_stroy {
    font-family: 'Nextrue Con Regular';
    font-size: 33px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
    padding-top: 10px;
  }

  .play_prove_stroy2 {
    font-family: 'Nextrue Con Regular';
    font-size: 33px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
    padding-top: 10px;
  }

  .play_prove_bomb {
    width: 75%;
    font-family: 'Nextrue Con Regular Slant';
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
    padding-top: 1rem;
  }

  .play_prove_purpose {
    font-family: 'Nextrue Con Light Slant';
    font-size: 39px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
    padding-top: 10px;
  }

  .play_prove_fun {
    font-family: 'Nextrue Con Regular Slant';
    font-size: 46px;
    font-weight: 400;
    text-align: center;
    opacity: 0.7;
  }
`

export default function FatalPlay({ id }: IScrollbuttonProps) {
  const [isHeroShowMore, setIsHeroShowMore] = useState<boolean>(false)
  return (
    <Wrapper id={id}>
      <Container maxWidth={'lg'}>
        <InnerContainer>
          <h4 className="play_title">If you want anything,Take it.</h4>
          <p className="play_prove">
            It&apos;s only combat that makes it happen!
          </p>
          <p className="play_prove_stroy">
            Prove yourself in battle against the backdrop of a devastated
            Apocalypse world.
          </p>
          <p className="play_prove_stroy2">
            Through the various maps and battle modes of team battles, complete
            the given missions and show your fighting sense to your heart&apos;s
          </p>
          <p className="play_prove_bomb">
            There are a lot of different types of bombs that go off, and
            they&apos;re walking through the sky and the earth.
          </p>
          <p className="play_prove_purpose">
            Be one of the combatants, for your camp, for your purpose.
          </p>
          <p className="play_prove_fun">
            Just throw yourself in constant trouble for fun.
          </p>
          <div
            onMouseEnter={() => setIsHeroShowMore(true)}
            onMouseLeave={() => setIsHeroShowMore(false)}
            style={{ transform: 'translateY(70%)' }}
          >
            {isHeroShowMore ? (
              <Image src={showMore_on} alt="on" />
            ) : (
              <Image src={showMore_off} alt="off" />
            )}
          </div>
        </InnerContainer>
      </Container>
    </Wrapper>
  )
}
