'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {

  const login = localStorage.getItem('login');

  useEffect(() => {
    if(login) {
      redirect('/menu')
    } else {
      redirect('/login')
    }
  }, [])


  return (
    <main>
      <b>Next 13</b>
    </main>
  )
}
