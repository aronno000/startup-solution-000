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
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <NavBar onLinkClick={handleLinkClick} />
        <BodyContent contentId={selectedContent} />
    </div>
  )
}

export default SecondSec