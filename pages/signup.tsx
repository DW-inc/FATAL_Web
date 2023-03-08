import { css, styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../src/components/commons/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import { Container } from '@mui/material'
import DatePicker from 'react-datepicker'
import ko from 'date-fns/locale/ko'
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

export interface IFormInput {
  email: string
  password: string
  confirmPassword: string
  birthDate: string
  nickname: string
  checkbox1: boolean
  checkbox2: boolean
  checkbox3: boolean
}

interface IEntryPageNumber {
  entryPage: number
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

const SignTopText = styled('div')((theme) => ({
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '80px',
  lineHeight: '96px',

  textAlign: 'center',

  color: '#000000',
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

const InputEmail = styled('input')(
  css`
    width: 30rem;
    height: 2.5rem;
    color: #000;
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding-left: 0.5rem;
    border: 1px solid #3e3e3e;
    border-radius: 4px;
    @media (max-width: 640px) {
      width: 30rem;
    }
  `
)

const InputPassword = styled('input')(
  css`
    width: 30rem;
    height: 2.5rem;
    color: #000;
    padding-left: 0.5rem;
    font-family: 'Bebas';
    font-size: 20px;
    border: 1px solid #3e3e3e;
    @media (max-width: 640px) {
      width: 30rem;
    }
  `
)

const InputNickName = styled('input')(
  css`
    width: 30rem;
    height: 2.5rem;
    color: #000;
    padding-left: 0.5rem;
    font-family: 'Bebas';
    font-size: 20px;
    border: 1px solid #3e3e3e;
    border-radius: 4px;
    @media (max-width: 640px) {
      width: 30rem;
    }
  `
)

const SignupText = styled('div')(
  {
    width: '520px',
    maxWidth: '1200px',
    padding: '1.5rem',
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
    marginTop: '3.5rem',
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

const DuplicateBtn = styled('div')({
  background: 'rgba(211, 211, 211, 0.5)',
  borderRadius: '5px',
  width: '6rem',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  /* identical to box height */
  textAlign: 'center',
  color: '#474747',
})

export default function Signup() {
  const router = useRouter()
  const [inputPwValue, setInputPwValue] = useState('')
  const [checkInputPwValue, setCheckInputPwValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [checkShowPassword, setCheckShowPassword] = useState(false)
  const onChangeValue = (e: any) => {
    setInputPwValue(e.target.value)
  }

  const onChangeCheckValue = (e: any) => {
    setCheckInputPwValue(e.target.value)
  }

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    setValue('birthDate', date ? date.toString() : '')
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
    nickname: yup
      .string()
      .min(2, '닉네임 4자리 이상 입력해 주세요.')
      .max(10, '10자 이내로 입력해주세요.')
      .required('닉네임은 필수 입력 사항입니다.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    birthDate: yup.string().required('생일은 필수입력 사항입니다.'),
    checkbox1: yup.boolean().required('동의하지 않으면 가입할 수 없습니다.'),
    checkbox2: yup.boolean().required('동의하지 않으면 가입할 수 없습니다.'),
    checkbox3: yup
      .boolean()
      .required('동의하지 않으면 이벤트 참여가 안됩니다.'),
  })

  const [emailAvailable, setEmailAvailable] = useState<boolean>(false)
  const [entryPage, setEntryOne] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    const formattedBirthDate = data.birthDate.split(' ').slice(0, 4).join(' ')

    const SignupData = {
      email: data.email,
      password: data.password,
      birthDate: formattedBirthDate,
      nickname: data.nickname,
    }

    axios
      .post('http://192.168.0.10:3000/signup', SignupData)
      .then((res) => router.push('/'))
      .catch((err) => console.log(err, '에러실패'))

    console.log(SignupData, '가입버튼')
  }

  const EmailEntry = () => {
    setEntryOne(1)
  }

  const AccountEntry = () => {
    setEntryOne(1)
    setIsOpen(true)
  }

  return (
    <>
      {isOpen ? <SignUpModal /> : null}
      <Wrapper>
        <Container maxWidth={'lg'} style={{ padding: '4rem 0' }}>
          <SignTopText>CREATE ID</SignTopText>
          <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
            {entryPage == 0 ? (
              <>
                <InnerInputLine style={{ marginTop: '3rem' }}>
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
                      endAdornment: (
                        <InputAdornment position="end">
                          <DuplicateBtn>Verification</DuplicateBtn>
                        </InputAdornment>
                      ),
                    }}
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
                    placeholder="CONFIRM PASSWORD"
                    onChange={(value) => onChangeCheckValue(value)}
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
                <SignupText>
                  <SignupInnerText>
                    <SignupTerms>
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        className="checkbox_signup"
                        {...register('checkbox2')}
                      />
                      <p>
                        [Required] I read the privacy policy and I agree to
                        terms.
                      </p>
                    </SignupTerms>
                    {errors.checkbox2 && (
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
                          {errors.checkbox2.message}
                        </p>
                      </div>
                    )}
                  </SignupInnerText>
                </SignupText>
                <Button
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
                    {...register('nickname')}
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
                          <DuplicateBtn>Verification</DuplicateBtn>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p className="message">
                    {errors.nickname && (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={YupIcon}
                          alt="error"
                          width={24}
                          height={24}
                        />
                        <p style={{ marginLeft: '5px' }}>
                          {errors.nickname.message}
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
