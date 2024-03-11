import React from 'react'
import StockInfoCard from './StockInfoCard'
import Portfolio from './Portfolio'
import MarketTrend from './MarketTrend'

function Table() {
  return (
    <>
    <div className='mt-[4.5rem] ml-[10rem] '>
        <div className='flex flex-row m-2'>
    <p>You may be interested in</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
</div>
</div>
<div className='flex flex-row mr-[1rem]'>
  <div className='flex flex-col mt-[0.5rem] ml-[10rem] w-3/4'>
<StockInfoCard Companyticker="RCOM" bgcolor="red" CompanyName="Reliance Communications"CompanyPercentage="₹1.90" CompanyValue="-₹0.10" CompanyFall="5.00%" />
<StockInfoCard CompanyName="Axis Bank LTD."CompanyPercentage="₹1,111.00" CompanyValue="-₹14.00" CompanyFall="1.24%" />
<StockInfoCard CompanyName="Meta Platforms Inc"CompanyPercentage="$505.95"CompanyValue="-$6.24" CompanyFall="1.22%"  />
<StockInfoCard CompanyName="Maruti Suzuki India Ltd"CompanyPercentage="$175.35" CompanyValue="-$1.47" CompanyFall="0.83%"  />
<StockInfoCard CompanyName="Punjab National Bank"CompanyPercentage="$604.84" CompanyValue="-$3.69"CompanyFall="0.61%"  />
<StockInfoCard CompanyName="State Bank Of India"CompanyPercentage="$11,504.55" CompanyValue="-$62.50"CompanyFall="0.54%"  />
</div>
<div className='flex flex-col'>
<Portfolio/>
<MarketTrend Trend="Market indexes"/>

</div>
</div>
</>
  )
}

export default Table