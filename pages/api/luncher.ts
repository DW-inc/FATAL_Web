// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookie from 'js-cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_info = Cookie.get('user_info')
  // Check the request method (GET, POST, PUT, DELETE, etc.)
  if (req.method === 'GET') {
    // Retrieve the game status from your game launcher here
    const gameStatus = fetchGameStatus()
    const cookieData = req.headers.cookie
    // Respond with a JSON object containing the game status
    res.status(200)
    res.setHeader('Set-Cookie', `${user_info} `).json({ status: gameStatus })
    console.log(user_info, 'user_info ')
  } else {
    // If the request method is not supported, respond with a 405 (Method Not Allowed) status
    res.status(405).end()
  }
}

function fetchGameStatus() {
  // Logic for getting game status from your game launcher
  // ...
  const gameStatus = true // This is just an example, replace 'true' with the actual game status value (e.g., boolean, string, or object)
  return gameStatus
}
