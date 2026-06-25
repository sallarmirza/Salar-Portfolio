import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

const SCROLL_DELAY_MS = 50 // wait for route paint before scrolling

export default function App() {
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const id = location.pathname === '/' ? null : location.pathname.slice(1)
    const timer = setTimeout(() => {
      if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }, SCROLL_DELAY_MS)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Contact />
    </div>
  )
}