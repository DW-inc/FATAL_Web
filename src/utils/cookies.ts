import { Cookies } from 'react-cookie'
import { CookieGetOptions, CookieSetOptions } from 'universal-cookie'

const index = new Cookies()

// setCookie: 주어진 이름과 값으로 브라우저에 쿠키를 설정하며 만료일, 도메인과 같은 추가 옵션을 세 번째 인수로 전달할 수 있습니다.

export const setCookie = (
  name: string,
  value: string,
  options?: CookieSetOptions
) => index.set(name, value, options)

// const setCookieHandler = (value: string) => {
//     const expires = new Date()
//     expires.setHours(expires.getHours() + 20)
//     setCookie(name, value, {
//       path: '/',
//       secure: true,
//       sameSite: 'strict',
//       expires,
//     })
//   }

// getCookie: 주어진 이름을 가진 쿠키의 값을 가져오고 doNotParse와 같은 추가 옵션을 두 번째 인수로 전달할 수 있습니다.
export const getCookie = (name: string, options?: CookieGetOptions) =>
  index.get(name, options)
// removeCookie: 주어진 이름을 가진 쿠키를 제거합니다.
export const removeCookie = (name: string) => index.remove(name)
