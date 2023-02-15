import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password, phonenumber, nickname } = req.body
  // try {
  //   const result = await createUser({
  //     email,
  //     password,
  //     phonenumber,
  //     nickname,
  //   })
  //   res.status(200).json({ success: true })
  // } catch (error) {
  //   console.error(error)
  //   res.status(400).json({ success: false })
  // }
}
