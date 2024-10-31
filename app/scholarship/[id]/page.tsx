'use client'

import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Detail = () => {
    const { id } = useParams()
    const [scholarship, setScholarship] = useState<any>()

    useEffect(() => {
      const getScholarshipDetail = async () => {
        const scholarship = await axios.get(`http://localhost:4000/scholarships/${id}`)
        setScholarship(scholarship?.data?.data)
      }

      getScholarshipDetail()
    }, [])

  return (
    <div className='flex h-screen mt-36 justify-center items-center flex-col space-y-4'>
      <span className='text-3xl font-jakarta font-bold text-primary'>{scholarship?.name}</span>
      <div className='font-jakarta'>
        <span className='font-semibold'>Sponsor: </span>
        <span className='font-semibold text-lg'>{scholarship?.sponsor}</span>
      </div>
      <button className='p-2 rounded-full border px-6'>
        <a href={scholarship?.url} target="_blank" className='font-jakarta font-semibold text-primaryLight'>Apply</a>
      </button>
      <div className='flex justify-around gap-8 py-10'>
        <div className='flex flex-col justify-center items-center border p-5 rounded-lg font-jakarta space-y-2'>
          <span className='text-lg font-semibold'>Deadline</span>
          <span className='font-medium '>{scholarship?.deadline}</span>
        </div>
        <div className='flex flex-col justify-center items-center border p-5 rounded-lg font-jakarta space-y-2'>
          <span className='text-lg font-semibold'>Field of Study</span>
          <div className='grid grid-cols-2 gap-3'>
            {
              scholarship?.field_of_study?.map((field: string) => (
                <span className='text-xs p-1 border rounded-full px-2 w-fit font-semibold'>{field}</span>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border p-5 rounded-lg font-jakarta space-y-2'>
          <span className='text-lg font-semibold'>Award</span>
          <span className='font-semibold'>$ {scholarship?.amount}</span>
        </div>
      </div>
      <div className='w-1/2 space-y-5 font-jakarta'>
        <div className='flex flex-col space-y-2'>
          <span className='font-bold text-xl'>Scholarship Description</span>
          <span className='text-balance text-sm font-medium tracking-wide'>{scholarship?.description}</span>
        </div>
        <div className='flex flex-col space-y-3'>
          <span className='font-semibold'>Host Country</span>
          <div className='flex gap-4'>
            {
              scholarship?.host_country?.map((nation: string) => (
                <span className='border rounded-full p-2 px-4'>{nation}</span>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <span className='font-semibold'>Eligible Nationalities</span>
          <div className='flex gap-4'>
            {
              scholarship?.nationality?.map((nation: string) => (
                <span className='border rounded-full p-2 px-4'>{nation}</span>
              ))
            }
          </div>
        </div>
        <div className='space-y-5 pb-10'>
          <span className='font-bold text-xl'>More Award Detail</span>
          <div>
            <div className='flex flex-col border-2 p-5 w-fit justify-center items-center space-y-2 rounded-lg'>
              <span className='font-semibold'>Number of award</span>
              <span>{scholarship?.number_of_award}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
