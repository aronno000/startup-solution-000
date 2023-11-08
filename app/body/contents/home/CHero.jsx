import TypingAnimation from '@/app/TypingAnimation'
import React from 'react'

const CHero = () => {
  return (
    <div className={`bg-[url('/hero.png')] bg-cover bg-no-repeat h-screen`}>
      <div className='text-zinc-100 w-[39pc] mx-56 pt-52'>
        <TypingAnimation className='text-[6pc] font-bold' text="Relaxar City" />
        <p className='text-[3pc] italic font-semibold'>A new way to get help for your mental health</p>
      </div>
    </div>
  )
}

export default CHero