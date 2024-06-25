'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'
import Profiles from './Components/profiles'

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  
  // const router = useRouter();


  return (
    <html lang="pt" className='scroll-smooth'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="h-screen">
        <Navbar/>
        <Profiles/>
        {children}
        </body>
    </html>
  )
}
