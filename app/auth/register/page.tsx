'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { CSSProperties, useState } from 'react'
import { useCookies } from 'react-cookie'
import { DotLoader } from 'react-spinners'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const Register = () => {
  const [_, setCookie] = useCookies(['token'])
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
        const response = await axios.post('http://localhost:4000/auth/register', info)
        // console.log(response)
        setCookie('token', response?.data?.data)
        toast.success('Registration successful', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        })
        setLoading(false)
        router.push('/')
    } catch (err: any) {
      toast.error(err?.response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      })
      setLoading(false)
    }
  }

  return (
    <div className='flex h-[90vh] flex-col w-full justify-center items-center'>
    <main className=' text-primary shadow-md rounded-lg p-8 border'>
      <h1 className='text-4xl font-roboto font-semibold text-center pb-4'>Register</h1>
      <form className='space-y-5'>
        <div className='space-y-2'>
          <label htmlFor='name' className='font-roboto font-medium'>Name</label>
          <input type='text' id='name' onChange={(e) => setInfo({
            ...info, name: e.target.value
          })} placeholder='montgomery' className='text-black w-full p-2 border border-primary rounded-md outline-none' />
        </div>
        <div className='space-y-2'>
          <label htmlFor='email' className='font-roboto font-medium'>Email</label>
          <input type='email' id='email' onChange={(e) => setInfo({
            ...info, email: e.target.value
          })} placeholder='example@gmail.com' className='text-black w-full p-2 border border-primary rounded-md outline-none' />
        </div>
        <div className='space-y-2'>
          <label htmlFor='password' className='font-roboto font-medium'>Password</label>
          <input type='password' id='password' className='text-black w-full p-2 border border-primary rounded-md outline-none' />
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={handleSubmit} className='bg-primary text-white p-3 px-5 rounded-md font-roboto font-medium'>
            {
              loading ? (
                <DotLoader
                  color={'#fff'}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <span>Sign up</span>
              )
            }
          </button>
        </div>
      </form>
    </main>
    <div className='space-x-1 pt-5'>
        <span className='font-medium text-sm'>Already have an account?</span>
        <Link href='/auth/login' className='text-primary font-semibold'>Sign in</Link>
    </div>
    <ToastContainer />
  </div>
  )
}

export default Register
