import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Banco Itau',
  description: 'Codando LP Itaú',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
