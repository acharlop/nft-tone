import type { AppType, AppProps } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Fragment } from 'react'

import { api } from '~/utils/api'
import { Locales, Translation } from '~/i18n/i18n-types'
import { loadedLocales } from '~/i18n/i18n-util'
import { loadFormatters } from '~/i18n/i18n-util.sync'
import { Raleway, Heebo } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

import Layout from '~/layout'

import '~/styles/globals.css'
import TypesafeI18n from '~/i18n/i18n-react'
import { useRouter } from 'next/router'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const { pathname } = useRouter()
  // i18n
  const locale: Locales = pageProps.i18n?.locale
  const dictionary: Translation = pageProps.i18n?.dictionary
  loadedLocales[locale] = dictionary
  loadFormatters(locale)

  const Translation = pageProps.i18n ? TypesafeI18n : Fragment

  return (
    <SessionProvider session={session}>
      <Translation locale={locale}>
        <div className={`${raleway.variable} ${heebo.variable} font-sans`}>
          <Layout hideFooter={pathname === '/login'}>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Translation>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
