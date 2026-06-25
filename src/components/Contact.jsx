import { data } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto">

        {/* Layered Heading Block */}
        <div className="relative mb-24 select-none">
          <span className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter leading-none text-[clamp(80px,16vw,180px)] -translate-y-[35%]">
            CONTACT
          </span>
          <h2 className="relative z-10 font-bold uppercase tracking-tight text-[#f4f4f4] dark:text-[#111111] text-[clamp(44px,7vw,90px)] leading-none">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-white/[0.05] dark:border-black/[0.05]">

          {/* Left: Image */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-sm border border-white/[0.03] shadow-2xl relative grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 via-transparent to-transparent dark:from-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Info stacked vertically */}
          <div className="lg:col-span-7 flex flex-col gap-8 py-2">

            <div>
              <span className="block text-[18px] tracking-widest uppercase font-bold text-[#555555] dark:text-[#999999] mb-2">Location</span>
              <p className="text-[14px] font-semibold text-[#cccccc] dark:text-[#333333] uppercase tracking-wide">{data.location}</p>
            </div>

            <div className="w-full h-[0.5px] bg-white/[0.05] dark:bg-black/[0.05]" />

            <div>
              <span className="block text-[18px] tracking-widest uppercase font-bold text-[#555555] dark:text-[#999999] mb-2">Availability</span>
              <p className="text-[14px] font-semibold text-[#cccccc] dark:text-[#333333]">{data.availability}</p>
              <p className="text-[13px] font-medium text-[#666666] tracking-tight mt-1">{data.focus}</p>
            </div>

            <div className="w-full h-[0.5px] bg-white/[0.05] dark:bg-black/[0.05]" />

            <div>
              <span className="block text-[18px] tracking-widest uppercase font-bold text-[#555555] dark:text-[#999999] mb-3">Get In Touch</span>
              <div className="flex flex-col gap-3 items-start">
                {data.socials.github && (
                  <a href={data.socials.github} target="_blank" rel="noreferrer"
                    className="text-[13px] font-bold tracking-widest uppercase text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity underline underline-offset-4">
                    GitHub
                  </a>
                )}
                {data.socials.linkedin && (
                  <a href={data.socials.linkedin} target="_blank" rel="noreferrer"
                    className="text-[13px] font-bold tracking-widest uppercase text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity underline underline-offset-4">
                    LinkedIn
                  </a>
                )}
                {!data.socials.github && !data.socials.linkedin && (
                  <span className="text-[13px] text-[#666666] italic font-medium">Links coming soon</span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}