import type { AppType, AppProps } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Fragment } from 'react'

import { api } from '~/utils/api'
import { Locales, Translation } from '~/i18n/i18n-types'
import { loadedLocales } from '~/i18n/i18n-util'
import { loadFormatters } from '~/i18n/i18n-util.sync'

import Layout from '~/layout'

import '~/styles/globals.css'
import TypesafeI18n from '~/i18n/i18n-react'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  // i18n
  const locale: Locales = pageProps.i18n?.locale
  const dictionary: Translation = pageProps.i18n?.dictionary
  loadedLocales[locale] = dictionary
  loadFormatters(locale)

  const Translation = pageProps.i18n ? TypesafeI18n : Fragment

  return (
    <SessionProvider session={session}>
      <Translation locale={locale}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Translation>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
