import React from 'react'

function MarketTrend({Trend}) {
  return (
    <>
    <div className='w-[23rem] h-[10rem] border border-gray-300 mt-[1rem] rounded-lg'>
        <h2 className='mt-[0.5rem] ml-[1rem] mb-[0.5rem] '>Market Trends</h2>
        <button className='border border-gray-300 w-auto p-[0.4rem] rounded-2xl text-xs ml-[1rem]' >{Trend}</button>
    </div>
    </>
  )
}

export default MarketTrend