import React from 'react'
import './index.css'

import Wallet from './Components/Wallet'

import Exchange from './Components/Exchange'


import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'viem/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'ae8bdd8f98e90048f198239d6cc99871'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <>
    <div className='bg-black '>
      <WagmiConfig config={wagmiConfig}>
       
      <main/>
  
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
      </>
  )
}



export default App
