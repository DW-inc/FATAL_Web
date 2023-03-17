import { IncomingHttpHeaders } from 'http'
const jwt = require('jsonwebtoken')
import { parse } from 'cookie'

function checkUserLoggedIn(headers: IncomingHttpHeaders) {
  const cookies = parseCookies(headers.cookie || '')

  if (!cookies.ACCESS_TOKEN) {
    return false
  }

  try {
    jwt.verify(cookies.ACCESS_TOKEN, process.env.JWT_SECRET)
    return true
  } catch (error) {
    return false
  }
}

function parseCookies(cookieHeader: string) {
  return parse(cookieHeader)
}

export default checkUserLoggedIn
