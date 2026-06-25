import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

const SCROLL_DELAY_MS = 50 

export default function App() {
  // Initialize state directly from localStorage so there's no layout flash on load
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') === 'dark'
    }
    return false
  })
  
  const location = useLocation()

  // Synced class inject + localStorage persistence
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  // Smooth hash routing listener
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
    /* Added transition-colors duration-500 globally here to smooth out the theme shift */
    <div className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] transition-colors duration-500">
      <Navbar dark={dark} setDark={setDark} />
      
      <Hero />
      <div className="section-divider" />
      
      <About />
      <div className="section-divider" />
      
      {/* Passing down the dark state helps internal compound calculations if needed */}
      <Projects dark={dark} />
      <div className="section-divider" />
      
      <Experience />
      <div className="section-divider" />
      
      <Skills />
      <div className="section-divider" />
      
      <Contact />
    </div>
  )
}