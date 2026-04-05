import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CursorTrail from './components/CursorTrail'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorTrail />
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Certificates/>
    </>
  )
}

export default App