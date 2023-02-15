// import { connectToDatabase } from '../database'

export async function createUser(user: {
  email: string
  password: string
  phonenumber: string
  nickname: string
}) {
  const db = await connectToDatabase()
  // user 객체를 데이터베이스에 저장하는 로직 추가
}
