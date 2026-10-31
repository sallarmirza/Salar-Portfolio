import { motion, useReducedMotion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const fade = (delay = 0, y = 20) => ({
    initial: shouldReduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 pt-32 pb-20 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center flex-1">

        <motion.h1
          {...fade(0, 30)}
          className="hero-title font-black uppercase text-[#f4f4f4] dark:text-[#111111] select-none tracking-tighter mt-12 mb-8 w-full text-left leading-[0.85] break-words"
        >
          {data.shortName.join(' ')}
        </motion.h1>

        <motion.div
          {...fade(0.18, 0)}
          className="w-full h-[1px] bg-white/[0.08] dark:bg-black/[0.08] mb-5"
        />

        <motion.div
          {...fade(0.28, 10)}
          className="hero-meta grid grid-cols-1 md:grid-cols-3 gap-6 text-[#888888] dark:text-[#555555] font-bold tracking-tight uppercase mb-16"
        >
          <div className="flex flex-col md:items-start text-left">
            <span className="leading-relaxed max-w-[240px] md:max-w-xs">
              {data.title.split(' · ').join(' & ')}
            </span>
          </div>
          <div className="flex flex-col md:items-center text-left md:text-center">
            <span>Based in {data.location}</span>
          </div>
          <div className="flex flex-col md:items-end text-left md:text-right">
            <span>Working Globally</span>
          </div>
        </motion.div>

        <motion.div
          {...fade(0.42, 10)}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto"
        >
          <span className="flex items-center gap-2.5 text-[10px] tracking-widest uppercase font-bold text-[#e0e0e0] dark:text-[#333333] px-4 py-2.5 bg-[#1a1a1a] dark:bg-[#e9e9e9] rounded-sm border border-white/[0.02] dark:border-black/[0.02] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
            Open to Work
          </span>
          <button
            onClick={() => scrollTo('projects')}
            className="text-[10px] tracking-widest uppercase font-bold text-[#111111] dark:text-[#f4f4f4] bg-[#f4f4f4] dark:bg-[#111111] px-6 py-3.5 rounded-sm hover:bg-white dark:hover:bg-[#1a1a1a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] active:scale-[0.98] transition-all duration-150 ease-out cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[10px] tracking-widest uppercase font-bold text-[#f4f4f4] dark:text-[#111111] border border-white/[0.25] dark:border-black/[0.25] px-6 py-3.5 rounded-sm hover:bg-white/[0.08] hover:border-white/60 dark:hover:bg-black/[0.08] dark:hover:border-black/60 active:scale-[0.98] transition-all duration-150 ease-out cursor-pointer"
          >
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  )
}
