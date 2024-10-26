'use client'

import { useLoan } from '@/stores/loan'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useRouter} from 'next/navigation'

const LoanFour = () => {
  const selection = useLoan((state) => state.selection)
  const setSelection = useLoan((state) => state.setSelection)
  const [universities, setUniversities] = useState<any>([])
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`http://localhost:4000/states/${selection?.state}/universities`)
      setUniversities(data?.data)
    }
    getData()
  }, [])

  const handleChange = (e: any) => {
    setSelection({
      "university": e.target.value || "None"
    })
  }
  
  const handleSubmit = () => {
    console.log('done')
    router.push('/loan/searches')
  }

  return (
    <>
    <span className='font-roboto font-semibold text-lg'>Choose a university?</span>
          <div className="relative w-full">
            <select onChange={handleChange} className="w-full p-3 pr-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
              <option>Select an option</option>
              {
                universities?.data?.map((university: any) => (
                  <option key={university.id} value={university.id}>{university.name}</option>
                ))
              }
            </select>
            <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
      </div>
            <button onClick={handleSubmit} className={`bg-primaryLight w-[50%]  rounded-full py-2 text-white font-semibold font-jakarta`}>
              Submit
            </button>
  </>
  )
}

export default LoanFour
