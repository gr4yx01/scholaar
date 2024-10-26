'use client'

import React from 'react'

const Scholarship = () => {
  return (
    <div className='h-[70vh] w-full justify-center items-center flex flex-col space-y-8'>
      <span className='font-semibold text-3xl font-roboto'>Search for {" "}
        <span className='text-primary'>Scholarship</span></span>
      <main className='w-96 h-fit border rounded-lg p-3'>
        <div className='flex justify-center items-center h-full flex-col space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='email' className='font-roboto font-medium text-gray-500'>Search by name</label>
              <input type='email' id='email' placeholder='example@gmail.com' className='text-black outline-none w-full p-2 border-gray-500 border rounded-md' />
            </div>
            <div className='flex w-full justify-center items-center gap-2'>
                <div className='h-[1px] w-[80%] bg-gray-400' />
                    <span>Or</span>
                <div className='h-[1px] w-[80%] bg-gray-400'/>
            </div>
            <div className='space-y-3'>
                <div className='space-y-2'>
                  <label htmlFor='email' className='font-roboto font-medium text-gray-500'>Search by name</label>
                  <input type='email' id='email' placeholder='example@gmail.com' className='text-black outline-none w-full p-2 border-gray-500 border rounded-md' />
                </div>
                <div className='space-y-2'>
                    <label htmlFor='email' className='font-roboto font-medium text-gray-500'>Search by name</label>
                <input type='email' id='email' placeholder='example@gmail.com' className='text-black outline-none w-full p-2 border-gray-500 border rounded-md' />
            </div>
            </div>
          <button onClick={() => {}} className={`bg-primaryLight w-[50%]  rounded-full py-2 text-white font-semibold font-jakarta`}>
            Next
          </button>
        </div>
      </main>
    </div>
  )
}

export default Scholarship
