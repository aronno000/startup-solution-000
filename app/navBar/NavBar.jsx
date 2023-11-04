import React, {useState} from 'react'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onLinkClick(link);
  };


  return (
    <>
    <div
        onClick={() => handleLinkClick('home')}
        className={`flex flex-col items-center mx-2 p-5 rounded-md ${activeLink === 'home' ? 'bg-rose-700 shadow-rose-300' : 'bg-gradient-to-r from-[#3b82f6] to-[#dd2476]'} border-2 border-rose-300 hover:border-cyan-700 hover:bg-white
        cursor-pointer shadow-md shadow-cyan-700`}
      >
        <AiFillHome size={24} />
        <span>Home</span>
      </div>


      <div
        onClick={() => handleLinkClick('service')}
        className={`flex flex-col items-center mx-2 p-5 rounded-md ${activeLink === 'home' ? 'bg-rose-700 shadow-rose-300' : 'bg-gradient-to-r from-[#3b82f6] to-[#dd2476]'} border-2 border-rose-300 hover:border-cyan-700 hover:bg-white
        cursor-pointer shadow-md shadow-cyan-700`}
      >
        <FaUser size={24} />
        <span>SERVICE</span>
      </div>

      <div
        onClick={() => handleLinkClick('aboutUS')}
        className={`flex flex-col items-center mx-2 p-5 rounded-md ${activeLink === 'home' ? 'bg-rose-700 shadow-rose-300' : 'bg-gradient-to-r from-[#3b82f6] to-[#dd2476]'} border-2 border-rose-300 hover:border-cyan-700 hover:bg-white
        cursor-pointer shadow-md shadow-cyan-700`}
      >
        <FaUser size={24} />
        <span>ABOUT US</span>
      </div>

      <div
        onClick={() => handleLinkClick('ContactUS')}
        className={`flex flex-col items-center mx-2 p-5 rounded-md ${activeLink === 'home' ? 'bg-rose-700 shadow-rose-300' : 'bg-gradient-to-r from-[#3b82f6] to-[#dd2476]'} border-2 border-rose-300 hover:border-cyan-700 hover:bg-white
        cursor-pointer shadow-md shadow-cyan-700`}
      >
        <FaUser size={24} />
        <span>Contact US</span>
      </div>
      </>
  )
}

export default NavBar
