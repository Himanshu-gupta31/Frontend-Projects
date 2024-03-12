import React from 'react'
import MarketTrendButton from './MarketTrendButton'

function MarketTrend() {
  return (
    <>
    <div className='w-[23rem] h-[10rem] border border-gray-300 mt-[1rem] rounded-lg'>
        <h2 className='mt-[0.5rem] ml-[1rem] mb-[0.5rem] '>Market Trends</h2>
        <MarketTrendButton Trend="Market indexes"/>
        <MarketTrendButton Trend="Most active"/>
        <MarketTrendButton Trend="Gainers"/>
        <MarketTrendButton Trend="Losers"/>
        <MarketTrendButton Trend="Climate leaders"/>
        <MarketTrendButton Trend="Cryto"/>
        <MarketTrendButton Trend="Currencies"/>

    </div>
    </>
  )
}

export default MarketTrend