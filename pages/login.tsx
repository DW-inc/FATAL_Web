import Button from '../src/components/commons/Button'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div``

export default function Login() {
  return (
    <Wrapper>
      <Grid
        container
        spacing={{ xs: 2, lg: 0 }}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item xs={3} md={5} lg={4} sx={{ magring: 'auto 0' }}>
          <label>이메일</label>
          <Input type="email"></Input>
          <label>비밀번호</label>
          <Input type="password"></Input>
          <Button type="submit" backgroundColor="hotpink">
            로그인
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
