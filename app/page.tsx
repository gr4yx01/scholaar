import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
      <section className="w-full flex h-[70vh] justify-center items-center space-x-16">
        <div className="gap-4">
          <div className="flex flex-col items-center justify-center font-roboto gap-2">
            <span className="font-semibold text-5xl">Financial Aid and Scholarship</span>
            <span className="text-primary text-3xl font-semibold">For International Students</span>
            <span className="text-gray-500">Find a scholarship or loan to support your international education.</span>
          </div>
          <div className="flex w-full justify-center pt-5">
            <button className='bg-primaryLight text-white p-2 flex justify-center items-center font-jakarta font-medium rounded-md px-4'>Find Scholarships</button>
          </div>
        </div>
      </section>
  )
}
