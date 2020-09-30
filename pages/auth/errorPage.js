import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client'

import Layout from '../../components/layout'

export default function Error (pageProps) {

  const router = useRouter();
  const [ session, loading ] = useSession()

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  return (
    <Layout>
      <h1>Error</h1>
    </Layout>
  )
}