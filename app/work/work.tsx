import React from 'react'
import Card from './card'
import jsonCards from "../../public/cards.json"
export default function Work() {
  return (
    <div className='w-full flex  justify-center flex-col items-center gap-8 pt-40'>
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
