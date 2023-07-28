import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='fr'>
      <body>
        {children}
      </body>
    </html>
  )
}
