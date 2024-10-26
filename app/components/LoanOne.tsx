'use client'

import { useLoan } from '@/stores/loan'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const LoanOne = () => {
  const setSelection = useLoan((state) => state.setSelection)
  const selection = useLoan((state) => state.selection)
  const [isNigerian, setIsNigerian] = useState(selection["Are you a citizen of Nigeria?"])

  const handleChange = (e: any) => {
    setIsNigerian(e.target.value)
    setSelection({
      "Are you a citizen of Nigeria?": e.target.value
    })
  }

  return (
    <>
      <span className='font-roboto font-semibold text-lg'>Are you a citizen of Nigeria?</span>
            <div className="relative w-full">
              <select onChange={handleChange} className="w-full p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none" value={isNigerian}>
                <option>Select an option</option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
              <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
    </>
  )
}

export default LoanOne
