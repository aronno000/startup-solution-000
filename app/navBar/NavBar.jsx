import React, {useState} from 'react'
import { BsFillBriefcaseFill, BsFillSendFill } from "react-icons/bs";
import { FaPager, FaHome } from "react-icons/fa";


const NavBar = ({onLinkClick}) => {
    const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onLinkClick(link);
  };


  return (
      <div className='flex flex-row items-center bg-white rounded-xl px-3 py-3 '>

      <div
        onClick={() => handleLinkClick('home')}
        className={`border-2 shadow-md shadow-teal-500 flex flex-row items-center mx-2 p-2 rounded-md ${activeLink === 'home' ? 'bg-zinc-200 border-teal-700' : 'bg-teal-700 border-teal-700'} cursor-pointer`}
      >
        <FaHome size={24} />
        <span className='ml-2'>Home</span>
      </div>


      <div
        onClick={() => handleLinkClick('service')}
        className={`border-2 shadow-md shadow-teal-500 flex flex-row items-center mx-2 p-2 rounded-md ${activeLink === 'service' ? 'bg-zinc-200 border-teal-700' : 'bg-teal-700 border-teal-700'} cursor-pointer`}
      >
        <BsFillBriefcaseFill size={24} />
        <span className='ml-2'>SERVICE</span>
      </div>

      <div
        onClick={() => handleLinkClick('aboutUS')}
        className={`border-2 shadow-md shadow-teal-500 flex flex-row items-center mx-2 p-2 rounded-md ${activeLink === 'aboutUS' ? 'bg-zinc-200 border-teal-700' : 'bg-teal-700 border-teal-700'} cursor-pointer`}
      >
        <FaPager size={24} />
        <span className='ml-2'>ABOUT US</span>
      </div>

      <div
        onClick={() => handleLinkClick('ContactUS')}
        className={`border-2 shadow-md shadow-teal-500 flex flex-row items-center mx-2 p-2 rounded-md ${activeLink === 'ContactUS' ? 'bg-zinc-200 border-teal-700' : 'bg-teal-700 border-teal-700'} cursor-pointer`}
      >
        <BsFillSendFill size={24} />
        <span className='ml-2'>Contact US</span>
      </div>
      </div>
  )
}

export default NavBar
