import React from 'react';

function Market({ name }) {
  return (
    <>
      <div className='text-center ml-2 hover:bg-slate-100 pl-2 pr-2 mt-2'>
    
        <button className='rounded-lg p-2 '>{name}</button>
      </div>
    </>
  );
}

export default Market;
