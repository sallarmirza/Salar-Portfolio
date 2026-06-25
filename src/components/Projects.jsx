import { data } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] py-20">
      <div className="section-wrap">
        <div className="section-heading-wrap mb-16">
          <span className="section-ghost">PROJECTS</span>
          <span className="section-solid">Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {data.projects.map((p) => (
            <div key={p.name} className="flex flex-col group">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#1a1a1a] dark:bg-[#e9e9e9] mb-5">
                {p.image
                  ? <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  : <div className="w-full h-full flex items-center justify-center text-[#444] dark:text-[#ccc] text-sm">Thumbnail</div>
                }
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[20px] font-bold uppercase tracking-wide text-[#f4f4f4] dark:text-[#111111]">
                  {p.name}
                </h3>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#1a1a1a] dark:bg-[#e9e9e9] text-[#888888] dark:text-[#666666]">
                  {p.type || 'UI/UX'}
                </span>
              </div>

              <p className="text-[14px] font-medium leading-[20px] text-[#888888] dark:text-[#666666]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}