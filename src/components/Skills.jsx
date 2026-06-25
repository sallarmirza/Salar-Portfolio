import { data } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        
        <div className="relative mb-12 select-none">
          <span className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            SKILLS
          </span>
          <h2 className="relative z-10 font-bold text-[#f4f4f4] dark:text-[#111111] tracking-tight uppercase section-solid-xl">
            Skills
          </h2>
        </div>

        {/* SKILLS GRID CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8 border-t border-white/[0.05] dark:border-black/[0.05]">
          {data.skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="flex items-center gap-4 p-4 rounded-xl 
                  bg-[#1a1a1a] hover:bg-[#222222] 
                  dark:bg-[#e9e9e9] dark:hover:bg-[#dfdfdf] 
                  transition-all duration-200 group"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#262626] dark:bg-[#d5d5d5]">
                  <Icon
                    size={24}
                    className="text-[#f4f4f4] dark:text-[#111111] group-hover:scale-110 transition-transform"
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold tracking-wide text-[#f4f4f4] dark:text-[#111111] truncate">
                    {s.name}
                  </span>
                  <span className="t-sub text-[#888888] dark:text-[#666666]">
                    {s.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}