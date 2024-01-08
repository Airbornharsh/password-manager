import { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (req: Request) => {
  try {
    console.log('Hello World')
    return Response.json({ message: 'Hello World' })
  } catch (e) {
    console.log(e)
  }
}
