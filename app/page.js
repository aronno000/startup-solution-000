'use client';

import React, { useState } from 'react'
import NavBar from './navBar/NavBar'
import BodyContent from './body/BodyContent'

const SecondSec = () => {

  const [selectedContent, setSelectedContent] = useState('default'); // 'default' or an initial content identifier

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };


  return (
    <div>
        <NavBar onLinkClick={handleLinkClick} />
        <BodyContent contentId={selectedContent} />
    </div>
  )
}

export default SecondSec