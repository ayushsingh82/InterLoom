import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import NFT from './Components/NFT.jsx'
import Exchange from './Components/Exchange.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'



// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>, 
//     children:[
//       {
//         paths:'/',
//         element:<Home/>
//       },
//       {
//         path:'/nft',
//         element:<NFT/>
//       },
//       {
//         path:'/exchange',
//         element:<Exchange/>
//       },
//     ]

//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route >
   <Route path='/' element={<Home/>}/>
   <Route path='/nft' element={<NFT/>}/>
   <Route path='/exchange' element={<Exchange/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
