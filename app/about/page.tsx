import Image from 'next/image'
import React from 'react'
import euNaRua from "../../assets/eu na rua.jpg"
import euMaraca from "../../assets/eu maraca.jpg"
import euEscutura from "../../assets/eu Escutura.jpg"
export default function page() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-white max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">UM POUCO SOBRE MIM</h2>
          <p className="text-2xl font-thin">
            Eu sou Desenvolvedor e estudante de Engenharia de Software. Tenho 22 anos, e sou um <span>APAIXONADO</span>  por futebol, <span>flamenguista</span>  desde criança. Amo a arte em geral, já fui <span>músico</span> , fiz <span>escutura</span>. E sempre que posso faço passeios ao Ar Livre
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="relative w-full h-64">
              <Image 
                src={euNaRua}
                alt=''
                className='w-[280px] h-[408px] rounded-xl object-cover'>
              </Image>              
          </div>

          <div className="relative w-full h-64">
          <Image 
                src={euMaraca}
                alt=''
                className='w-[280px] h-[408px] rounded-xl object-cover'>
              </Image> 
          </div>

          <div className="relative w-full h-64">
          <Image 
                src={euEscutura}
                alt=''
                className='w-[280px] h-[408px] rounded-xl object-cover'>
              </Image> 
          </div>

        </div>
      </div>
    </div>
  )
}

{/* <div className='w-[280px] h-[408px] bg-gray-300 rounded-xl'></div> */}