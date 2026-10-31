import { motion, useReducedMotion } from 'framer-motion'
import { data } from "../data/portfolio";

export default function Contact() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative mb-12 select-none overflow-hidden">
          <span aria-hidden="true" className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            CONTACT
          </span>
          <h2 className="relative z-10 font-bold uppercase tracking-tight text-[#f4f4f4] dark:text-[#111111] section-solid-xl">
            Contact
          </h2>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-white/[0.05] dark:border-black/[0.05]"
        >
          {/* Left: Image */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-sm border border-white/[0.03] shadow-2xl relative grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=800&q=80"
                alt=""
                role="presentation"
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 via-transparent to-transparent dark:from-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Info stacked vertically */}
          <div className="lg:col-span-7 flex flex-col gap-8 py-2">
            <div>
              <span className="t-label text-[#555555] dark:text-[#999999] block mb-2">
                Location
              </span>
              <p className="text-[14px] font-semibold text-[#cccccc] dark:text-[#333333] uppercase tracking-wide">
                {data.location}
              </p>
            </div>

            <div className="w-full h-[0.5px] bg-white/[0.05] dark:bg-black/[0.05]" />

            <div>
              <span className="t-label text-[#555555] dark:text-[#999999] block mb-2">
                Availability
              </span>
              <p className="text-[14px] font-semibold text-[#cccccc] dark:text-[#333333]">
                {data.availability}
              </p>
              <p className="text-[13px] font-medium text-[#666666] tracking-tight mt-1">
                {data.focus}
              </p>
            </div>

            <div className="w-full h-[0.5px] bg-white/[0.05] dark:bg-black/[0.05]" />

            <div>
              <span className="t-label text-[#555555] dark:text-[#999999] block mb-2">
                Get In Touch
              </span>
              <div className="flex flex-col gap-3 items-start">
                {data.socials.email && (
                  <a
                    href={`mailto:${data.socials.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-bold tracking-widest uppercase text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity underline underline-offset-4"
                  >
                    sallarmirza77@gmail.com
                  </a>
                )}
                {data.socials.github && (
                  <a
                    href={data.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-bold tracking-widest uppercase text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity underline underline-offset-4"
                  >
                    GitHub
                  </a>
                )}
                {data.socials.linkedin && (
                  <a
                    href={data.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-bold tracking-widest uppercase text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity underline underline-offset-4"
                  >
                    LinkedIn
                  </a>
                )}
                {!data.socials.email &&
                  !data.socials.github &&
                  !data.socials.linkedin && (
                    <span className="text-[13px] text-[#666666] italic font-medium">
                      Links coming soon
                    </span>
                  )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
