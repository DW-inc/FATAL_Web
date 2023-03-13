import { css } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
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
import { AgreePersonal } from 'src/constans/AgreePersonal'
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

const SignTopLogo = styled('div')((theme) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
}))

const SignupForm = styled('form')(
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    .email_validate_true {
      font-size: 17px;
      color: green;
    }

    .date-picker {
      width: 31rem;
      height: 3.3rem;
      font-family: 'Bebas';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      padding-left: 0.5rem;
      color: rgba(0, 0, 0, 0.5);
      border: 1px solid #3e3e3e;
      border-radius: 4px;
    }
    .react-datepicker__triangle {
      transform: translate(150px, 0px) !important;
      left: 0;
    }
  `
)

const SignupText = styled('div')(
  {
    width: '520px',
    maxWidth: '1200px',
    padding: '1rem',
  },
  {
    p: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '20px',
      color: '#515151',
    },
  }
)

const SignupInnerText = styled('div')(
  {
    // marginTop: '3.5rem',
  },
  {
    p: {
      marginLeft: '0.8rem',
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      color: '#515151',
    },
  }
)

const SignupTerms = styled('div')({
  display: 'flex',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',

  color: '#515151',
  'input[type="checkbox"]': {
    width: '24px !important',
    height: '24px',
    marginTop: '5px',
  },
  p: {
    width: '90%',
    fontSize: '20px',
  },
})

const InnerInputLine = styled('div')({
  marginTop: '1.2rem',
  p: {
    fontFamily: 'Bebas',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#FF0000',
  },
  '.focus-label': {
    'input:focus + label': {
      borderColor: 'transparent',
    },
  },
})
const SignPersonal = styled('div')({
  width: '31rem',
  height: '7rem',
  overflow: 'auto',
  border: '1px solid #000',
  padding: '1rem',
  marginTop: '1.2rem',
  fontFamily: 'Bebas',
  fontWeight: '400',
  fontSize: '1rem',
  color: '#3E3E3E',

  // 스크롤바 추가 코드
  '&::-webkit-scrollbar': {
    width: '0.8rem',
  },
  '&::-webkit-scrollbar-thumb': {
    border: '1px solid #181c25',
    background: '#181c25',
    'box-shadow': 'none',
  },
  '&::-webkit-scrollbar-track': {
    background: 'none',
    'box-shadow': 'none',
  },
})

const NickInputLine = styled('div')({
  marginTop: '2rem',
  p: {
    fontFamily: 'Bebas',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#FF0000',
  },
})

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

// const DuplicateBtn = styled('button')<{nickNameCheck: boolean}>({
//   background: props => props.nickNameCheck ? '#000' : 'rgba(211, 211, 211, 0.5)',
//   borderRadius: '5px',
//   width: '6rem',
//   height: '32px',
//   fontFamily: 'Bebas',
//   fontStyle: 'normal',
//   fontWeight: '400',
//   fontSize: '1rem',
//   /* identical to box height */
//   textAlign: 'center',
//   color: props => props.nickNameCheck ? '#fff' : '#474747',
//   border: 'none',
// })

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

  // const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date)
  //   setValue('birthDate', date ? date.toString() : '')
  // }

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
    // Nickname: yup
    //   .string()
    //   .min(2, '닉네임 4자리 이상 입력해 주세요.')
    //   .max(10, '10자 이내로 입력해주세요.')
    //   .required('닉네임은 필수 입력 사항입니다.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    checkbox: yup.boolean().required('동의하지 않으면 가입할 수 없습니다.'),
  })

  const [emailAvailable, setEmailAvailable] = useState<boolean>(false)
  const [nickNameAvailable, setNickNameAvailable] = useState<boolean>(false)
  const [entryPage, setEntryOne] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isCheckOpen, setIsCheckOpen] = useState<boolean>(false)
  const [isCheckText, setIsCheckText] = useState<string>('')
  const [isModalTitle, setIsModalTitle] = useState<string>('')

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
    // const formattedBirthDate = data.birthDate.split(' ').slice(0, 4).join(' ')
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
  const EmailCheckHandler = () => {
    const emailCheck = watch('email')
    axios
      .post('http://192.168.0.10:3000/emailCheck', { emailCheck })
      .then((respose) => {
        setEmailCheck(true)
        setIsCheckOpen(true)
        setIsCheckText('This email is available.')
        setIsModalTitle('Notification')
        setEmailAvailable(true)
      })
      .catch((error) => {
        setIsCheckOpen(true)
        setIsCheckText('This email is not available.')
        setIsModalTitle('Notification')
      })
  }

  // 닉네임 중복요청
  const NickNameCheckHandler = () => {
    const NicknameCheck = watch('Nickname')
    axios
      .post('http://192.168.0.10:3000/nicknameCheck', { NicknameCheck })
      .then((respose) => {
        console.log(respose, '성공')
        setNickNameCheck(true)
        setIsCheckOpen(true)
        setIsCheckText('사용 가능한 닉네임 입니다.')
        setIsModalTitle('Nickname duplicates')
        setNickNameAvailable(true)
      })
      .catch((error) => {
        console.log(error, '<= 에러 떴다 ')
        setIsCheckOpen(true)
        setIsCheckText('사용 불가능한 닉네임 입니다.')
        setIsModalTitle('Nickname duplicates')
      })
  }

  const AccountEntry = async () => {
    if (!emailCheck) {
      setIsCheckOpen(true)
      setIsCheckText('이메일 중복검사를 해주세요')
      setIsModalTitle('Email duplicates')
      return
    }
    try {
      await schema.validate({
        email: watch('email'),
        password: watch('password'),
        confirmPassword: watch('confirmPassword'),
        checkbox: watch('checkbox'),
      })
      setEntryOne(1)
    } catch (error: any) {
      console.log(error.message)
    }
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
            />
          </SignTopLogo>
          <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
            {entryPage == 0 ? (
              <>
                <InnerInputLine style={{ marginTop: '3rem' }}>
                  <TextField
                    type="email"
                    {...register('email')}
                    InputProps={{
                      style: {
                        width: '31rem',
                        height: '3.3rem',
                        color: '#000',
                        fontFamily: 'Noto Sans',
                        fontWeight: '500',
                        fontSize: '18px',
                        paddingLeft: '0.5rem',
                        border: '1px solid #3e3e3e',
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
                        fontWeight: '500',
                        fontSize: '20px',
                        paddingLeft: '0.5rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        zIndex: 1,

                        height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="EMAIL"
                  />

                  <p className="message">
                    {errors.email && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>
                          {errors.email.message}
                        </p>
                      </div>
                    )}
                  </p>
                </InnerInputLine>
                <InnerInputLine>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    onChange={(value) => onChangeValue(value)}
                    InputProps={{
                      style: {
                        width: '31rem',
                        height: '3.3rem',
                        color: '#000',
                        fontFamily: 'Noto Sans',
                        fontWeight: '500',
                        fontSize: '18px',
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
                        fontWeight: '500',
                        fontSize: '20px',
                        paddingLeft: '0.5rem',
                        color: '#rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        height: '24px',
                        backgroundColor: '#fff',
                      },
                    }}
                    label="PASSWORD"
                  />
                  <p className="message">
                    {errors.password && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>
                          {errors.password.message}
                        </p>
                      </div>
                    )}
                  </p>
                </InnerInputLine>
                <InnerInputLine>
                  <TextField
                    type={checkShowPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    onChange={(value) => onChangeCheckValue(value)}
                    InputProps={{
                      style: {
                        width: '31rem',
                        height: '3.3rem',
                        color: '#000',
                        fontFamily: 'Noto Sans',
                        fontWeight: '500',
                        fontSize: '18px',
                        paddingLeft: '0.5rem',
                        border: '1px solid #3e3e3e',
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
                  />
                  <p className="message">
                    {errors.confirmPassword && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>
                          {errors.confirmPassword.message}
                        </p>
                      </div>
                    )}
                  </p>
                </InnerInputLine>
                {/* <InnerInputLine>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              locale={ko}
              placeholderText="DATE OF BIRTH"
              className="date-picker"
            />
            <p className="message">
              {errors.birthDate && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={YupIcon} alt="error" width={24} height={24} />
                  <p style={{ marginLeft: '5px' }}>
                    {errors.birthDate.message}
                  </p>
                </div>
              )}
            </p>
          </InnerInputLine> */}
                <SignPersonal>{AgreePersonal}</SignPersonal>
                <SignupText>
                  <SignupInnerText>
                    <SignupTerms>
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        className="checkbox_signup"
                        {...register('checkbox')}
                      />
                      <p>
                        [Required] I read the privacy policy and I agree to
                        terms.
                      </p>
                    </SignupTerms>
                    {errors.checkbox && (
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
                          {errors.checkbox.message}
                        </p>
                      </div>
                    )}
                  </SignupInnerText>
                </SignupText>
                <Button
                  type="button"
                  fontFamily="Bebas"
                  width="31rem"
                  height="4rem"
                  backgroundColor="#000"
                  color="#FFF"
                  fontSize="2rem"
                  onClick={AccountEntry}
                >
                  Next
                </Button>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '2rem',
                  }}
                >
                  <Image
                    style={{ maxWidth: '100%', height: '17px' }}
                    src={NickNameIcon}
                    alt="nickname_carefully"
                  />
                  It&apos;s a name that other players will see in the game.
                </div>
                <NickInputLine>
                  <TextField
                    type="text"
                    {...register('Nickname', {
                      required: '닉네임을 입력해주세요',
                      pattern: {
                        value: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/,
                        message: '닉네임의 이름이 정확하지 않습니다.',
                      },
                      maxLength: {
                        value: 10,
                        message: '닉네임의 이름이 정확하지 않습니다.',
                      },
                    })}
                    placeholder="NICK NAME"
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
                  />
                  <p className="message">
                    {errors.Nickname && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>
                          {errors.Nickname.message}
                        </p>
                      </div>
                    )}
                  </p>
                </NickInputLine>
                <Button
                  type="submit"
                  backgroundColor="#000000"
                  width="31rem"
                  height="56px"
                  fontFamily="KoreanRKTR"
                  fontStyle="normal"
                  fontSize="22px"
                  color="#fff"
                  border="none"
                  style={{ transform: 'translateY(300%)' }}
                >
                  SIGN UP
                </Button>
              </>
            )}
          </SignupForm>
        </Container>
      </Wrapper>
    </>
  )
}
