import React from 'react'
import Wallet from './wallet'

function Exchange() {
  return (
    <div className=' w-full h-full flex justify-center items-center'>
    <div className=' h-[600px] w-[600px] bg-blue-200
   mt-40 border rounded-2xl'>
      <div className='flex px-20 py-5 mb-[10px]'>
        <h1 className='mr-10 text-xl font-semibold text-gray-900'>Swap</h1>
        <h2 className='text-xl font-semibold text-gray-900'>Bridge</h2>
      </div>
      <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border
      rounded-2xl'>
 </div>
 <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border
      mt-[20px] rounded-2xl'>
 </div>
    <div className='mx-auto w-[200px] h-[100px] mt-[20px] bg-transparent
     rounded-2xl flex items-center justify-center'>
      <Wallet/>
    </div>
    <div className='mx-auto mt-[20px] h-[40px] bg:transparent w-[400px]
    flex items-center justify-center  rounded-2xl'>
      <h1 className='text-2xl tracking-wide'>Powered by 
      <span className='text-2xl font-semibold '> Interllom</span></h1>
    </div>
    </div>
    </div>
  )
}

export default Exchange
