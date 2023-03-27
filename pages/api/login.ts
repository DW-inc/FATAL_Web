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
  nickname: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user_info?: UserInfo } | { error: string }>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body as LoginData
    try {
      const response = await axios.post(
        'http://192.168.0.10:3000/login',
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
        const token = accessToken
        const decoded = jwt.decode(token, { complete: true })
        const payload = decoded.payload
        const user_info: UserInfo = {
          email: payload.user_email,
          nickname: payload.user_nickname,
        }
        res.setHeader(
          'Set-Cookie',
          serialize('user_info', JSON.stringify(user_info), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
          })
        )
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
