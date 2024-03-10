import React from 'react'

function StockInfoCard({CompanyName,CompanyPercentage,CompanyValue,CompanyFall}) {
  return (
    <>
    <button className='bg-white border border-l-white border-r-white border-t-gray-400  border-b-gray-400 w-1/2 h-10 flex flex-col  '>
  <div className='grid grid-cols-4 justify-between mb-2 mt-2'>
    
   <div>
    <p>{CompanyName}</p>
    </div>
    <div>
    <p>{CompanyPercentage}</p>
   </div>
   <div >
    <p>{CompanyValue}</p>
   </div>
   <div >
    <button className='bg-red-400 rounded-[1rem] pr-1 pl-1 text-right'>{CompanyFall}</button>
    </div> 
    </div>
    </button>
    </>
  )
}

export default StockInfoCard