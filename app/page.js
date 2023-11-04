'use client';

import React, { useState } from 'react'
import NavBar from './navBar/NavBar'
import BodyContent from './body/BodyContent'
import Image from 'next/image';

const SecondSec = () => {

  const [selectedContent, setSelectedContent] = useState('default'); // 'default' or an initial content identifier

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };


  return (
    <div>
        <div className='flex flex-row items-center justify-around py-3 bg-zinc-300'>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <NavBar onLinkClick={handleLinkClick} />
        </div>
        <BodyContent contentId={selectedContent} />
    </div>
  )
}

export default SecondSec