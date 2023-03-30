import { useRouter } from 'next/router'

export default function Footer() {
  const { pathname } = useRouter()

  if (pathname === '/login') return <></>

  return <div>Footer</div>
}
