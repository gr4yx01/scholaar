'use client'

import { useLoan } from '@/stores/loan'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const LoanThree = () => {
  const selection = useLoan((state) => state.selection)
  const setSelection = useLoan((state) => state.setSelection)
  const [states, setStates] = useState<any>([])
  useEffect(() => {
    const getCountryState = async () => {
      const data = await axios.get(`http://localhost:4000/countries/${selection.country}/states`)
      setStates(data.data)
    }

    getCountryState()
  }, [])

  const handleChange = (e: any) => {
    setSelection({
      "state": e.target.value
    })
  }

  return (
    <>
      <span className='font-roboto font-semibold text-lg'>Choose a state?</span>
            <div className="relative w-full">
              <select defaultValue={selection?.state} onChange={handleChange} className="w-full p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
                <option>Select an option</option>
                {
                  states?.data?.map((state: any) => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                  ))
                }
              </select>
              <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
    </>
  )
}

export default LoanThree
