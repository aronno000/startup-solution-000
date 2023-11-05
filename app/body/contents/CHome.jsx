import React from 'react'
import CHero from './home/CHero'
import CSecondSec from './home/CSecondSec'

const CHome = () => {
  return (
    <>
    <CHero />
    <hr className='border-zinc-200 h-2' />
    <CSecondSec />
    <hr className='border-zinc-200 h-2' />
    </>
  )
}

export default CHome