import React from 'react'

const CSecondSec = () => {
  return (
    <div className={`bg-[url('/secondSec.png')] bg-cover bg-no-repeat h-screen`}>
    <div className='text-zinc-100 flex flex-col text-left ml-[50vw] text-[2pc] pt-10'>
        <div className="">
          <h2 className='text-[6pc] font-extrabold'>Problem</h2>
          <p>Mental health is a growing problem in the world today.</p>
        </div>


        <div className="">
          <h2 className='text-[6pc] font-extrabold'>Statistics</h2>
          <p>Nearly 17% of adults in Bangladesh are suffering from mental health issues, where 16.8% are man and 17 % are woman, and among them 92.3% do not seek medical attention.</p>
        </div>


        <div className="">
          <h2 className='text-[6pc] font-extrabold'>Impact</h2>
          <p>Mental illness can have a significant impact on a person(s) life, including their ability to work, go to school, and maintain relationships.</p>
        </div>
      </div>
    </div>
  )
}

export default CSecondSec