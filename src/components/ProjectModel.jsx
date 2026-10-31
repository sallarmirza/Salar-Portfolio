import { useEffect, useRef } from "react"
import { ExternalLink, X } from "lucide-react"

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    document.body.style.overflow = "hidden"
    // Move focus into modal on open
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ""
      // Return focus to the element that triggered the modal
      previouslyFocused.current?.focus()
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === "Escape") { onClose(); return }
    if (e.key !== "Tab") return

    const focusable = Array.from(modalRef.current?.querySelectorAll(FOCUSABLE) ?? [])
    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }

  if (!project) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onKeyDown={handleKeyDown}
        className="fixed inset-x-4 md:inset-x-10 lg:inset-x-24 top-6 bottom-6 z-50 overflow-y-auto no-scrollbar rounded-[32px] bg-[#111111] dark:bg-[#f4f4f4] border border-white/[0.06] dark:border-black/[0.06] shadow-2xl"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover scale-105 opacity-80"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent dark:from-[#f4f4f4] dark:via-[#f4f4f4]/30" />

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/30 dark:bg-white/30 backdrop-blur-xl text-white dark:text-black flex items-center justify-center hover:scale-110 hover:bg-black/50 dark:hover:bg-white/50 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <X size={16} strokeWidth={2} />
          </button>

          <div className="absolute bottom-8 left-8">
            <span className="t-tag text-white/50 block mb-2">
              {project.type}
            </span>
            <h1 className="t-heading text-white leading-tight">
              {project.name}
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-12">

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="t-label text-[#555] dark:text-[#888] mb-3">Overview</h3>
                <p className="t-body text-[#888] dark:text-[#555]">{project.description}</p>
              </div>

              {project.extendedDetails?.challenge && (
                <div>
                  <h3 className="t-label text-[#555] dark:text-[#888] mb-3">Challenge</h3>
                  <p className="t-body text-[#888] dark:text-[#555]">{project.extendedDetails.challenge}</p>
                </div>
              )}

              {project.extendedDetails?.result && (
                <div>
                  <h3 className="t-label text-[#555] dark:text-[#888] mb-3">Outcome</h3>
                  <p className="t-body text-[#888] dark:text-[#555]">{project.extendedDetails.result}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-white/[0.06] dark:border-black/[0.06] p-6">
                <h3 className="t-label text-[#555] dark:text-[#888] mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill rounded-sm text-[#666] dark:text-[#888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div className="rounded-xl border border-white/[0.06] dark:border-black/[0.06] p-6">
                  <h3 className="t-label text-[#555] dark:text-[#888] mb-4">Links</h3>
                  <div className="flex flex-col gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-3 t-sub text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity duration-200">
                        <GithubIcon />
                        Repository
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-3 t-sub text-[#f4f4f4] dark:text-[#111111] hover:opacity-60 transition-opacity duration-200">
                        <ExternalLink size={16} strokeWidth={1.75} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
