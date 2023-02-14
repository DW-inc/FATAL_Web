import type { NextApiRequest, NextApiResponse } from 'next'
import jwtDecode from 'jwt-decode'

async function signUp(credential: string) {
  const decoded: { email: string; phonenumber: string; nickname: string } =
    jwtDecode(credential)
  try {
    const respose = await 


    // const result = { success: true, message: 'Signed up successfully' }
    // return result
  } catch (err) {
    console.log(err)
  }
}

type Data = { 
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>  
) {
  const { credential } = req.query
  try {
    const tokens = await signUp(String(credential))
    res.status(200).json({ items: tokens, message: `Success` })
  } catch (err) {
    res.status(400).json({ message: `Fail  ` })
  }
}
