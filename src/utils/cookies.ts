import { Cookies } from 'react-cookie'
import { CookieGetOptions, CookieSetOptions } from 'universal-cookie'

const cookies = new Cookies()

const ACCESS_TOKEN = 'ACCESS_TOKEN'
const REFRESH_TOKEN = 'REFRESH_TOKEN'
export function setToken(key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN', token: string) {
  const expires = new Date()
  if (key === 'ACCESS_TOKEN') {
    expires.setTime(expires.getTime() + 3600 * 1000)
  } else {
    expires.setDate(expires.getDate() + 7)
  }

  cookies.set(key, token, {
    path: '/',
    expires: key === 'REFRESH_TOKEN' ? expires : undefined,
    secure: true,
    sameSite: 'none',
    httpOnly: false,
  })
}

export function removeToken(key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN') {
  cookies.remove(key, { path: '/' })
}

export function removeTokenAll() {
  removeToken(ACCESS_TOKEN)
  removeToken(REFRESH_TOKEN)
}

export function getAccessToken() {
  return cookies.get(ACCESS_TOKEN)
}

export function getRefreshToken() {
  return cookies.get(REFRESH_TOKEN)
}
