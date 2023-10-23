import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Invoicing Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-zinc-50`}>
          {children}
      </body>
    </html>
  )
}
