'use client' 
import React from 'react'
import image from "../../assets/site.png"
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";


interface cardProps {
  name: string,
  description: string,
  category: string
  keyNumber: number,
  link: string
}

export default function Card(props: cardProps) {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className={`flex items-end w-[55%] gap-8 ${props.keyNumber % 2 != 0 ? 'flex-row-reverse':''}`} >
      <Image 
        src={image}
        width={500}
        height={500} alt={''}
        />

        <div className=' flex flex-col gap-4'>
          <h5>{props.name}</h5>
          <p className='text-2xl font-thin text-[#E3E4E6]'>{props.description}</p>
          <div className='flex flex-col '>
            <span className='font-thin text-sm'>{props.category}</span>
            <button className='border h-10 rounded-full hover:w-[15rem] transition-all duration-150 w-[9rem] px-2 mt-4 flex items-center justify-around'
            onClick={() => handleButtonClick(props.link)}
            >Ver trabalho <IoIosArrowForward className='mt-1'/> </button>
          </div>
        </div>
    </div>
  )
}
