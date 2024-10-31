'use client'
import { useStep } from '@/stores/step'
import React, { useState } from 'react'

const Stepper = ({ currentStep }: { currentStep: number }) => {
    const steps = [1, 2, 3, 4]
    const setStep = useStep((state) => state.setStep)

  return (
    <div className='flex items-center'>
        {
            steps.map((step, index) => (
                <>
                    <button key={step} onClick={() => setStep(index + 1)} className={`w-10 h-10 flex justify-center items-center rounded-full border ${step == currentStep ? "bg-primary text-white" : ""}`}>
                        <span className='font-roboto font-bold'>{step}</span>
                    </button>
                    {  
                        step !== steps.length && <span className='w-16 h-[1px] bg-gray-400'/>
                    }
                </>
            ))
        }
    </div>
  )
}

export default Stepper
