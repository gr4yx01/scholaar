'use client'

import LoanFour from '@/app/components/LoanFour'
import LoanOne from '@/app/components/LoanOne'
import LoanThree from '@/app/components/LoanThree'
import LoanTwo from '@/app/components/LoanTwo'
import Stepper from '@/app/components/Stepper'
import { useStep } from '@/stores/step'
import React, { useState } from 'react'

const currentState = [LoanOne, LoanTwo, LoanThree, LoanFour]

const Loan = () => {
  const step = useStep((state) => state.current)
  const setStep = useStep((state) => state.setStep)

  return (
    <div className='h-[70vh] w-full justify-center items-center flex flex-col space-y-8'>
      <span className='font-semibold text-2xl font-roboto'>Apply For Loan Now !!!</span>
      <Stepper currentStep={step}/>
      <main className='w-96 h-52 border rounded-lg p-3'>
        <div className='flex justify-center items-center h-full flex-col space-y-4'>
          {currentState[step - 1]()}
          <button onClick={() => setStep(step + 1)} className='bg-primaryLight w-[50%] rounded-full py-2 text-white font-semibold font-jakarta'>
            {
              step === currentState?.length ? 'Submit' : 'Next'
            }
          </button>
        </div>
      </main>
    </div>
  )
}

export default Loan
