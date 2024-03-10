import React from 'react';
import Cards from './Cards';
import Market from './Market';

function Theme() {
  return (
    <div className='bg-gray-200 w-screen h-48 relative'>
      <div  className='flex flex-row justify-start items-center ml-[13rem] mt-[1rem] cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
</svg>
       
      <Market name="Compare Market"/>
      <Market name="US"/>
      <Market name="India"/>
      <Market name="Europe"/>
      <Market name="Crypto"/>
      <Market name="Currencies"/>
      <Market name="Features"/>
      
      
      </div>

      <div className='flex flex-row justify-center items-center'>
        <Cards img="" title="Nifty" points="22,493" positive="+19.50" percentage="+0.087" />
        <Cards title="Sensex" points="74,119.39" positive="+33.40" percentage="+0.045" />
        <Cards title="Nifty Bank" points="47,835.80" positive="-129.50" percentage="-0.027" />
        <Cards title="Nifty IT" points="37,099.90" positive="98.70" percentage="+0.27" />
        <Cards className='w-[7rem]' title="S&P BSE" points="44,635.57" positive="+310.00" percentage="+0.70" />
      </div>
      <div className='flex items-center x justify-center p-4 m-4  '>
        <div className='relative border-gray-700'>
          <input
            className='flex items-center rounded-[5rem] justify-center pl-10 pr-4 w-[27rem] h-16 p-4 placeholder:text-left'
              
            
            placeholder='Search for stocks, ETFs & more '
            type='text'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Theme;
