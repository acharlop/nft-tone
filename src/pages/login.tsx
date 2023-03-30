import { type NextPage } from 'next'
import Head from 'next/head'
import { getI18nProps } from '~/i18n/i18n-props'

import Background from '~/assets/login-bg.svg'
import Drummer from '~/assets/drummer.svg'
import Carousel from '~/components/Carousel'

export const getStaticProps = getI18nProps

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT Tone | Login</title>
        <meta name='description' content='Login' />
      </Head>
      <main>
        <div className='grid grid-flow-row grid-cols-1 md:grid-flow-col md:grid-cols-2'>
          <div>form</div>
          {/* <Drummer /> */}
          <Carousel />
        </div>
        <Background className='fixed top-0 right-0 bottom-0 -z-10 h-screen' />
      </main>
    </>
  )
}

export default Login
