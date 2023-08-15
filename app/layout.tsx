import type { Metadata } from 'next'

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
          <a className="homepage-link unstyle" href="/">mucrow.dev</a>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
