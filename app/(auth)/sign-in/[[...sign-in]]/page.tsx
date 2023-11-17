import React from 'react'
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  )
}

export default page