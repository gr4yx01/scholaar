'use client'

import Link from 'next/link'
import React from 'react'
import { useCookies } from 'react-cookie'

const Header = () => {
  const [cookie,_, removeCookie] = useCookies(['token'])

  const handleLogout = async () => {
    console.log('yowa')
    removeCookie('token')
  }

  return (
    <div className=''>
      <main className='flex justify-between items-center p-5 px-12 border-b-2'>
        <Link href='/' className='font-roboto font-semibold text-4xl'>Scholaar</Link>
        <div className='space-x-5'>
          {
            cookie?.token && (
              <>
                <Link href='/scholarship/apply' className='bg-primaryLight text-white p-3 px-5 rounded-md font-roboto font-medium'>Scholarship</Link>
                <Link href='/loan/apply' className='bg-primaryLight text-white p-3 px-5 rounded-md font-roboto font-medium'>Loan</Link>
                <button onClick={handleLogout} className='border text-primary p-2 px-5 rounded-md font-roboto font-medium'>Log out</button>
              </>
            )
          }
          {
            !cookie?.token && (
              <Link href='/auth/register' className='bg-white text-primaryLight border-primaryLight border p-3 px-5 rounded-md font-roboto font-medium'>Register/Login</Link>
            )
          }
        </div>
      </main>
    </div>
  )
}

export default Header
