import { useEffect, useRef } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
//import { Inter } from '@next/font/google'
import '@/styles/tailwind.css'
import 'focus-visible'

/* const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
}) */

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-light-100   dark:bg-dark-200 " />
        </div>
      </div>
      <div className={'relative'}>
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
