import './globals.css'
import { Sora } from 'next/font/google'
import Navbar from '../app/components/views/Navbar'
import Wrapper from './components/shared/Wrapper'

const inter = Sora({ subsets: ['latin'],weight:["100","200","300","400","500","600"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
        <Navbar/>
        {children}
        </Wrapper></body>
    </html>
  )
}