import Button from '../src/components/commons/Button'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import React from 'react'
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

export interface ILoginForm {
  email: string
  password: string
}

const Wrapper = styled('div')(
  (theme) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #070708;
  `
)

const InputContainer = styled('div')(
  (theme) => css`
    width: 100%;
  `
)

const EmailInput = styled('input')(
  (theme) => css`
    width: 100%;
    height: 2.5rem;
  `
)

const PasswordInput = styled('input')(
  (theme) => css`
    width: 100%;
    height: 2.5rem;
  `
)

export default function Login() {
  const router = useRouter()
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
      <form onSubmit={handleSubmit(LoginHandler)}>
        <InputContainer>
          <div>
            <label>이메일</label>
            <EmailInput type="email" {...register('email')} />
            <p className="message">{errors.email?.message}</p>
          </div>
          <div>
            <label>비밀번호</label>
            <PasswordInput type="password" {...register('password')} />
            <p className="message">{errors.password?.message}</p>
          </div>
        </InputContainer>
        <div>
          <Button
            type="submit"
            backgroundColor="#999999"
            style={{ marginTop: '2rem', color: 'white' }}
            width={'350px'}
            height={'56px'}
          >
            LOGIN
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}
