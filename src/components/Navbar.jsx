import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/portfolio'

export default function Navbar({ dark, setDark }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 md:px-16 h-[84px] transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#111111]/40 dark:bg-[#f4f4f4]/40 backdrop-blur-[6px] shadow-[0_1px_30px_rgba(0,0,0,0.03)]' 
        : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#111111]/80 to-transparent dark:from-[#f4f4f4]/80 opacity-40 h-[140px]" />
      
      <button
        onClick={scrollToTop}
        className="text-[15px] font-bold tracking-tight text-[#f4f4f4] dark:text-[#111111] shrink-0 cursor-pointer hover:opacity-70 transition-opacity duration-200"
      >
        {data.name}
      </button>

      <div className="hidden md:flex flex-1 justify-between max-w-[55%] mx-auto px-4">
        {['about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
          <Link
            key={section}
            to={`/${section}`}
            className="text-[14px] font-medium capitalize tracking-tight text-[#f4f4f4] dark:text-[#111111] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200 px-2"
          >
            {section}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        className="text-[20px] text-[#f4f4f4] dark:text-[#111111] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer p-1 shrink-0"
      >
        {dark ? '☀' : '☽'}
      </button>
    </nav>
  )
}