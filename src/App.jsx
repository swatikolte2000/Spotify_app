import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <div  className='h-screen  bg-black'>
      <div className='h-[90%] flex'>
       <Sidebar/>
      </div>
    
    </div>
  )
}

export default App
