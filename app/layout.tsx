import type { Metadata } from 'next'

import { Heading1 } from '@/app/Heading';

import '@/app/globals.css'

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
      <body>
        <header>
          <a href="/">mucrow.dev</a>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
