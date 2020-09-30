import React from 'react'
import { providers, signOut } from 'next-auth/client'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client'

export default function SignOut({ providers, callbackUrl }) {

  const router = useRouter();
  const [ session, loading ] = useSession()

  // If no session exists, display access denied message
  React.useEffect(() => {
    if (!loading && !session) {
      router.replace('/')
    }
  }, [session, loading])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  if (!session) return null

  return (
    <>
      <div>
        <button onClick={() => signOut({ callbackUrl })}>Logout!!!</button>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      providers: await providers(context),
      callbackUrl: process.env.NEXTAUTH_URL,
    }
  }
}