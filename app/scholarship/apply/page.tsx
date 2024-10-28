'use client'

import React, { useEffect, useState, CSSProperties } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import majors from '@/data/major.json'
import axios from 'axios'
import { useScholarship } from '@/stores/scholarship'
import { useRouter } from 'next/navigation'
import ClipLoader from "react-spinners/ClipLoader";
import { DotLoader } from 'react-spinners'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Scholarship = () => {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState<any>([])
    const setScholarships = useScholarship((state) => state.setScholarships)
    const [term, setTerm] = useState('')
    const [query, setQuery] = useState({
        major: '',
        country: ''
    })
    const router = useRouter()

    useEffect(() => {
        const getCountries = async () => {
            const countries = await axios.get('http://localhost:4000/countries')
            setCountries(countries?.data)
        }

        getCountries()
    }, [])

    const handleSubmit = async () => {
      setLoading(true)
        if(term) {
            const data = await axios.post(`http://localhost:4000/scholarships/search`, {
                name: term
            })

            setScholarships(data?.data)
        } else if(query?.major || query?.country) {
            const data = await axios.post(`http://localhost:4000/scholarships/query`, {
                major: query?.major,
                country: query?.country
            })
            setScholarships(data?.data)
        }
        setLoading(false)
        router.push('/scholarship/searches')
    }


  return (
    <div className='h-[70vh] w-full justify-center items-center flex flex-col space-y-8'>
      <span className='font-semibold text-3xl font-roboto'>Search for {" "}
        <span className='text-primary'>Scholarship</span></span>
      <main className='w-96 h-fit border rounded-lg p-3 flex justify-center items-center flex-col space-y-4'>
        {/* <div className='flex justify-center items-center h-full flex-col space-y-4'>? */}
            <div className='space-y-2'>
              <label htmlFor='name' className='font-roboto font-medium text-gray-500'>Search by name</label>
              <input type='text' id='name' onChange={(e) => setTerm(e.target.value)} placeholder='example@gmail.com' className='text-black outline-none w-full p-2 border-gray-500 border rounded-md' />
            </div>
            <div className='flex w-full justify-center items-center gap-2'>
                <div className='h-[1px] w-[80%] bg-gray-400' />
                    <span>Or</span>
                <div className='h-[1px] w-[80%] bg-gray-400'/>
            </div>
            <div className='space-y-3 w-full px-2'>
                <div className='space-y-2'>
                  <label htmlFor='email' className='font-roboto font-medium text-gray-500'>What are you studying?</label>
                  <div className="relative w-full">
                    <select onChange={(e) => setQuery({
                        ...query, major: e.target.value
                    })} className="w-full p-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
                      <option>Select an option</option>
                      {
                        majors?.map((major) => (
                            <option value={major?.name}>{major?.name}</option>
                        ))
                      }
                    </select>
                    <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
                </div>
                <div className='space-y-2'>
                    <label htmlFor='email' className='font-roboto font-medium text-gray-500'>Which is your country of interest?</label>
                <div className="relative w-full">
                    <select onChange={(e) => setQuery({
                        ...query, country: e.target.value
                    })} className="w-full p-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none">
                      <option>Select an option</option>
                      {
                        countries?.data?.map((country: any) => (
                            <option value={country?.name}>{country?.name}</option>
                        ))
                      }
                    </select>
                    <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
                </div>
            </div>
          <button onClick={handleSubmit} className={`bg-primaryLight w-[50%]  rounded-full py-2 text-white font-semibold font-jakarta`}>
            {
              loading ? (
                <DotLoader
                  color={'#fff'}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <span>Search</span>
              )
            }
          </button>
        {/* </div> */}
      </main>
    </div>
  )
}

export default Scholarship
