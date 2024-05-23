import React from 'react'
import Wallet from './Wallet'
import { useState } from 'react'

function Exchange() {

  const [inputValue, setInputValue] = useState('0');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (

 <div className='bg-slate-900 h-screen'>
   
 <div className=''>
 <h1 className='text-pink-500 flex justify-center text-4xl font-bold '>MonadDex</h1>
 <h1 className='text-white flex justify-center text-2xl font-bold mt-[20px] bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text'>
Prebuild interface by MonadStarter to save your time</h1>
 </div>

    <div className=' w-full h-screen flex justify-center items-center mt-[-80px]'>
    <div className=' h-[600px] w-[600px] bg-blue-200
   mt-40 border rounded-2xl bg-gradient-to-r from-blue-400 to-violet-400 '>
      <div className='flex px-20 py-5 mb-[10px]'>
        <h1 className='mr-10 text-xl font-semibold text-gray-900 '>Swap</h1>
        <h2 className='text-xl font-semibold text-gray-900'>Bridge</h2>
      </div>

      <div className='h-[150px] w-[400px] bg-black/0.5 mx-auto border
      rounded-2xl flex flex-col'>
      <div className=' h-[60px] w-[340px] mx-auto mt-[10px]
      text-xl py-[5px] text-black font-medium '>
      send</div>
      <div className='bg-blue-400 h-[60px] w-[340px] mx-auto
      mt-[10px] font-semibold text-4xl flex justify-between border-2 rounded-md'>
       <input className='bg-white h-[40px] w-[80px] mt-[7px] border rounded-md border-transparent
       ml-[5px] text-[20px]  border-none outline-none bg-blue-300 text-black'
      placeholder='0' type='number'  onChange={handleInputChange} value={inputValue}></input>
      <div className='bg-white h-[40px] w-[120px] text-[20px]
      flex justify-center items-center border rounded-xl mt-[10px] mr-[10px] bg-blue-300 text-black' >
         <select className='bg-transparent border  border-none outline-none  bg-blue-300 text-black'>
  <option value="1">Fuji  </option>
  <option value="2">BNB</option>
  <option value="4">Sepolia</option>
  <option value="5">Arbitrum</option>
  <option value="6">Base</option>
  <option value="7">Optimism</option>
  <option value="8">Matic</option>
</select>
      </div>
      </div>
 </div>

 <div className='h-[150px] w-[400px] bg-black/0.5 mx-auto border
      mt-[20px] rounded-2xl'>
        <div className=' h-[60px] w-[340px] mx-auto mt-[10px]
      text-xl py-[10px] text-black font-medium'>
      recieve</div>
      <div className='bg-blue-400 h-[60px] w-[340px] mx-auto
      mt-[10px] font-semibold text-4xl flex  justify-between border-2 rounded-md'>
      <input className='bg-white h-[40px] w-[80px] mt-[7px] border rounded-md border-transparent
      ml-[5px] text-[20px]  border-none outline-none bg-blue-300 text-black'
      placeholder='0' type='number'  value='0'></input>
      <div className='bg-white h-[40px] w-[120px] text-[20px]
      flex justify-center items-center border rounded-xl mt-[10px] mr-[10px] bg-blue-300 text-black' >
         <select className='bg-transparent border  border-none outline-none bg-blue-300 text-black'>
  <option value="1">BNB  </option>
  <option value="2">Fuji</option>
  <option value="4">Sepolia</option>
  <option value="5">Arbitrum</option>
  <option value="6">Base</option>
  <option value="7">Optimism</option>
  <option value="8">Matic</option>
</select>
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
      <span className='text-2xl font-semibold text-blue-900'> MonadDex</span></h1>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Exchange
