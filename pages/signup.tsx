import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { Input } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../src/components/commons/Button'

export interface IFormInput {
  email: string
  password: string
  phonenumber: string
  nickname: string
}

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState('')

  console.log(phoneNumber, 'phoneNumber 짜증나게 왜 안바뀜??')

  // const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target
  //   const phoneNumberRegex = /^[\d-]*$/
  //   if (phoneNumberRegex.test(value) || value === '') {
  //     if (value.length === 3) {
  //       event.target.value = value + '-'
  //     } else if (value.length === 8) {
  //       event.target.value = value + '-'
  //     } else if (value.length > 13) {
  //       event.target.value = value.slice(0, 13)
  //     }
  //     setPhoneNumber(event.target.value)
  //   }
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<IFormInput>()

  const onSubmitHandler: SubmitHandler<IFormInput> = (data) => {
    console.log(data, '가입버튼')
  }

  return (
    <Wrapper>
      <Grid
        container
        spacing={{ xs: 3, lg: 0 }}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item xs={3} md={2} lg={7}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label>이메일</label>
            <Input
              type="email"
              {...register('email', {
                required: '이메일은 필수 입력사항입니다.',
              })}
            />
            <label>닉네임</label>
            <Input
              {...register('nickname', {
                required: '닉네임은 필수 입력사항입니다.',
              })}
            />
            <label>비밀번호</label>
            <Input
              type="password"
              {...register('password', {
                required: '비밀번호은 필수 입력사항입니다.',
              })}
            />
            <label>휴대폰번호</label>
            <Controller
              name="phonenumber"
              control={control}
              rules={{
                required: '핸드폰 번호를 입력해주세요.',
                maxLength: {
                  value: 13,
                  message: '핸드폰의 정보가 정확하지 않습니다.',
                },
                minLength: {
                  value: 13,
                  message: '핸드폰의 정보가 정확하지 않습니다.',
                },
                pattern: {
                  value: /^\d{3}-\d{4}-\d{4}$/,
                  message: '핸드폰의 정보가 정확하지 않습니다.',
                },
              }}
              render={({ field }) => (
                <Input
                  type="tel"
                  placeholder="010-1234-1234"
                  value={phoneNumber}
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
            <Alert>{errors.phonenumber?.message}</Alert>
            <Button
              type="submit"
              backgroundColor="hotpink"
              // onClick={onSubmitHandler}
            >
              가입
            </Button>
          </form>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Alert = styled.div`
  color: red;
`
