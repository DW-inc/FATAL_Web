import { css, styled } from '@mui/material/styles'
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

interface IEntryPageNumber {
  entryPage: number
}

const Wrapper = styled('div')(
  css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #2b2b2b;
    margin-top: 75px;
  `
)

const SignupForm = styled('form')(
  css`
    /* width: 30%; */
    color: #fff;
    margin: 0 auto;
    font-size: 1.2rem;
    .email_validate_true {
      font-size: 17px;
      color: green;
    }
    p {
      margin-left: 1rem;
      font-size: 14px;
      color: red;
    }
  `
)

const SignupLogo = styled('div')(
  css`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 4.625rem;
  `
)

const SignupAccount = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin: 3rem 0 1rem 0;
    color: #ffffff;
  `
)

const SignupCountWrapper = styled('div')(
  css`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  `
)

const SignupPageOne = styled('div')(({ entryPage }: IEntryPageNumber) => ({
  width: '20px',
  height: '3px',
  background: entryPage === 1 ? '#d9d9d9' : '#585858',
}))

const SignupPageTwo = styled('div')(({ entryPage }: IEntryPageNumber) => ({
  width: '20px',
  height: '3px',
  background: entryPage === 2 ? '#d9d9d9' : '#585858',
  marginLeft: '5px',
}))

const SignLabel = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 9px;
  `
)

const InputEmail = styled('input')(
  css`
    width: 30rem;
    height: 2.5rem;
    color: #000;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 1rem;
  `
)

const InputPassword = styled('input')(
  css`
    width: 30rem;
    height: 2.5rem;
    color: #000;
    padding-left: 0.5rem;
  `
)

const SignupAgreeText = styled('div')({
  width: '100%',
  height: '140px',
  backgroundColor: '#fff',
  marginBottom: '2.1rem',
  color: '#000',
})

const CreateText = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin: 1rem 0;
    color: #ffffff;
  `
)

const LoginWrapper = styled('div')(
  css`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
)

const LoginGoogle = styled('div')(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 588px;
    height: 56px;
    background: #999999;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    color: #ffffff;

    margin-bottom: 0.5rem;
  `
)

const LoginApple = styled('div')(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 588px;
    height: 56px;
    background: #999999;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    color: #ffffff;

    margin-bottom: 1.5rem;
  `
)

const LoginEmail = styled('div')(
  css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  `
)

const NickNameWrapper = styled('div')(
  css`
    width: 100%;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const NickNameTitle = styled('div')(
  css`
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    color: #ffffff;
  `
)

const NickNameInput = styled('input')(
  css`
    width: 590px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #fff;
    padding-left: 0.5rem;
    font-family: 'KoreanRKTR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  `
)

const NickNameContainer = styled('div')(
  css`
    display: flex;
    flex-direction: column;
  `
)

const BoxWrapper = styled('div')(
  css`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
)

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
  const [emailAvailable, setEmailAvailable] = useState<boolean>(false)
  const [entryPage, setEntryOne] = useState<number>(0)

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

  const EmailEntry = () => {
    setEntryOne(1)
  }

  const AccountEntry = () => {
    setEntryOne(2)
  }

  return (
    <Wrapper>
      <SignupLogo>
        <Image src={signupLogo} alt="logo" />
      </SignupLogo>
      {entryPage >= 1 ? (
        <>
          <SignupAccount>CREATE ACCOUNT</SignupAccount>
          <SignupCountWrapper>
            <SignupPageOne entryPage={entryPage} />
            <SignupPageTwo entryPage={entryPage} />
          </SignupCountWrapper>
        </>
      ) : null}
      {entryPage === 0 ? (
        <LoginWrapper>
          <LoginGoogle>LOGIN WITH GOOGLE</LoginGoogle>
          <LoginApple>LOGIN WITH APPLE</LoginApple>
          <LoginEmail onClick={EmailEntry}>LOGIN WITH EMAIL</LoginEmail>
        </LoginWrapper>
      ) : entryPage === 1 ? (
        <>
          <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
            <div style={{ marginTop: '2.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '9px',
                }}
              >
                <SignLabel>E-MAIL</SignLabel>
                <p className="message">{errors.email?.message}</p>
              </div>
              <InputEmail type="email" {...register('email')} />
            </div>

            <div style={{ marginTop: '1.2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '9px',
                }}
              >
                <SignLabel>PASSWORD</SignLabel>{' '}
                <p className="message">{errors.password?.message}</p>
              </div>
              <InputPassword type="password" {...register('password')} />
            </div>

            <div style={{ marginTop: '1.2rem' }}>
              <SignLabel>약관동의</SignLabel>
              <SignupAgreeText></SignupAgreeText>
            </div>

            <CreateText>CREATE AN ACCOUNT</CreateText>
            <Button
              type="button"
              backgroundColor="#999999"
              width="100%"
              height="56px"
              fontFamily="KoreanRKTR"
              fontStyle="normal"
              fontSize="22px"
              color="#fff"
              onClick={AccountEntry}
              border="none"
            >
              NEXT
            </Button>
          </SignupForm>
        </>
      ) : (
        <>
          <NickNameWrapper>
            <NickNameContainer>
              <NickNameTitle>NICKNAME</NickNameTitle>
              <BoxWrapper>
                <NickNameInput placeholder="Please enter a maximum of 8 characters." />
                <Button
                  type="submit"
                  backgroundColor="#999999"
                  width="100%"
                  height="56px"
                  fontFamily="KoreanRKTR"
                  fontStyle="normal"
                  fontSize="22px"
                  color="#fff"
                  border="1px solid #fff"
                >
                  CREATE
                </Button>
              </BoxWrapper>
            </NickNameContainer>
          </NickNameWrapper>
        </>
      )}
    </Wrapper>
  )
}
