import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(360deg, #464646 1.2%, rgba(70, 70, 70, 70) 1.86%)',
}))

export default function FatalInsert() {
  return <Wrapper>FatalInsert</Wrapper>
}
