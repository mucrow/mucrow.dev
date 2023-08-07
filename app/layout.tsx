import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Heading1 } from '@/app/Heading';

import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mucrow.dev',
  description: 'Homepage of the pseudonymous programmer mucrow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-8">
          <Heading1 />
          {children}
        </main>
      </body>
    </html>
  )
}
