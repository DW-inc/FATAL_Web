import Button from '../src/components/commons/Button'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
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
import axios from 'axios'
import { useRecoilState } from 'recoil'
import {
  LoginRegistryState,
  LoginUserDataState,
  LoginUserInfoState,
} from 'src/commons/store'
import { setToken } from 'src/utils/cookies'
import Cookie from 'js-cookie'

// import cookies from 'js-cookie'
const jwt = require('jsonwebtoken')
export interface ILoginForm {
  email: string
  password: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
    width: 1rem;
  }

  & .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
  & .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
`

const LoginInner = styled('div')((theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const InnerInputLine = styled('div')({
  marginTop: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: {
    fontFamily: 'Bebas',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#FF0000',
  },
})

const InputTextField = styled(TextField)`
  width: 31rem;
  input {
    width: 31rem;
    height: 3.3rem;
    color: #000;
    font-family: 'Bebas';
    font-weight: 500;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 0.2rem;
    @media (max-width: 768px) {
      width: 25rem;
      font-size: 16px;
    }
    &::placeholder {
      /* padding-left: 0.5rem; */
    }
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
`

const StyleButton = styled(Button)`
  width: 31rem;
  height: 4rem;
  background-color: #000000;
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-size: 20px;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    width: 25rem;
    height: 3rem;
    font-size: 16px;
  }
`

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

export default function Login() {
  const router = useRouter()
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)
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
  const jwt = require('jsonwebtoken')

  const LoginHandler: SubmitHandler<ILoginForm> = async (data) => {
    axios
      .post('http://192.168.0.10:3000/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          const { access_token: accessToken, refresh_token: refreshToken } =
            res.data
          setToken('ACCESS_TOKEN', accessToken)
          setToken('REFRESH_TOKEN', refreshToken)
          setLoginRegistry(true)
          const token = accessToken
          const decoded = jwt.decode(token, { complete: true })
          const payload = decoded.payload
          // 런처에다가 보낼 유저 이메일 ,닉네임
          const user_info = {
            user_email: payload.user_email,
            user_nickname: payload.user_nickname,
          }

          Cookie.set('user_info', JSON.stringify(user_info), { expires: 1 })
          setLoginUserInfo({
            user_email: payload.user_email,
            user_nickname: payload.user_nickname,
          })
          console.log(res)
          router.push('/')
        } else if (res.status === 401) {
          console.log(res.data, '로그인 실패')
        }
      })
      .catch((error) => console.log(error, '에러실패'))
  }

  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <LoginInner>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src={LoginLogo} alt="login_png" priority />
          </div>
          <form onSubmit={handleSubmit(LoginHandler)}>
            <InnerInputLine style={{ marginTop: '5rem' }}>
              <InputTextField
                type="email"
                {...register('email')}
                placeholder="EMAIL"
                InputProps={{
                  style: {
                    paddingLeft: '0.6rem',
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
              <InputTextField
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="PASSWORD"
                onChange={(value) => onChangeValue(value)}
                InputProps={{
                  style: {
                    paddingLeft: '0.6rem',
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      {inputPwValue.length >= 1 ? (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Visibility style={{ border: 'hidden' }} />
                          ) : (
                            <VisibilityOff style={{ border: 'hidden' }} />
                          )}
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
            <StyleButton>LOGIN</StyleButton>
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
