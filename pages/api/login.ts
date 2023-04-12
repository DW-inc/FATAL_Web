// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { serialize } from 'cookie'
const jwt = require('jsonwebtoken')

type LoginData = {
  email: string
  password: string
}

type UserInfo = {
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user_info?: UserInfo } | { error: string }>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body as LoginData
    try {
      const response = await axios.post(
        'http://43.155.153.201:3002/login',

        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      if (response.status === 200) {
        const { access_token: accessToken, refresh_token: refreshToken } =
          response.data
        const accessTokenCookie = serialize('ACCESS_TOKEN', accessToken, {
          path: '/',
          maxAge: 86400, // 쿠키 만료 시간을 24시간(86400초)으로 설정합니다.
          httpOnly: true,
        })

        const refreshTokenCookie = serialize('REFRESH_TOKEN', refreshToken, {
          path: '/',
          maxAge: 2592000, // 쿠키 만료 시간을 30일(2592000초)으로 설정합니다.
          httpOnly: true,
        })

        const token = accessToken
        const decoded = jwt.decode(token, { complete: true })
        const payload = decoded.payload
        const user_info: UserInfo = {
          email: payload.user_email,
        }
        const email = payload.user_email
        const emailCookie = serialize('user_email', email, {
          path: '/',
          maxAge: 86400, // 쿠키 만료 시간을 24시간(86400초)으로 설정합니다.
        })

        res.setHeader('Set-Cookie', [
          accessTokenCookie,
          refreshTokenCookie,
          emailCookie,
        ])
        res.status(200).json({ user_info })
      } else if (response.status === 401) {
        res.status(401).json({ error: 'Login failed' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
