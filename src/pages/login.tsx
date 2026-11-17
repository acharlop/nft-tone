import { type NextPage } from 'next'
import Head from 'next/head'
import { getI18nProps } from '~/i18n/i18n-props'

import Background from '~/assets/login-bg.svg'
import Carousel from '~/components/Carousel'
import { useI18nContext } from '~/i18n/i18n-react'

export const getStaticProps = getI18nProps

const Login: NextPage = () => {
  const { LL } = useI18nContext()
  return (
    <>
      <Head>
        <title>NFT Tone | Login</title>
        <meta name='description' content='Login' />
      </Head>
      <main>
        <div className='flex flex-col justify-between pl-16 pr-24 md:flex-row'>
          <div className='max-w-lg'>
            <h1 className='font-title text-5xl font-bold capitalize'>{LL.LOGIN.TITLE()}</h1>
            <p className='mt-8'>{LL.LOGIN.DESCRIPTION()}</p>
            <button className='h-14 w-full bg-primary-500/60 bg-gradient-to-bl from-primary-500/60 text-center capitalize text-white transition-all duration-1000 ease-out hover:to-primary-500/60'>
              <span>log in</span>
            </button>
          </div>
          {/* <Drummer /> */}
          <div className='-mt-16 flex max-w-[680px] flex-col items-center gap-16'>
            <Carousel />
            <p className='max-w-sm text-center'>{LL.LOGIN.DESCRIPTION()}</p>
          </div>
        </div>
        <Background className='fixed bottom-0 right-0 top-0 -z-10 h-screen' />
      </main>
    </>
  )
}

export default Login
