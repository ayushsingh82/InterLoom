import React from 'react'
import { Link } from 'react-router-dom'
import Wallet from './Wallet'

const Home = () => {
  return (
    <div className='flex flex-col  items-center bg-slate-900  '>
    <h1 className='text-4xl font-semibold mt-[40px] text-pink-500'>Starter kit to build future on Monad </h1>
    <h3 className='mt-[20px] text-white text-xl'>Monad is a decentralized , developer-forward Layer1 smart contract platform
    <br/> that ushers in a new paradigm of possibility through pipelined execution of
    <br/> Ethereum Transactions</h3>
    <button className='mt-[20px] border-2 border-white text-white px-[10px] 
    py-[10px] font-medium text-xl bg-pink-500 rounded-lg mx-auto'>Join the community</button>
 
    <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div>
    <h1 className='text-center font-medium text-3xl text-pink-500'>Decentralization Meets Scale</h1>
    <p className='mt-[20px] text-lg'>Monad supports 10,000 transactions per second, significantly increasing throughput
    <br/> capabilities and opening doors for distributed applications--even those with greater complexity
    <br/> and higher usage--to run in a decentralized manner.</p>
    </div>
    <div>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/6480e2eb60a636267f069f16_autonomy-collage-2.png' alt='image'/>
    </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div className='order-2 md:order-1'>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa2430_speed-comp-collage-2.png' alt='image'/>
    </div>
    <div className='order-1 md:order-2'>
    <h1 className='text-center text-3xl font-semibold text-pink-500'>Superscalar Architecture</h1>
    <p className='mt-[20px] text-lg '>Existing blockchains are extremely slow by modern computing standards. Monad is built with
    <br/> performance in mind, bridging the gap between decentralized and traditional platforms through 
    <br/>superscalar, pipelined execution and optimized architecture.</p>
    </div>
    </div>

    </div>

    </div>
  )
}

export default Home

// <h1 className='text-3xl font-semibold mt-[40px] text-white'>A platform powered by Binance blockchain </h1>
// <p className='text-xl text-white mt-[40px]'> Transfering assests from bscp to opbnb & vice-versa</p>
// <Link to={'/exchange'}>
// <button className='border border-2 rounded-xl px-[10px] py-[10px] mt-[10px] bg-blue-400
// font-medium'>Interloom</button>
// </Link>

// <p className='mt-[60px] text-xl text-white'> A nft gaming platform</p>
// <Link to={'/nft'}>
// <button className='border border-2 rounded-xl px-[10px] py-[10px] mt-[10px] bg-blue-400
// font-medium'>NFT Game</button>
// </Link>
