import { motion, useReducedMotion } from 'framer-motion'
import { data } from '../data/portfolio'

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Skills() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">

        <div className="relative mb-12 select-none overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            SKILLS
          </span>
          <h2 className="relative z-10 font-bold text-[#f4f4f4] dark:text-[#111111] tracking-tight uppercase section-solid-xl">
            Skills
          </h2>
        </div>

        <div className="flex flex-col pt-8 border-t border-white/[0.05] dark:border-black/[0.05]">
          {data.skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 lg:gap-10 py-8 border-b border-white/[0.05] dark:border-black/[0.05] last:border-b-0"
            >
              <div className="flex items-start pt-1">
                <span className="t-label text-[#555555] dark:text-[#999999]">
                  {group.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.div
                      key={s.name}
                      custom={shouldReduce ? 0 : i}
                      initial={shouldReduce ? false : 'hidden'}
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={cardVariants}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg
                        border border-white/[0.07] dark:border-black/[0.08]
                        bg-[#141414] dark:bg-[#ebebeb]"
                    >
                      <Icon size={15} className="text-[#666666] dark:text-[#888888] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13px] font-semibold tracking-tight text-[#d4d4d4] dark:text-[#222222] whitespace-nowrap">
                          {s.name}
                        </span>
                        <span className="text-[10px] font-semibold tracking-wide uppercase text-[#555555] dark:text-[#999999] whitespace-nowrap">
                          {s.sub}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
