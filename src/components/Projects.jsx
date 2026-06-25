import { data } from "../data/portfolio";

const getColSpan = (indexInGroup) => {
  switch (indexInGroup) {
    case 0:
      return "md:col-span-5 md:row-span-2";
    case 1:
      return "md:col-span-7";
    case 2:
      return "md:col-span-4";
    case 3:
      return "md:col-span-3";
    default:
      return "md:col-span-6";
  }
};

const getLineClamp = (indexInGroup) => {
  switch (indexInGroup) {
    case 0:
      return "line-clamp-4";
    case 1:
      return "line-clamp-1";
    default:
      return "line-clamp-2";
  }
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#111111] dark:bg-[#f4f4f4] px-6 sm:px-12 md:px-16 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative mb-12 select-none">
          <span className="absolute top-0 left-0 text-[#1a1a1a] dark:text-[#eaeaea] font-black uppercase tracking-tighter block leading-none section-ghost-xl">
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bold text-[#f4f4f4] dark:text-[#111111] tracking-tight uppercase section-solid-xl">
            Projects
          </h2>
        </div>

        {/* BENTO GRID ELEMENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-4 pt-8 border-t border-white/[0.05] dark:border-black/[0.05]">
          {data.projects.map((p, index) => {
            const indexInGroup = index % 4;
            const isLandscape = index === 4;
            const colSpan = isLandscape
              ? "md:col-span-12"
              : getColSpan(indexInGroup);
            const lineClamp = getLineClamp(indexInGroup);
            const maxTags = indexInGroup === 0 || indexInGroup === 1 ? 4 : 2;

            return (
              <div
                key={p.name}
                className={`${colSpan} group relative overflow-hidden rounded-xl
                  border border-white/[0.05] dark:border-black/[0.05]
                  flex flex-col justify-end p-6
                  bg-[#131313] dark:bg-[#e6e6e6]
                  transition-all duration-500 hover:border-white/[0.18] dark:hover:border-black/[0.18]`}
              >
                {/* Background image */}
                {p.image && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <img
                      src={p.image}
                      alt={p.name}
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

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent dark:from-[#f4f4f4] dark:via-[#f4f4f4]/40 pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-40 dark:group-hover:opacity-20" />

                {/* Index number */}
                <span className="absolute top-5 right-5 t-tag text-[#333] dark:text-[#b5b5b5] z-20 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div
                  className={`relative z-20 flex flex-col gap-2 ${isLandscape ? "max-w-2xl" : ""}`}
                >
                  <span className="t-tag text-[#555] dark:text-[#888]">
                    {p.type || "DEV"}
                  </span>

                  <h3 className="t-title text-[#f4f4f4] dark:text-[#111111]">
                    {p.name}
                  </h3>

                  <p
                    className={`t-body text-[#999] dark:text-[#555] ${isLandscape ? "line-clamp-2 max-w-xl" : lineClamp}`}
                  >
                    {p.description}
                  </p>

                  {p.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.slice(0, isLandscape ? 5 : maxTags).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded backdrop-blur-md
                            bg-white/[0.02] dark:bg-black/[0.02]
                            border border-white/10 dark:border-black/10
                            text-[#888] dark:text-[#666]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
