import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { Input } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../src/components/commons/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import signupLogo from './../src/assets/image/signup_Logo.png'

export interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  phonenumber: string
  nickname: string
}

const useStyles = makeStyles((theme) => ({}))
const Wrapper = styled('div')((theme) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#2B2B2B',
  color: '#fff',
}))

const SignupForm = styled('form')((theme) => ({
  width: '30%',
  margin: '0 auto',
  color: '#fff',
  fontSize: '1.2rem',
  p: {
    fontSize: '12px',
    color: 'red',
  },
}))

const SignupLogo = styled('div')((theme) => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  // paddingBottom: '0.5rem',
  marginTop: '3rem',
}))

const SignLabel = styled('div')((theme) => ({
  marginBottom: '9px',
}))

const InputEmail = styled('input')((theme) => ({
  width: '100%',
  height: '2.4rem',
  color: '#000',
}))
const InputNickName = styled('input')((theme) => ({
  width: '100%',
  height: '2.4rem',
  color: '#000',
}))
const InputPassword = styled('input')((theme) => ({
  width: '100%',
  height: '2.4rem',
  color: '#000',
}))
const InputPhoneNumber = styled('input')((theme) => ({
  width: '100%',
  height: '2.4rem',
  color: '#000',
}))

const SignupAgreeText = styled('div')((theme) => ({
  width: '100%',
  height: '140px',
  backgroundColor: '#fff',
  marginBottom: '2.1rem',
  color: '#000',
}))

export default function Signup() {
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
    nickname: yup
      .string()
      .min(2, '이름은 4자리 이상 입력해 주세요.')
      .max(10, '10자 이내로 입력해주세요.')
      .required('닉네임은 필수 입력 사항입니다.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    phonenumber: yup
      .string()
      .required('휴대폰 번호는 필수입력 사항입니다.')
      .matches(/^[\d-]*$/),
  })

  const [phoneNumber, setPhoneNumber] = useState('')

  console.log(phoneNumber, 'phoneNumber 짜증나게 왜 안바뀜??')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler: SubmitHandler<IFormInput> = async (data) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(data, '가입버튼')
  }

  return (
    <Wrapper>
      <SignupLogo>
        <Image src={signupLogo} alt="logo" />
      </SignupLogo>
      <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
        <div style={{ marginTop: '2.5rem' }}>
          <SignLabel>이메일</SignLabel>
          <InputEmail type="email" {...register('email')} />
          <p className="message">{errors.email?.message}</p>
        </div>
        <div style={{ marginTop: '1.2rem' }}>
          <SignLabel>닉네임</SignLabel>
          <InputNickName {...register('nickname')} />
          <p className="message">{errors.nickname?.message}</p>
        </div>

        <div style={{ marginTop: '1.2rem' }}>
          <SignLabel>비밀번호</SignLabel>
          <InputPassword type="password" {...register('password')} />
          <p className="message">{errors.password?.message}</p>
        </div>

        <div style={{ marginTop: '1.2rem' }}>
          <SignLabel>비밀번호 확인</SignLabel>
          <InputPassword type="password" {...register('confirmPassword')} />
          <p className="message">{errors.confirmPassword?.message}</p>
        </div>

        <div style={{ marginTop: '1.2rem' }}>
          <SignLabel>휴대폰번호</SignLabel>
          <Controller
            name="phonenumber"
            control={control}
            render={({ field }) => (
              <InputPhoneNumber
                type="tel"
                placeholder="010-1234-1234"
                value={phoneNumber}
                {...register('phonenumber')}
                onChange={(e) => {
                  const { value } = e.target
                  const phoneNumberRegex = /^[\d-]*$/
                  if (phoneNumberRegex.test(value) || value === '') {
                    if (value.length === 3) {
                      setPhoneNumber(value + '-')
                    } else if (value.length === 8) {
                      setPhoneNumber(value + '-')
                    } else if (value.length > 13) {
                      setPhoneNumber(value.slice(0, 13))
                    } else {
                      setPhoneNumber(value)
                    }
                  }
                  field.onChange(e)
                }}
              />
            )}
          />
          <p className="message">{errors.phonenumber?.message}</p>
        </div>
        <div style={{ marginTop: '1.2rem' }}>
          <SignLabel>약관동의</SignLabel>
          <SignupAgreeText></SignupAgreeText>
        </div>

        <Button
          type="submit"
          backgroundColor="#999999"
          width="100%"
          height="56px"
        >
          가입
        </Button>
      </SignupForm>
    </Wrapper>
  )
}
