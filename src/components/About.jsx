import { data } from '../data/portfolio'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Layered Heading Block */}
        <div className="relative mb-24 select-none">
          <span 
            className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none text-[clamp(80px,16vw,180px)] -translate-y-[35%]"
          >
            ABOUT
          </span>
          <h2 
            className="relative z-10 font-bold uppercase tracking-tight text-[#f4f4f4] dark:text-[#111111] text-[clamp(44px,7vw,90px)] leading-none"
          >
            About
          </h2>
        </div>

        <div className="max-w-4xl mt-20 border-l border-white/[0.08] dark:border-black/[0.08] pl-6 md:pl-10">
          {data.about.map((paragraph, index) => (
            <p
              key={index}
              className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.9]
                         text-[#888888] dark:text-[#555555]
                         font-medium tracking-tight mb-8 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}