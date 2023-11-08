'use client';

import React, { useState } from 'react'
import NavBar from './navBar/NavBar'
import BodyContent from './body/BodyContent'
import Image from 'next/image';
import MNavBar from './navBar/MNavBar';

const SecondSec = () => {

  const [selectedContent, setSelectedContent] = useState('default'); // 'default' or an initial content identifier

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };


  return (
    <>
    <div>
        <div className='sm:hidden md:hidden xl:block 2xl:block 3xl:block 4xl:block flex justify-around items-center px-10 py-2 sticky top-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border-b-4 border-indigo-300'>
          
    <div className=''>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <NavBar onLinkClick={handleLinkClick} />
    </div>
          <MNavBar className="" />
        </div>
        <BodyContent contentId={selectedContent} />
    </div>
  </>
  )
}

export default SecondSec