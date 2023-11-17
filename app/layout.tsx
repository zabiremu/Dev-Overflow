import React from 'react'
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const year = new Date().getFullYear();

  return (
    <ClerkProvider>
      <html lang='en'>
        <head />
        <body>
          <main className='flex min-h-screen w-full items-center justify-center'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default Layout

