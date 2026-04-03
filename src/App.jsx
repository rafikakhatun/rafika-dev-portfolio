import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CursorTrail from './components/CursorTrail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorTrail />
      <Navbar />
      <Hero />
    </>
  )
}

export default App