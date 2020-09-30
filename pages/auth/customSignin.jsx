import React from 'react'
import { providers, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { 
              callbackUrl: 'http://localhost:3000/welcome',
              error: 'http://localhost:3000/errorPage'
            })}>
              Sign in with {provider.name}!!!
          </button>
        </div>
      ))}
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      providers: await providers(context)
    }
  }
}