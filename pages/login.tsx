import Button from '../src/components/commons/Button'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import {
  useForm,
  Controller,
  useController,
  SubmitHandler,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { css } from '@emotion/react'
import { Container } from '@mui/material'
import Image from 'next/image'
import LoginLogo from '/src/assets/image/login_logo.png'
import YupIcon from 'src/assets/icon/yup_icon.png'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export interface ILoginForm {
  email: string
  password: string
}

const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  overflow: 'hidden',
  '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: 0,
  },
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: 0,
  },
}))

const LoginInner = styled('div')((theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const InnerInputLine = styled('div')({
  marginTop: '1.2rem',
  p: {
    fontFamily: 'Bebas',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#FF0000',
  },
})

const LoginBottom = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '4rem',
  fontFamily: 'Bebas',
  justifyContent: 'space-between',
  width: '25%',
  '@media only screen and (max-width: 769px)': {
    width: '50%',
  },
}))

const PasswordInput = styled('input')(
  (theme) => css`
    width: 100%;
    height: 2.5rem;
  `
)

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [inputPwValue, setInputPwValue] = useState('')
  const onChangeValue = (e: any) => {
    setInputPwValue(e.target.value)
  }
  const schema = yup.object({
    email: yup
      .string()
      .email('이메일 아이디를 @까지 정확하게 입력해주세요.')
      .required('이메일은 필수 입력 사항입니다.'),
    password: yup
      .string()
      .matches(
        /^[A-Za-z0-9+]{8,16}$/,
        '영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.'
      )
      .required('비밀번호는 필수 입력 사항입니다.'),
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })
  const LoginHandler: SubmitHandler<ILoginForm> = async (data) => {
    console.log(data)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.status === 200) {
        // 로그인 성공
      } else {
        // 로그인 실패
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Wrapper>
      <Container maxWidth={'lg'} style={{}}>
        <LoginInner>
          <Image src={LoginLogo} alt="login_png" />
          <form onSubmit={handleSubmit(LoginHandler)}>
            <InnerInputLine style={{ marginTop: '5rem' }}>
              <TextField
                type="email"
                {...register('email')}
                placeholder="EMAIL"
                InputProps={{
                  style: {
                    width: '31rem',
                    height: '3.3rem',
                    color: '#000',
                    fontFamily: 'Bebas',
                    fontWeight: '500',
                    fontSize: '20px',
                    paddingLeft: '0.5rem',
                    border: '1px solid #3e3e3e',
                  },
                }}
              />
              <p className="message">
                {errors.email && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={YupIcon} alt="error" width={24} height={24} />
                    <p style={{ marginLeft: '5px' }}>{errors.email.message}</p>
                  </div>
                )}
              </p>
            </InnerInputLine>

            <InnerInputLine>
              {/* <InputPassword
              type="password"
              {...register('password')}
              placeholder="PASSWORD"
            /> */}
              <TextField
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="PASSWORD"
                onChange={(value) => onChangeValue(value)}
                InputProps={{
                  style: {
                    width: '31rem',
                    height: '3.3rem',
                    color: '#000',
                    fontFamily: 'Bebas',
                    fontWeight: '500',
                    fontSize: '20px',
                    paddingLeft: '0.5rem',
                    border: '1px solid #3e3e3e',
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      {inputPwValue.length >= 1 ? (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </button>
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />
              <p className="message">
                {errors.password && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={YupIcon} alt="error" width={24} height={24} />
                    <p style={{ marginLeft: '5px' }}>
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </p>
            </InnerInputLine>
            <Button
              width="31rem"
              height="4rem"
              backgroundColor="#000000;"
              color="#fff"
              fontFamily="Inter"
              fontStyle="normal"
              fontSize="20px"
              style={{ marginTop: '1.5rem' }}
            >
              LOGIN
            </Button>
          </form>
          <LoginBottom>
            <p>CANNOT LOG IN?</p>
            <div style={{ width: '1px', height: '24px', background: '#000' }} />
            <p>CREATE ID</p>
          </LoginBottom>
        </LoginInner>
      </Container>
    </Wrapper>
  )
}
