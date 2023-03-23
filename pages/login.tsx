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

  & .message {
    height: 2.2rem;
    display: flex;
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
  }
`

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

const StyleButton = styled(Button)`
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
  justify-content: space-between;
  width: 25%;

  @media only screen and (max-width: 769px) {
    width: 50%;
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
      .email('이메일 아이디를 @까지 정확하게 입력해주세요.')
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
      .catch((error) => setIsOpenFalseLogin(!isOpenFalseLogin))
  }

  return (
    <>
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
                  placeholder="EMAIL"
                  InputProps={{
                    style: {
                      paddingLeft: '0.6rem',
                    },
                  }}
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
              <StyleButton type="submit">LOGIN</StyleButton>
            </form>
            <LoginBottom>
              <p style={{ cursor: 'pointer' }}>CANNOT LOG IN?</p>
              <div
                style={{ width: '1px', height: '24px', background: '#000' }}
              />
              <p
                onClick={() => router.push('/signup')}
                style={{ cursor: 'pointer' }}
              >
                CREATE ID
              </p>
            </LoginBottom>
          </LoginInner>
        </Container>
      </Wrapper>
    </>
  )
}
