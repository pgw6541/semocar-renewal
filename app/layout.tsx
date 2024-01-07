import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Project',
  description: '이름 뭐로할까..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr" className='container'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
