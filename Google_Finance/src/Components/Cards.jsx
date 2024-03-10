import {React,useState} from 'react'


function Cards({img,title,points,percentage,positive,}) {
  

  return (
    
    <div className='bg-white outline-blue-700 w-[12rem] h-[3rem] m-2 flex flex-row rounded-lg' >
      <img>{img}</img>
      <div className='flex flex-col pl-2'>
      <p className='font-bold w-[5.75rem]'>{title}</p>
      <p className='text-grey'>{points}</p>
      </div>
      <div className='flex flex-col pl-2'>
      <p className='text-green'>{percentage}</p>
      <p className='text-green-600'>{positive}</p>
      </div>
      
    </div>
  )
}

export default Cards