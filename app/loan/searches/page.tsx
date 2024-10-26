'use client'

import LoanCard from '@/app/components/LoanCard'
import { useLoan } from '@/stores/loan'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Searches = () => {
    const selection = useLoan((state) => state.selection)
    const [loans, setLoans] = useState<any>([])

    useEffect(() => {
        const getLoans = async ()  => {
            const loans = await axios.get(`http://localhost:4000/loans/${selection.university}`)
            setLoans(loans?.data)
        }

        getLoans()
    }, [])

    console.log(loans)

  return (
    <div className='flex w-full justify-center items-center'>
      <main className='p-10'>
        <div className='flex flex-col justify-center items-center space-y-3'>
            <span className='font-bold text-4xl'>
                Available <span className='text-primaryLight'>Lender</span>
            </span>
            <span className='text-sm font-jakarta text-gray-500 font-medium'>Based on the information you provided, the following lenders should have a loan to meet your needs at LIFE UNIVERSITY</span>
        </div>
        <div className='my-5 grid grid-cols-2 gap-5'>
            {
                loans?.data?.length > 0 && loans?.data?.map((loan: any) => (
                    <LoanCard item={loan} />
                ))
            }

        </div>
            {   
                loans?.length === 0 && (
                    <div className='h-[50vh] w-full flex justify-center items-center flex-col space-y-4'>
                        <span className='font-jakarta font-semibold text-xl'>Sorry, There's no Loan for this institution</span>
                        <span className='font-jakarta font-bold text-primary text-xl'>DO NOT GIVE UP</span>
                    </div>
                )
            }
      </main>
    </div>
  )
}

export default Searches
