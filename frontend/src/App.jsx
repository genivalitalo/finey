import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import Navbar from './components/NavBar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3x1 font-bold'>Olá Mundo</h1>
      <Navbar />
    </>
  )
}

export default App
