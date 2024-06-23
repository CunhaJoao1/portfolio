import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Profiles() {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='fixed right-0 h-screen flex items-center pr-8 z-0  '>
      <div className='gap-8  flex flex-col items-end'>
            
            <FaGithub  size={35} className='cursor-pointer hover:scale-110 transition-all duration-150 'onClick={() => handleButtonClick("https://github.com/cunhajoao1")} />
            <FaLinkedin size={35} className='cursor-pointer hover:scale-110 transition-all duration-150 'onClick={() => handleButtonClick("https://www.linkedin.com/in/cunhajoaovs/")}/>      
      </div>
    </div>
  )
}
