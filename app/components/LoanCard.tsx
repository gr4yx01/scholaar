import Link from 'next/link'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const LoanCard = ({item}: any) => {
  return (
    <div className='w-[370px] h-fit border-2 shadow-md p-5 rounded-md space-y-6'>
    <div>
        <span className='text-2xl font-jakarta font-semibold'>{item?.loan?.name}</span>
    </div>
    <ol className='space-y-3'>
        <li className='flex space-x-2'>
            <IoMdCheckmarkCircleOutline size={30} />
            <span className='text-sm font-medium font-jakarta'>{item?.loan?.description_one}</span>
        </li>
        <li className='flex space-x-2'>
            <IoMdCheckmarkCircleOutline size={30} />
            <span className='text-sm font-medium font-jakarta'>{item?.loan?.description_two}</span>
        </li>
        <li className='flex space-x-2'>
            <IoMdCheckmarkCircleOutline size={30} />
            <span className='text-sm font-medium font-jakarta'>{item?.loan?.description_three}</span>
        </li>
    </ol>
    <div className='flex justify-between'>
        <div className='flex flex-col'>
            <span className='font-semibold font-jakarta'>Fixed Rate:</span>
            <span className='font-bold text-xl font-jakarta'>{item?.loan?.fixed_rate_min}%</span>
            <span className='text-sm font-medium font-jakarta'>to {item?.loan?.fixed_rate_max}% APR</span>
        </div>
        <div className='flex flex-col'>
            <span className='font-semibold font-jakarta'>Variable Rate:</span>
            <span className='font-bold text-xl font-jakarta'>{item?.loan?.variable_rate_min}%</span>
            <span className='text-sm font-medium font-jakarta'>to {item?.loan?.variable_rate_max}% APR</span>
        </div>
    </div>
    <div className='flex justify-center items-center'>
        <a href={item?.loan?.url} target='_blank' className='bg-primaryLight px-16 text-white font-jakarta font-semibold p-2 rounded-full'>
            Apply
        </a>
    </div>
</div>
  )
}

export default LoanCard
