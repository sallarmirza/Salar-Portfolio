import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { data } from '../data/portfolio'

const NAV_SECTIONS = ['about', 'projects', 'experience', 'skills', 'contact']

export default function Navbar({ dark, setDark }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = NAV_SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 md:px-16 h-[84px] transition-all duration-500 ${
        isScrolled
          ? 'bg-[#111111]/60 dark:bg-[#f4f4f4]/70 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)] dark:shadow-[0_1px_0_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#111111]/80 to-transparent dark:from-[#f4f4f4]/80 opacity-40 h-[140px]" />

        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          className="text-[15px] font-bold tracking-tight text-[#f4f4f4] dark:text-[#111111] shrink-0 cursor-pointer hover:opacity-70 transition-opacity duration-200"
        >
          {data.name}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 justify-between max-w-[55%] mx-auto px-4">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section}
              to={`/${section}`}
              className={`relative text-[14px] font-medium capitalize tracking-tight text-[#f4f4f4] dark:text-[#111111] transition-all duration-200 px-2 group
                ${activeSection === section ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
            >
              {section}
              <span className={`absolute -bottom-1 left-2 right-2 h-[1px] bg-current transition-all duration-300 origin-left
                ${activeSection === section ? 'scale-x-100 opacity-60' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-30'}`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="text-[#f4f4f4] dark:text-[#111111] opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer p-1.5 shrink-0"
          >
            {dark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden text-[#f4f4f4] dark:text-[#111111] opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer p-1.5"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111] dark:bg-[#f4f4f4] flex flex-col items-center justify-center gap-10 md:hidden">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section}
              to={`/${section}`}
              onClick={() => setMenuOpen(false)}
              className={`text-[28px] font-bold capitalize tracking-tight transition-opacity duration-200
                text-[#f4f4f4] dark:text-[#111111]
                ${activeSection === section ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
