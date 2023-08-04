import './globals.scss'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import MyNavbar from '@/components/MyNavbar/MyNavbar'
import Providers from './Providers'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sugarfans clon',
  description: 'Sugarfans clon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MyNavbar />
          <main className="navbarSpace">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
