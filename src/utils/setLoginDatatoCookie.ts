import { setCookie } from './cookies'

// email 매개변수를 받아 login 이라는 쿠키를 email 값으로 설정하는 setLoginDataToCookie 함수입니다.
// 쿠키가 유요한 경로로 전체 웹사이트에 대해 유효하도록 '/' 로 설정
// secure  쿠키가 보안 (https) 연결을 통해서만 전송되도록 true 값을 설정
// sameSite 동일 사이트 정책을 적용하려면 '엄격' 으로 설정합니다
// expires 쿠키만료시간을 20시간으로 설정했습니다.

export const setLoginDataToCookie = (email: string) => {
  const expires = new Date()
  expires.setHours(expires.getHours() + 20)
  setCookie('user_email', email, {
    path: '/',
    secure: true,
    sameSite: 'strict',
    expires,
  })
}
