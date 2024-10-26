import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <main className='flex justify-between items-center p-5 px-12 border-b-2'>
        <p className='font-roboto font-semibold text-4xl'>Scholaar</p>
        <div className='space-x-5'>
          <Link href='/scholarship/apply' className='bg-primaryLight text-white p-3 px-5 rounded-md font-roboto font-medium'>Scholarship</Link>
          <Link href='/loan/apply' className='bg-primaryLight text-white p-3 px-5 rounded-md font-roboto font-medium'>Loan</Link>
          <button className='bg-white text-primaryLight border-primaryLight border p-3 px-5 rounded-md font-roboto font-medium'>Register/Login</button>
        </div>
      </main>
    </div>
  )
}

export default Header
