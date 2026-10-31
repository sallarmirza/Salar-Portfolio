import { useState } from "react";
import { motion, useReducedMotion } from 'framer-motion'
import { data } from "../data/portfolio";
import ProjectModal from "./ProjectModel";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative mb-12 select-none overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bold text-[#f4f4f4] dark:text-[#111111] tracking-tight uppercase section-solid-xl">
            Projects
          </h2>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-4 pt-8 border-t border-white/[0.05] dark:border-black/[0.05]"
        >
          {data.projects.map((p, index) => {
            const colSpan = p.gridSpan || "md:col-span-6";
            const isTall = colSpan.includes("row-span-2");
            const isFullWidth = colSpan.includes("col-span-12");
            const isWide = colSpan.includes("col-span-7");
            const lineClamp = isTall ? "line-clamp-4" : isWide ? "line-clamp-1" : "line-clamp-2";
            const maxTags = isTall || isWide ? 4 : isFullWidth ? 5 : 2;

            return (
              <button
                key={p.name}
                onClick={() => setSelected({ ...p, index })}
                aria-label={`View ${p.name} project`}
                className={`${colSpan} group relative overflow-hidden rounded-xl
                  border border-white/[0.06] dark:border-black/[0.06]
                  flex flex-col justify-end p-6 text-left
                  bg-[#131313] dark:bg-[#e6e6e6]
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:border-white/[0.22] dark:hover:border-black/[0.22]
                  hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 dark:focus-visible:ring-black/40
                  cursor-pointer`}
              >
                {p.image && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <img
                      src={p.image}
                      alt=""
                      role="presentation"
                      loading="lazy"
                      width="800"
                      height="560"
                      className="w-full h-full object-cover
                        opacity-25 dark:opacity-20
                        brightness-[0.4] dark:brightness-[0.95]
                        saturate-50 dark:saturate-70
                        transition-all duration-700 ease-out
                        scale-100 group-hover:scale-[1.03]
                        group-hover:opacity-100 dark:group-hover:opacity-100
                        group-hover:brightness-100 dark:group-hover:brightness-100
                        group-hover:saturate-100"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent dark:from-[#f4f4f4] dark:via-[#f4f4f4]/40 pointer-events-none z-10 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-40 dark:group-hover:opacity-20" />

                <span className="absolute top-5 right-5 t-tag text-[#444] dark:text-[#b5b5b5] z-20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute top-4 left-4 z-20
                  t-tag text-transparent
                  border border-transparent
                  px-3 py-1.5 rounded-sm
                  translate-y-1 group-hover:translate-y-0
                  group-hover:text-white/70 dark:group-hover:text-black/60
                  group-hover:border-white/25 dark:group-hover:border-black/20
                  group-hover:bg-black/30 dark:group-hover:bg-white/25
                  backdrop-blur-sm
                  transition-all duration-300 ease-out">
                  View Project
                </span>

                <div className={`relative z-20 flex flex-col gap-2 ${isFullWidth ? "max-w-2xl" : ""}`}>
                  <span className="t-tag text-[#555] dark:text-[#888]">
                    {p.type || "DEV"}
                  </span>
                  <h3 className="t-title text-[#f4f4f4] dark:text-[#111111]">
                    {p.name}
                  </h3>
                  <p className={`t-body text-[#999] dark:text-[#555] ${isFullWidth ? "line-clamp-2 max-w-xl" : lineClamp}`}>
                    {p.description}
                  </p>
                  {p.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.slice(0, maxTags).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded backdrop-blur-md
                            bg-white/[0.06] dark:bg-black/[0.05]
                            border border-white/[0.12] dark:border-black/[0.12]
                            text-[#999] dark:text-[#666]
                            group-hover:bg-black/40 group-hover:border-white/[0.15] group-hover:text-white/70
                            dark:group-hover:bg-white/40 dark:group-hover:border-black/[0.15] dark:group-hover:text-black/70
                            transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}