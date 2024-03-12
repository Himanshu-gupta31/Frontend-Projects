import React from 'react';

function StockInfoCard({ CompanyName, CompanyPercentage, CompanyValue, CompanyFall,Companyticker,bgcolor }) {
  return (
    <>              
      <button className='bg-white border border-l-white border-r-white border-t-gray-400 border-b-gray-400 w-3/4 h-10 flex flex-col'>
        <div className='grid grid-cols-5 justify-between  mb-2 mt-2'>
          <div className=' w-[12rem] mr-[4rem] text-left'>
          {/* <button className={bgcolor}>{Companyticker}</button> */}
            <p>{CompanyName}</p>
          </div>
          <div>
            <p className='ml-24 mr-16'>{CompanyPercentage}</p>
          </div>
          <div className='ml-10 text-right'>
            <p>{CompanyValue}</p>
          </div>
          <div className='text-center'>
            <button className='bg-red-400 rounded-md pr-1 pl-1'>{CompanyFall}</button>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>

        </div>
      </button>
    </>
  );
}

export default StockInfoCard;
