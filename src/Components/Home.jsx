import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>A platform powered by Binance blockchain </h1>
        <p> A platformto transfer assests from bscp to opbnb & vice-versa</p>
        <Link to={'/exchange'}>
        <button>Interloom</button>
        </Link>
        
        <p> A nft gaming platform</p>
    </div>
  )
}

export default Home
