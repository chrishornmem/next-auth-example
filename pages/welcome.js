import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client'

import Layout from '../components/layout'

export default function Welcome (pageProps) {

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

  return (
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  )
}