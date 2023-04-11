import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { LoginRegistryState, LoginUserInfoState } from 'src/commons/store'

export default function Download() {
  const loginUserInfo = useRecoilValue(LoginUserInfoState)
  const loginRegistry = useRecoilValue(LoginRegistryState)

  console.log(loginUserInfo.user_email, 'loginUserInfo.user_email')

  return (
    <div>
      {loginRegistry ? <div>{loginUserInfo.user_email}</div> : <div></div>}
    </div>
  )
}
