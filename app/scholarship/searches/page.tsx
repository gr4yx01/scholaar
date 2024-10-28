'use client'

import { useScholarship } from '@/stores/scholarship'
import Link from 'next/link'
import React from 'react'

const Scholarships = () => {
  const scholarships = useScholarship((state) => state.scholarships)
  console.log(scholarships)

  return (
    <div className='flex justify-center items-center p-5 flex-col'>
      <span className='text-4xl font-jakarta text-primary font-semibold'>Scholarships</span>
      <div className='mt-10 grid grid-cols-3 gap-5'>
        {
            scholarships?.data?.map((scholarship: any) => (
                <Link href={`/scholarship/${scholarship?.id}`} className='flex justify-center items-center space-x-5 border w-[270px] flex-col p-5 space-y-5 shadow-lg rounded-md'>
                    <span className='font-jakarta text-xl text-primary font-bold'>{scholarship?.name}</span>
                    <div className='w-full flex gap-4 flex-wrap'>
                        {
                            scholarship?.host_country?.map((nation: string) => (
                                <span className='text-sm text-primary font-jakarta font-medium rounded-full border p-2'>{nation}</span>
                            ))
                        }
                    </div>  
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Scholarships
