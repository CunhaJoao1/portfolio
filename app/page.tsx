import React, { useEffect } from 'react'
import Work from './work/work'
import About from './about/about'


export default function Home() {

  return (
    <main className=''>
      <div className='w-full  items-center flex justify-center h-screen' id='home'>
        <h1 className='text-4xl font-thin text-center px-[10%] text-[#E3E4E6]'>Eu sou Desenvolvedor <span>Backend</span> com foco em NodeJS, Desenvolvedor <span>RPA</span> com UiPath e especialista em <span>Chatbot</span> com o IBM Watson Assitant</h1>
      </div>
      
      <div id='work'>
        <Work/>
      </div>
      
      <div id='about'>
        <About/>
      </div>  
    </main>
  )
}


