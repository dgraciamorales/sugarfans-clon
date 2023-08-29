import './globals.scss'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import MyNavbar from '@/components/MyNavbar/MyNavbar'
import Providers from './Providers'

import { NextAppDirEmotionCacheProvider } from 'tss-react/next'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sugarfans clon',
  description: 'Sugarfans clon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <Providers>
            <MyNavbar />
            <main className="navbarSpace">{children}</main>
          </Providers>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  )
}
