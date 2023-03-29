import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import Logo from '~/assets/logo.svg'
import { useI18nContext } from '~/i18n/i18n-react'

export default function Navbar() {
  const { LL } = useI18nContext()
  const { data: sessionData } = useSession()

  return (
    <nav className='flex items-center gap-16 p-16'>
      <Link href='/'>
        <Logo />
      </Link>
      <div className='flex items-center gap-6 capitalize'>
        {Object.keys(LL.NAVBAR).map((key) => (
          <Link key={key} href={`/${key.toLowerCase}`}>
            {LL.NAVBAR[key]()}
          </Link>
        ))}
      </div>
      <button
        className='ml-auto text-black'
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </nav>
  )
}
