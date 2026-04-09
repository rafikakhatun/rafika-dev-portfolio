import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CursorTrail from './components/CursorTrail'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import MusicPlayer from './components/MusicPlayer'
import { Toaster } from "react-hot-toast";
import Lenis from "lenis";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Toaster position="top-right" />
          <CursorTrail />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
          <MusicPlayer />
        </>
      )}
    </>
  );
}

export default App