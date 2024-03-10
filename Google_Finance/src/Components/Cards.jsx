import {React,useState} from 'react'


function Cards({title,points,percentage,positive,}) {
  
 const textcolor=positive>0 ?'text-green-600':'text-red-400'
 const background=positive>0 ? 'bg-green-300': 'bg-red-300'
 const arrow=positive>0 ? 'rotate-0':'rotate-180'
  return (
    
    <div className='bg-white outline-blue-700 w-[13rem] h-[3rem] m-2 flex flex-row rounded-lg' >
      <div className='mt-2 w-6 h-7 ml-1'>
        <div className={arrow}>
      <div className={background}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>
</div>
</div>
</div>

      <div className='flex flex-col pl-2'>
      <p className='font-bold w-[5.75rem]'>{title}</p>
      <p className='text-grey'>{points}</p>
      </div>
      <div className='flex flex-col pl-2'>
      <p className={textcolor}>{percentage}</p>
      <p className={textcolor}>{positive}</p>
      </div>
      
    </div>
  )
}

export default Cards