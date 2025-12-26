import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import BoxGreeting from './components/BoxGreeting/BoxGreeting'
function App() {

  return (
    <div className='mx-62.5'>
      <Header/>
      
      <BoxGreeting/>
    </div>
  )
}

export default App
