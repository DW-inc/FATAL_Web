import { NextApiRequest, NextApiResponse } from 'next'
import Cookie from 'js-cookie'

interface UserInfo {
  user_nickname: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.body) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  const { user_nickname } = req.body as UserInfo
  const requestBody = { user_nickname: user_nickname }

  try {
    // Make a request to the C# endpoint
    const response = await fetch(`http://192.168.0.27:3000/api/luncher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    // Extract the response body
    const responseBody = await response.text()
    console.log(responseBody)

    // Send the response back to the client
    res.status(200).send('성공')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
