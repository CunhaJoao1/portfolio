import React from 'react'
import Card from './card'
import jsonCards from "../../public/cards.json"
export default function Work() {
  return (
    <div className='w-full flex  justify-center flex-col items-center gap-8 '>
      <h2 className='text-4xl font-thin w-[55%] pb-8'>Projetos <span>Selecionados</span> </h2>
        {
          jsonCards.map((item, key)=>{
            return(
              <Card key={key} category={item.category} description={item.description} name={item.name} keyNumber={key} link={item.link}/>
            )
          })
        }
    </div>
  )
}
