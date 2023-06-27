'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    redirect('/login')
  }, [])


  return (
    <main>
      <b>Next 13</b>
    </main>
  )
}
