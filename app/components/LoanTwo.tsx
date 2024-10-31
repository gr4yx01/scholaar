'use client'
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import axios from 'axios'
import useSWR from 'swr'
import { useLoan } from '@/stores/loan'

const LoanTwo = () => {
  const countries = useLoan((state) => state.countries)
  const selection = useLoan((state) => state.selection)
  const setSelection = useLoan((state) => state.setSelection)

  const handleChange = (e: any) => {
    setSelection({
      "country": e.target.value
    })
  }

  return (
    <>
      <span className='font-roboto font-semibold text-lg'>Choose a school country?</span>
            <div className="relative w-full">
              <select defaultValue={selection?.country} onChange={handleChange}  className="w-full p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
                <option>Select an option</option>
                {
                  countries?.data?.map((country: any) => (
                    <option value={country.id} key={country.id}>{country.name}</option>
                  ))
                }
              </select>
              <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
    </>
  )
}

export default LoanTwo
