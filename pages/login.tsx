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
import FalseLoginModal from 'src/components/Modal/LoginModal'
import { serialize } from 'cookie'
import { breakpoints } from 'src/constans/MediaQuery'
import CustomHead from 'src/components/CustomHeader/CustomHeader'

// import cookies from 'js-cookie'
const jwt = require('jsonwebtoken')

export interface ILoginForm {
  email: string
  password: string
}

type UserInfo = {
  user_nickname: string
  user_email: string
  user_character: number
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

  & .Mui-focused {
    color: inherit;
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: #000;
  }

  & .message {
    height: 2.2rem;
    display: flex;
  }
  @media (max-width: ${breakpoints.tablet}px) {
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 3rem;
  }
`

const LoginInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InnerInputLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #ff0000;
    @media screen and (max-width: ${breakpoints.tablet}px) {
    }

    @media screen and (max-width: ${breakpoints.smallTablet}px) {
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 0.8rem;
    }
  }
`

const InputTextField = styled(TextField)`
  width: 31rem;
  height: 3.3rem;
  input {
    /* width: 31rem;
    height: 3.3rem; */
    color: #000;
    font-family: 'Bebas Neue Pro';
    font-weight: 500;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 0.2rem;

    @media (max-width: 768px) {
      width: 25rem;
      font-size: 16px;
    }
    @media (max-width: 480px) {
      width: 20rem;
    }
    &::placeholder {
      /* padding-left: 0.5rem; */
    }
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }
`

const StyleButton = styled.button`
  width: 31rem;
  height: 4rem;
  background-color: #000000;
  color: #fff;
  font-family: 'Bebas';
  font-style: normal;
  font-size: 30px;
  margin-top: 1.8rem;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 25rem;
    height: 3rem;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }
`

const LoginBottom = styled.div`
  display: flex;
  margin-top: 4rem;
  font-family: 'Bebas';
  transform: translateX(-10%);
  @media only screen and (max-width: 769px) {
  }
  @media only screen and (max-width: 480px) {
    transform: translateX(-5%);
  }
  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`

export default function Login() {
  const router = useRouter()
  const [loginRegistry, setLoginRegistry] = useRecoilState(LoginRegistryState)
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(LoginUserInfoState)
  const [showPassword, setShowPassword] = useState(false)
  const [inputPwValue, setInputPwValue] = useState('')
  const [isOpenFalseLogin, setIsOpenFalseLogin] = useState<boolean>(false)
  const onChangeValue = (e: any) => {
    setInputPwValue(e.target.value)
  }
  const schema = yup.object({
    email: yup
      .string()
      .email(
        'Please enter your email address correctly, up to and including @.'
      )
      .required('Email is a required field.'),
    password: yup
      .string()
      .matches(
        /^[A-Za-z0-9+]{8,16}$/,
        'Please enter an 8-16 character alphanumeric password.'
      )
      .required('Password is a required field.'),
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
      // .post('http://192.168.0.10:3002/login', data, {
      .post('http://43.155.153.201:3002/login', data, {
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
          // console.log(payload)
          // 런처에다가 보낼 유저 이메일 ,닉네임
          const user_info: UserInfo = {
            user_email: payload.user_email,
            user_nickname: payload.user_nickname,
            user_character: payload.user_character,
          }
          Cookie.set('user_info', JSON.stringify(user_info), {
            Path: '/',
            expires: 1,
          })
          setLoginUserInfo({
            user_email: payload.user_email,
            user_nickname: payload.user_nickname,
            user_character: payload.user_character,
          })
          router.push('/')
        } else if (res.status === 401) {
          console.log(res.data, '로그인 실패')
        }
      })
      .catch((error) => setIsOpenFalseLogin(!isOpenFalseLogin))
  }

  // console.log(Cookie.get('user_info'))

  return (
    <>
      <CustomHead
        title="FATAL LOGIN"
        description="Login to FATAL BOMB and access your account"
      />
      {isOpenFalseLogin ? (
        <FalseLoginModal
          setIsOpenFalseLogin={setIsOpenFalseLogin}
          isOpenFalseLogin={isOpenFalseLogin}
        />
      ) : null}
      <Wrapper>
        <Container maxWidth={'lg'}>
          <LoginInner>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              <Image src={LoginLogo} alt="login_png" priority />
            </div>
            <form onSubmit={handleSubmit(LoginHandler)}>
              <InnerInputLine>
                <InputTextField
                  type="email"
                  {...register('email')}
                  // placeholder="EMAIL"
                  InputProps={{
                    style: {
                      padding: '0 0.6rem ',
                      outline: 'none',
                      height: '3.3rem',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Bebas Neue Pro',
                      fontWeight: '400',
                      fontSize: '18px',
                      paddingLeft: '0.4rem',
                      color: '#rgba(0, 0, 0, 0.5)',
                      border: 'none',
                      zIndex: 1,
                      // height: '24px',
                      backgroundColor: 'none',
                    },
                  }}
                  label="EMAIL"
                />
                <p className="message">
                  {errors.email && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Image src={YupIcon} alt="error" width={24} height={24} />
                      <p style={{ marginLeft: '5px' }}>
                        {errors.email.message}
                      </p>
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
                  // placeholder="PASSWORD"
                  onChange={(value) => onChangeValue(value)}
                  InputProps={{
                    style: {
                      padding: '0 0.6rem ',
                      height: '3.3rem',
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
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Bebas Neue Pro',
                      fontWeight: '400',
                      fontSize: '18px',
                      paddingLeft: '0.4rem',
                      color: '#rgba(0, 0, 0, 0.5)',
                      border: 'none',
                      height: '24px',
                      backgroundColor: 'none',
                    },
                  }}
                  label="PASSWORD"
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
              <StyleButton type="submit">LOGIN</StyleButton>
            </form>
            <LoginBottom>
              <NotLoginText style={{ cursor: 'pointer' }}>
                CANNOT LOG IN?
              </NotLoginText>
              <BottomDivider />
              <CreateText
                onClick={() => router.push('/signup')}
                style={{ cursor: 'pointer' }}
              >
                CREATE ID
              </CreateText>
            </LoginBottom>
          </LoginInner>
        </Container>
      </Wrapper>
    </>
  )
}

const NotLoginText = styled.p`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`

const CreateText = styled.p`
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`

const BottomDivider = styled.div`
  width: 1px;
  height: 24px;
  background: #000;
  margin: 0 39px;
`
