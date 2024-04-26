import React from 'react'
import { SignupFormDemo } from './SignupFormDemo'
import Image from 'next/image'

const LandingSignIn = () => {
  return (
    <div className="bg-gray-400 flex min-h-screen w-full">
        <div className="w-1/3 relative z-10 bg-white p-6 flex shadow-2xl flex-col justify-center items-center">
        <h2 className="mt-8 text-neutral-800 py-4 text-center text-4xl font-bold tracking-tight">
  Welcome To <span className="text-purple-500 underline font-extrabold">MedManage</span>
</h2>

          <p className="mt-8 font-[500] text-lg text-gray-700 italic ">Empower your pharmacy with precision management through robust database solutions .</p>

          <Image src="/landing.svg" alt="Image" width={500} height={300} />
          
        </div>
        {/* Signup Form */}
        <div className="w-2/3 bg-gray-400 flex justify-center items-center">
          <SignupFormDemo />
        </div>

      </div>
  )
}

export default LandingSignIn