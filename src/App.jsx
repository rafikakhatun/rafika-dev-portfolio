import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CursorTrail from './components/CursorTrail'
import About from './sections/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorTrail />
      <Navbar />
      <Hero />
      <About/>
    </>
  )
}

export default App