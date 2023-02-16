import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import Fatal_Right_zone from 'src/assets/image/FATAL_Right_ ZONE.png'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#959595',
  fontFamily: 'inter',
}))

const LineDivider = styled('div')(
  (theme) => css`
    width: 100%;
    height: 30px;
    background: #393939;
  `
)

const FatalZone_Logo = styled('div')(
  (theme) => css`
    position: absolute;
    right: 20px;
  `
)

export default function FatalZoneInfo() {
  return (
    <Wrapper>
      <FatalZone_Logo>
        <Image src={Fatal_Right_zone} alt="right_log" />
      </FatalZone_Logo>
      <div>IN THE NEAR FUTURE, IN THE COLLAPSED WORLD, FATAL ZONE</div>
      <div>THE LAST UTOPIA WE FOUND IN THE STRUGGLE</div>
      <div>
        <p>
          The last honor left in the dystopia, the constant battle that all of
          this is at stake, begins in the Fatal Zone. A place where everyone can
          fight fairly, where power is everything, where I can prove my power,
          and an endless space of battle that I have to fight only to fight.
          They called it the Fatal Zone.
        </p>
      </div>
    </Wrapper>
  )
}
