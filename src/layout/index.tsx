import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props extends PropsWithChildren {
  hideFooter?: boolean
}

export default function Layout({ children, hideFooter }: Props) {
  return (
    <div className='grid h-screen w-screen grid-cols-1 grid-rows-main'>
      <Navbar />
      <div className='w-full'>{children}</div>
      {!hideFooter && <Footer />}
    </div>
  )
}
