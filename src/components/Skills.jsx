import { data } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center bg-[#111111] dark:bg-[#f4f4f4] py-20">
      <div className="section-heading-wrap">
        <span className="section-ghost">SKILLS</span>
        <span className="section-solid">Skills</span>
      </div>

      <div className="section-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.skills.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#222222] dark:bg-[#e9e9e9] dark:hover:bg-[#dfdfdf] transition-all duration-200 group"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#262626] dark:bg-[#d5d5d5]">
                  <Icon size={24} className="text-[#f4f4f4] dark:text-[#111111] group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold tracking-wide text-[#f4f4f4] dark:text-[#111111] truncate">
                    {s.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#888888] dark:text-[#666666] truncate mt-0.5">
                    {s.sub}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}