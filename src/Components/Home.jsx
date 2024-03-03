import React from 'react'
import { Link } from 'react-router-dom'
import Wallet from './Wallet'

const Home = () => {
  return (
    <div className='flex flex-col  items-center bg-slate-900 h-screen'>
       <h1 className='text-3xl font-semibold mt-[40px] text-white'>A platform powered by Binance blockchain </h1>
        <p className='text-xl text-white mt-[40px]'> Transfering assests from bscp to opbnb & vice-versa</p>
        <Link to={'/exchange'}>
        <button className='border border-2 rounded-xl px-[10px] py-[10px] mt-[10px] bg-blue-400
        font-medium'>Interloom</button>
        </Link>
        
        <p className='mt-[60px] text-xl text-white'> A nft gaming platform</p>
        <Link to={'/nft'}>
        <button className='border border-2 rounded-xl px-[10px] py-[10px] mt-[10px] bg-blue-400
        font-medium'>NFT Game</button>
        </Link>

    </div>
  )
}

export default Home
