import { data } from '../data/portfolio'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 pt-32 pb-20 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center flex-1">
        

        <h1 
          className="hero-title font-black uppercase text-[#f4f4f4] dark:text-[#111111] select-none ml-7 mt-12 mb-8 w-full text-left whitespace-nowrap"
        >
          {data.shortName.join(' ')}
        </h1>


        <div className="w-full h-[1px] bg-white/[0.08] dark:bg-black/[0.08] mb-5" />

        <div className="hero-meta grid grid-cols-1 md:grid-cols-3 gap-6 text-[#888888] dark:text-[#555555] font-semibold tracking-tight uppercase mb-24">
          <div className="flex flex-col md:items-start text-left">
            <span className="leading-relaxed max-w-[240px] md:max-w-xs">
              {data.title.split(' · ').join(' & ')}
            </span>
          </div>

          {/* Column 2: Origin Context */}
          <div className="flex flex-col md:items-center text-left md:text-center">
            <span>Based in {data.location}</span>
          </div>

          {/* Column 3: Intent Reach */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <span>Working Globally</span>
          </div>
        </div>

        {/* Call to Actions & Availability Frame */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto">
          {/* Status Indicator pill */}
          <span className="flex items-center gap-2.5 text-[10px] tracking-widest uppercase font-bold text-[#e0e0e0] dark:text-[#333333] px-4 py-2.5 bg-[#1a1a1a] dark:bg-[#e9e9e9] rounded-sm border border-white/[0.02] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
            Open to Work
          </span>

          <button
            onClick={() => scrollTo('projects')}
            className="text-[10px] tracking-widest uppercase font-bold text-[#111111] dark:text-[#f4f4f4] bg-[#f4f4f4] dark:bg-[#111111] px-6 py-3.5 rounded-sm hover:opacity-80 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md"
          >
            Projects
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="text-[10px] tracking-widest uppercase font-bold text-[#f4f4f4] dark:text-[#111111] border border-white/[0.15] dark:border-black/[0.15] px-6 py-3.5 rounded-sm hover:bg-[#f4f4f4]/5 hover:border-[#f4f4f4] dark:hover:bg-[#111111]/5 dark:hover:border-[#111111] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

      </div>
    </section>
  )
}