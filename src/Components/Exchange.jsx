import React from 'react'
import Wallet from './Wallet'

function Exchange() {
  return (
    <div className=' w-full h-screen flex justify-center items-center '>
    <div className=' h-[600px] w-[600px] bg-blue-200
   mt-40 border rounded-2xl bg-gradient-to-r from-blue-400 to-violet-400 '>
      <div className='flex px-20 py-5 mb-[10px]'>
        <h1 className='mr-10 text-xl font-semibold text-gray-900 '>Swap</h1>
        <h2 className='text-xl font-semibold text-gray-900'>Bridge</h2>
      </div>

      <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border
      rounded-2xl flex flex-col'>
      <div className=' h-[60px] w-[340px] mx-auto mt-[10px]
      text-xl py-[5px]'>
      send</div>
      <div className='bg-red-300 h-[60px] w-[340px] mx-auto
      mt-[10px] font-semibold text-4xl flex justify-between'>
       <input className='bg-blue-300 h-[40px] w-[40px] mt-[5px]
      ml-[5px]'
      placeholder='0' type='text'  value='0'></input>
      <div className='bg-gray-300 h-[40px] w-[100px] text-[20px]
      flex justify-center items-center border rounded-xl mt-[10px] mr-[10px]' >
      opbnb
      </div>
      </div>
 </div>

 <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border
      mt-[20px] rounded-2xl'>
        <div className=' h-[60px] w-[340px] mx-auto mt-[10px]
      text-xl py-[10px]'>
      recieve</div>
      <div className='bg-red-300 h-[60px] w-[340px] mx-auto
      mt-[10px] font-semibold text-4xl flex  justify-between'>
      <input className='bg-blue-300 h-[40px] w-[40px] mt-[5px]
      ml-[5px]'
      placeholder='0' type='text'  value='0'></input>
      <div className='bg-gray-300 h-[40px] w-[100px] text-[20px]
      flex justify-center items-center border rounded-xl mt-[10px] mr-[10px]' >
       bsc
      </div>
      </div> 
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
