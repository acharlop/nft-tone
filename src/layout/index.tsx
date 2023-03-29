import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className=' grid h-screen grid-cols-1 grid-rows-body'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
