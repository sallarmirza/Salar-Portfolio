import { motion, useReducedMotion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative mb-12 select-none overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            ABOUT
          </span>
          <h2 className="relative z-10 font-bold uppercase tracking-tight text-[#f4f4f4] dark:text-[#111111] section-solid-xl">
            About
          </h2>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mt-16 border-l border-white/[0.18] dark:border-black/[0.15] pl-6 md:pl-10"
        >
          {data.about.map((paragraph, index) => (
            <p
              key={index}
              className="t-body text-[#888888] dark:text-[#555555] mb-8 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}