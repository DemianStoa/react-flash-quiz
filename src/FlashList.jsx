import React from 'react'
import FlashCard from './FlashCard'

const FlashList = ( {data} ) => {

  return (
    <div className='list'>

        {data?.map((item, index) => 
            <FlashCard key={index} question={item}/>
        )}
        
        
    </div>
  )
}

export default FlashList