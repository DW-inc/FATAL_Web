import { css } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../src/components/commons/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import { Container } from '@mui/material'
import 'react-datepicker/dist/react-datepicker.css'
import YupIcon from 'src/assets/icon/yup_icon.png'
import NickNameIcon from 'src/assets/icon/nickname_info.png'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import axios from 'axios'
import { useRouter } from 'next/router'
import SignUpModal from 'src/components/Modal/SignUpModal'
import CheckModal from 'src/components/Modal/CheckModal'
import Signup_logo from 'src/assets/image/signup_Logo.png'
import { AgreePersonal, agreePersonalText } from 'src/constans/AgreePersonal'
import styled from '@emotion/styled'

export interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  Nickname: string
  checkbox: boolean
}

interface IEmailNameCheckProps {
  emailAvailable: boolean
}

interface INickNameCheckProps {
  nickNameAvailable: boolean
}

// const Wrapper = styled('div')((theme) => ({
//   width: '100%',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#fff',
//   overflow: 'hidden',
//   '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
//     padding: 0,
//   },
//   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
//     padding: 0,
//   },
// }))

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  & .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
  & .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
`

const SignTopLogo = styled('div')((theme) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
}))

const InputTextField = styled(TextField)`
  width: 31rem;
  input {
    width: 31rem;
    height: 3.3rem;
    color: #000;
    font-family: 'Bebas';
    font-weight: 500;
    font-size: 20px;
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
  @media (max-width: 480px) {
    width: 20rem;
  }
`

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  .email_validate_true {
    font-size: 17px;
    color: green;
  }
`

const SignupText = styled.div`
  width: 520px;
  max-width: 1200px;
  min-width: 375px;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    /* width: 100%; */
    padding-left: 1.8rem;
  }
  p {
    font-family: 'Bebas Neue Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #515151;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`

const SignupInnerText = styled.div`
  p {
    margin-left: 0.8rem;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #515151;
  }
`

const SignupTerms = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 600;
  color: #515151;
  align-items: center;
  input[type='checkbox'] {
    width: 24px !important;
    height: 24px;
    margin-top: 5px;
  }

  p {
    font-family: 'Bebas Neue Pro';
    width: 90%;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
`

const InnerInputLine = styled.div`
  margin-top: 0.8rem;

  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ff0000;
  }

  .focus-label {
    input:focus + label {
      border-color: transparent;
    }
  }
`

const SignPersonal = styled.div`
  width: 31rem;
  height: 7rem;
  overflow: auto;
  border: 1px solid #000;
  padding: 1rem 0.8rem 0 1rem;
  margin-top: 1.2rem;
  font-family: 'Bebas Neue Pro';
  font-size: 18px;
  color: #3e3e3e;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 25rem;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid #181c25;
    background: #181c25;
    box-shadow: none;
  }
  &::-webkit-scrollbar-track {
    background: none;
    box-shadow: none;
  }
  & p {
    margin-bottom: 1rem;
  }
`
// const NickInputLine = styled('div')({
//   marginTop: '2rem',
//   p: {
//     fontFamily: 'Bebas',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '18px',
//     color: '#FF0000',
//   },
// })

const NickInputLine = styled.div`
  margin-top: 2rem;
  p {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ff0000;
    @media (max-width: 480px) {
    }
  }
`

const NickErrorMsgDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`

const NickNameTopLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-family: 'Bebas Neue Pro';
`

const DuplicateBtn = styled.button<IEmailNameCheckProps>`
  // styles here
  background: ${(props) =>
    props.emailAvailable ? '#000' : 'rgba(211, 211, 211, 0.5)'};
  border-radius: 5px;
  width: 6rem;
  height: 32px;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.emailAvailable ? '#fff' : '#474747')};
  border: none;
`

const NickNameDuplicateBtn = styled.button<INickNameCheckProps>`
  // styles here
  background: ${(props) =>
    props.nickNameAvailable ? '#000' : 'rgba(211, 211, 211, 0.5)'};
  border-radius: 5px;
  width: 6rem;
  height: 32px;
  font-family: 'Bebas';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.nickNameAvailable ? '#fff' : '#474747')};
  border: none;
`

const StyleButton = styled(Button)`
  width: 31rem;
  height: 4rem;
  background-color: #000000;
  color: #fff;
  font-family: 'Bebas';
  font-style: normal;
  font-size: 2rem;

  @media (max-width: 768px) {
    width: 25rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }
`
const SubmitButton = styled(Button)`
  width: 31rem;
  height: 4rem;
  background-color: #000000;
  color: #fff;
  font-family: 'Bebas';
  font-style: normal;
  font-size: 2rem;
  transform: translateY(200%);
  @media (max-width: 768px) {
    width: 25rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    width: 20rem;
  }
`

export default function Signup() {
  const router = useRouter()
  const [inputPwValue, setInputPwValue] = useState<string>('')
  const [checkInputPwValue, setCheckInputPwValue] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [checkShowPassword, setCheckShowPassword] = useState<boolean>(false)
  const [emailCheck, setEmailCheck] = useState<boolean>(false)
  const [nickNameCheck, setNickNameCheck] = useState<boolean>(false)
  // const []

  const onChangeValue = (e: any) => {
    setInputPwValue(e.target.value)
  }

  const onChangeCheckValue = (e: any) => {
    setCheckInputPwValue(e.target.value)
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
        '영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.'
      )
      .required('Password is a required field.'),
    Nickname: yup
      .string()
      .min(2, 'Please enter at least 2 digits for your nickname.')
      .max(10, 'Please enter no more than 10 characters.')
      .required('Nickname is a required field.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Please check the password again.'),
    checkbox: yup
      .boolean()
      .required(`If you don't agree, you won't be able to sign up.`),
  })

  const [emailAvailable, setEmailAvailable] = useState<boolean>(false)
  const [nickNameAvailable, setNickNameAvailable] = useState<boolean>(false)
  const [entryPage, setEntryOne] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isCheckOpen, setIsCheckOpen] = useState<boolean>(false)
  const [isCheckText, setIsCheckText] = useState<string>('')
  const [isModalTitle, setIsModalTitle] = useState<string>('')
  // 이메일 오류메시지
  // const [errorMessage, setErrorMessage] = useState(null)
  // 비밀번호 오류 메시지
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  // 이메일 비밀번호 비밀번호확인 동의 빈란 버튼클릭시 나오는 에러
  const [errorMessage, setErrorMessage] = useState<{
    email?: string
    password?: string
    confirmPassword?: string
    checkbox?: string
  }>({})

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
    if (!nickNameCheck) {
      setIsCheckOpen(true)
      setIsCheckText('닉네임 중복검사를 먼저 해주세요')
      setIsModalTitle('Nickname duplicates')

      return
    }
    const SignupData = {
      email: data.email,
      password: data.password,
      Nickname: data.Nickname,
      checkbox: data.checkbox,
    }

    axios
      .post('http://192.168.0.10:3000/signup', SignupData)
      .then((res) => setIsOpen(true))
      .catch((err) => console.log(err, '에러실패'))

    console.log(SignupData, '가입버튼')
  }

  // 이메일 중복요청
  const EmailCheckHandler = async () => {
    const emailCheck = watch('email')
    try {
      await yup
        .string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          '이메일 형식에 올바르게 입력해주세요.'
        )
        .required('Email is a required field.')
        .validate(emailCheck)

      axios
        .post('http://192.168.0.10:3000/emailCheck', { emailCheck })
        .then((response) => {
          setEmailCheck(true)
          setIsCheckOpen(true)
          setIsCheckText('This email is available.')
          setIsModalTitle('Notification')
          setEmailAvailable(true)
          setErrorMessage({ email: '' })
        })
        .catch((error) => {
          setIsCheckOpen(true)
          setIsCheckText('This email is not available.')
          setIsModalTitle('Notification')
          setErrorMessage({ email: 'This email is not available.' })
        })
    } catch (error: any) {
      setIsCheckOpen(true)
      setIsCheckText(error.message)
      setIsModalTitle('Notification')
      setErrorMessage({ email: error.message })
    }
  }
  // 비밀번호 input 유효성 검사
  const passwordValue = watch('password')
  const confirmPasswordValue = watch('confirmPassword')

  useEffect(() => {
    if (passwordValue) {
      schema
        .validateAt('password', { password: passwordValue })
        .then(() => setPasswordError(''))
        .catch((error) => setPasswordError(error.message))
    } else {
      setPasswordError('')
    }

    if (confirmPasswordValue) {
      if (passwordValue === confirmPasswordValue) {
        setConfirmPasswordError('')
      } else {
        schema
          .validateAt('confirmPassword', {
            password: passwordValue,
            confirmPassword: confirmPasswordValue,
          })
          .then(() => setConfirmPasswordError(''))
          .catch((error) => setConfirmPasswordError(error.message))
      }
    } else {
      setConfirmPasswordError('')
    }
  }, [passwordValue, confirmPasswordValue, schema])

  const AccountEntry = async () => {
    let newErrors = {}

    try {
      await schema.validateAt('email', { email: watch('email') })
    } catch (error: any) {
      newErrors = { ...newErrors, [error.path]: error.message }
    }

    try {
      await schema.validateAt('password', { password: watch('password') })
    } catch (error: any) {
      newErrors = { ...newErrors, [error.path]: error.message }
    }

    try {
      await schema.validateAt('confirmPassword', {
        password: watch('password'),
        confirmPassword: watch('confirmPassword'),
      })
    } catch (error: any) {
      newErrors = { ...newErrors, [error.path]: error.message }
    }

    // Manual validation for the checkbox
    if (!watch('checkbox')) {
      newErrors = {
        ...newErrors,
        checkbox: 'Please accept the terms and conditions.',
      }
    }

    setErrorMessage(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setEntryOne(1)
    }
  }

  // 닉네임 유효성 검사
  const [nicknameError, setNicknameError] = useState('')

  const validateNickname = async () => {
    const currentNickname = watch('Nickname')

    if (currentNickname === '') {
      setNicknameError('Please enter a nickname')
      return
    }

    try {
      await schema.validateAt('Nickname', { Nickname: currentNickname })
      setNicknameError('')
    } catch (error: any) {
      setNicknameError(error.message)
    }
  }

  // 닉네임 중복요청
  const NickNameCheckHandler = async () => {
    const NicknameCheck = watch('Nickname')
    // Validate the nickname before checking for duplicates
    const yourRegexPattern = /^[A-Za-z0-9]{2,12}$/ // Replace this with your desired regex pattern
    if (!NicknameCheck.match(yourRegexPattern)) {
      setNicknameError('Please enter a valid nickname')
      return
    }
    axios
      .post('http://192.168.0.10:3000/nicknameCheck', { NicknameCheck })
      .then((respose) => {
        console.log(respose, '성공')
        setNickNameCheck(true)
        setIsCheckOpen(true)
        setIsCheckText('사용 가능한 닉네임 입니다.')
        setIsModalTitle('Nickname duplicates')
        setNickNameAvailable(true)
        setNicknameError('')
      })
      .catch((error) => {
        console.log(error, '<= 에러 떴다 ')
        setIsCheckOpen(true)
        setIsCheckText('사용 불가능한 닉네임 입니다.')
        setIsModalTitle('Nickname duplicates')
        setNicknameError('닉네임을 꼭 입력해주세요')
      })
  }

  return (
    <>
      {isOpen ? <SignUpModal /> : null}
      {isCheckOpen ? (
        <CheckModal
          isCheckText={isCheckText}
          setIsCheckText={setIsCheckText}
          isCheckOpen={isCheckOpen}
          setIsCheckOpen={setIsCheckOpen}
          setIsModalTitle={setIsModalTitle}
          isModalTitle={isModalTitle}
        />
      ) : null}
      <Wrapper>
        <Container maxWidth={'lg'} style={{ padding: '4rem 0' }}>
          <SignTopLogo>
            <Image
              src={Signup_logo}
              alt="signup_logo"
              width={147}
              height={172}
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            />
          </SignTopLogo>
          <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
            {entryPage == 0 ? (
              <>
                <InnerInputLine style={{ marginTop: '3rem' }}>
                  <InputTextField
                    type="email"
                    {...register('email')}
                    InputProps={{
                      style: {
                        paddingLeft: '0.6rem',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <DuplicateBtn
                            type="button"
                            onClick={EmailCheckHandler}
                            emailAvailable={emailAvailable}
                          >
                            Verification
                          </DuplicateBtn>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Bebas',
                        fontWeight: '400',
                        fontSize: '18px',
                        paddingLeft: '0.6rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        zIndex: 1,

                        // height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="EMAIL"
                  />
                  <div className="message">
                    {errorMessage.email && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '0.8rem',
                        }}
                      >
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px', fontSize: '1rem' }}>
                          {errorMessage.email}
                        </p>
                      </div>
                    )}
                  </div>
                </InnerInputLine>
                <InnerInputLine>
                  <InputTextField
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
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
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </button>
                          ) : null}
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Bebas',
                        fontWeight: '400',
                        fontSize: '18px',
                        paddingLeft: '0.6rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="PASSWORD"
                  />
                  <div className="message">
                    {errorMessage.password && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '0.8rem',
                        }}
                      >
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p
                          style={{
                            marginLeft: '5px',
                            fontFamily: 'Inter',
                            fontSize: '1rem',
                          }}
                        >
                          {errorMessage.password}
                        </p>
                      </div>
                    )}
                  </div>
                </InnerInputLine>
                <InnerInputLine>
                  <InputTextField
                    type={checkShowPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    onChange={(value) => onChangeCheckValue(value)}
                    InputProps={{
                      style: {
                        paddingLeft: '0.6rem',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          {checkInputPwValue.length > 1 ? (
                            <button
                              type="button"
                              onClick={() =>
                                setCheckShowPassword(!checkShowPassword)
                              }
                            >
                              {checkShowPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </button>
                          ) : null}
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Bebas',
                        fontWeight: '400',
                        fontSize: '18px',
                        paddingLeft: '0.6rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        borderColor: 'none',
                        height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="CONFIRM PASSWORD"
                  />
                  <div className="message">
                    {errorMessage.confirmPassword && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '0.8rem',
                        }}
                      >
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p
                          style={{
                            marginLeft: '5px',
                            fontFamily: 'Inter',
                            fontSize: '1rem',
                          }}
                        >
                          {errorMessage.confirmPassword}
                        </p>
                      </div>
                    )}
                  </div>
                </InnerInputLine>

                <SignPersonal>
                  {agreePersonalText.map((value, index) => (
                    <p key={index}>{value.content}</p>
                  ))}
                </SignPersonal>
                <SignupText>
                  <SignupInnerText>
                    <SignupTerms>
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        className="checkbox_signup"
                        {...register('checkbox', { required: true })}
                      />
                      <p>
                        [Required] I read the privacy policy and I agree to
                        terms.
                      </p>
                    </SignupTerms>
                    {errorMessage.checkbox && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p
                          style={{
                            marginLeft: '5px',
                            fontSize: '15px',
                            color: '#FF0000',
                          }}
                        >
                          {errorMessage.checkbox}
                        </p>
                      </div>
                    )}
                  </SignupInnerText>
                </SignupText>
                <StyleButton type="button" onClick={AccountEntry}>
                  Next
                </StyleButton>
              </>
            ) : (
              <>
                <NickNameTopLine>
                  <Image
                    style={{ maxWidth: '100%', height: '17px' }}
                    src={NickNameIcon}
                    alt="nickname_carefully"
                  />
                  It&apos;s a name that other players will see in the game.
                </NickNameTopLine>
                <NickInputLine>
                  <InputTextField
                    type="text"
                    {...register('Nickname', {
                      required: 'Please enter a nickname',
                      pattern: {
                        value: /^[A-Za-z0-9_]{2,12}$/,
                        message: 'The name of the nickname is incorrect.',
                      },
                      min: {
                        value: 2,
                        message:
                          'Please enter a nickname of at least 2 characters.',
                      },
                      maxLength: {
                        value: 12,
                        message:
                          'Nicknames must be no more than 12 characters long.',
                      },
                    })}
                    placeholder="NICK NAME"
                    InputProps={{
                      style: {
                        paddingLeft: '1rem',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <NickNameDuplicateBtn
                            type="button"
                            onClick={NickNameCheckHandler}
                            nickNameAvailable={nickNameAvailable}
                          >
                            Verification
                          </NickNameDuplicateBtn>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Bebas',
                        fontWeight: '500',
                        fontSize: '20px',
                        paddingLeft: '0.5rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="CONFIRM PASSWORD"
                    onChange={validateNickname}
                  />
                  <div className="message">
                    {nicknameError && (
                      <NickErrorMsgDiv>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>{nicknameError}</p>
                      </NickErrorMsgDiv>
                    )}
                  </div>
                </NickInputLine>
                <SubmitButton
                  type="submit"
                  // backgroundColor="#000000"
                  // width="31rem"
                  // height="56px"
                  // fontFamily="KoreanRKTR"
                  // fontStyle="normal"
                  // fontSize="22px"
                  // color="#fff"
                  // border="none"
                  // style={{ transform: 'translateY(300%)' }}
                >
                  SIGN UP
                </SubmitButton>
              </>
            )}
          </SignupForm>
        </Container>
      </Wrapper>
    </>
  )
}
