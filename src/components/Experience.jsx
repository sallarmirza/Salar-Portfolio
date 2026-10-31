import { motion, useReducedMotion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Experience() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="experience" className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto">
        
        <div className="relative mb-12 select-none overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            EXPERIENCE
          </span>
          <h2 className="relative z-10 font-bold text-[#f4f4f4] dark:text-[#111111] tracking-tight uppercase section-solid-xl">
            Experience
          </h2>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-white/[0.05] dark:border-black/[0.05]"
        >
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            <h3 className="t-heading text-[#f4f4f4] dark:text-[#111111]">
              Experience That<br />Builds Trust
            </h3>
            <div className="w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-sm relative grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/[0.03] dark:border-black/[0.03]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt=""
                role="presentation"
                loading="lazy"
                width="800"
                height="1067"
                className="w-full h-full object-cover transform scale-102 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent dark:from-[#f4f4f4]/10 pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full">
            {data.experience.map((e) => (
              <div
                key={e.company}
                className="flex flex-col sm:flex-row justify-between items-start py-10 gap-6 border-b border-white/[0.06] dark:border-black/[0.06]"
              >
                <div className="flex flex-col gap-1 max-w-xl">
                  <span className="t-title text-[#f4f4f4] dark:text-[#111111]">
                    {e.company}
                  </span>
                  <span className="t-sub text-[#888888] dark:text-[#555555]">
                    {e.role}
                  </span>
                  <p className="t-body text-[#888888] dark:text-[#555555] mt-4 max-w-lg">
                    {e.description}
                  </p>
                </div>
                <span className="t-sub text-[#f4f4f4] dark:text-[#111111] pt-0.5 whitespace-nowrap">
                  {e.duration}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}