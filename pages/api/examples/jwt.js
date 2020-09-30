// This is an example of how to read a JSON Web Token from an API route
import jwt from 'next-auth/jwt'

const secret = process.env.SECRET

export default async (req, res) => {

  const secureCookie = !(!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.startsWith('http://'));
  const cookieName = secureCookie ? '__Secure-next-auth.session-token' : 'next-auth.session-token';
  const token = await jwt.getToken({ req, secret })
  res.send(JSON.stringify(token, null, 2))
}