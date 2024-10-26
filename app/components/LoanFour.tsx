import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const LoanFour = () => {
  return (
    <>
    <span className='font-roboto font-semibold text-lg'>Choose a university?</span>
          <div className="relative w-full">
            <select className="w-full p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
              <option>Select an option</option>
              <option>Hawaii</option>
              <option>Michigan</option>
            </select>
            <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
      </div>
  </>
  )
}

export default LoanFour
