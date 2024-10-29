'use client'

import Link from 'next/link'
import React from 'react'

const Login = () => {

  const handleSubmit = async () => {
    console.log('Submitted')
  }

  return (
    <div className='flex h-[60vh] flex-col w-full justify-center items-center'>
    <main className=' text-primary shadow-md rounded-lg p-8 border'>
      <h1 className='text-4xl font-roboto font-semibold text-center pb-4'>Sign in</h1>
      <form className='space-y-5'>
        <div className='space-y-2'>
          <label htmlFor='email' className='font-roboto font-medium'>Email</label>
          <input type='email' id='email' placeholder='example@gmail.com' className='text-black w-full p-2 border border-primary rounded-md' />
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={handleSubmit} className='bg-primary text-white p-3 px-5 rounded-md font-roboto font-medium'>Login</button>
        </div>
      </form>
    </main>
    <div className='space-x-1 pt-5'>
        <span className='font-medium text-sm'>Don't have an account?</span>
        <Link href='/auth/register' className='text-primary font-semibold'>Sign up</Link>
    </div>
  </div>
  )
}

export default Login
