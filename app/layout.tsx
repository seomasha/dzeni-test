import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Silk Studio — Salon Ljepote Sarajevo',
  description: 'Profesionalni salon ljepote u Sarajevu — manikir, pedikir, njega lica, make-up, friziranje, depilacija, trepavice.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
