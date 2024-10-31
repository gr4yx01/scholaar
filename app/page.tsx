'use client'

import Image from "next/image";
import Header from "./components/Header";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cookie] = useCookies(['token'])
  const router = useRouter()

  const handleSubmit = () => {
    if(cookie?.token) {
      router.push('/scholarship/apply')
    } else {
      router.push('/auth/login')
    }
  }

  return (
      <section className="w-full flex h-[70vh] justify-center items-center space-x-16">
        <div className="gap-4">
          <div className="flex flex-col items-center justify-center font-roboto gap-2">
            <span className="font-semibold text-5xl">Financial Aid and Scholarship</span>
            <span className="text-primary text-3xl font-semibold">For International Students</span>
            <span className="text-gray-500">Find a scholarship or loan tosupport your international education.</span>
          </div>
          <div className="flex w-full justify-center pt-5">
            <button onClick={handleSubmit} className='bg-primaryLight text-white p-2 flex justify-center items-center font-jakarta font-medium rounded-md px-4'>Find Scholarships</button>
          </div>
        </div>
      </section>
  )
}
