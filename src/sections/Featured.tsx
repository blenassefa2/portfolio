import { useState } from 'react'
type ProjectType = 'Youtube' | 'Blog' | 'LinkedIn Post' | 'Other'

type Project = {
  title: string
  description: string
  tags: string[]
  thumbnail: string
  startDate: Date
  endDate?: Date
  type: ProjectType
  link?: string
}

const projects: Project[] = [
  {
    title: 'Microarchitecture-level security',
    description:
      "Motivated by my passion for CPU and embedded systems design and security, I’m preparing a state-of-the-art summary of microarchitecture-level security based on current research literature. I'll be sharing a blog on my findings, stay tuned :)",
    tags: ['CPU', 'Microarchitecture', 'Security'],
    thumbnail:
      'https://spectrum.ieee.org/media-library/less-than-p-greater-than-in-a-laptop-built-with-risc-v-you-can-modify-both-hardware-and-software-to-fit-your-needs-less-than-p-greater-than.jpg?id=55387210',
    startDate: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    type: 'Blog',
  }
 ,
  {
    title: 'Talk: FIRST event at Lycée Guebre-Mariam',
    description:
      'Shared my CS journey with young girls at the FIRST event (Femmes et Ingénieures, Réussir en Sciences et Technologies) at Lycée franco-éthiopien Guebre-Mariam. English translation included.',
    tags: ['WomenInSTEM', 'Education', 'Mentorship', 'FIRST', 'STEMEducation'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1763919020/37fe4c50-da46-4eee-8f6f-347fb2cc104a.png',
    startDate: new Date('2025-03-30'),
    endDate: new Date('2025-03-30'),
    type: 'LinkedIn Post',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7310633996495843329'
  },
  {
    title: 'Panel: African Youth Forum at UNECA (A2SV)',
    description:
      'Represented A2SV as Head of Academy for Remote Education at the African Youth Forum during Africa Celebrates at UNECA. Discussed bridging education and industry and access to tech education in Africa.',
    tags: ['DigitalLiteracy', 'A2SV', 'TechEducation', 'YouthEmpowerment'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1763919104/0d13e11c-21b2-4d7b-b291-59d8e7cf66e5.png',
    startDate: new Date('2024-11-30'),
    endDate: new Date('2024-11-30'),
    type: 'LinkedIn Post',
    link: 'https://www.linkedin.com/in/blen-tilahun/overlay/1742844545536/single-media-viewer?type=LINK&profileId=ACoAADH2A9MBMs8YeuhAj9wXh5aTucoVPRfY5Sc'
  },
  {
    title: 'Exhibitor: GITEX AFRICA 2024 (A2SV)',
    description:
      'Exhibited at GITEX AFRICA 2024 in Marrakech, showcasing remote education efforts with A2SV. Thanks to the team and A2SV for the opportunity.',
    tags: ['GITEXAfrica', 'A2SV', 'TechForGood', 'Networking', 'TechExhibitor'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1763919163/6eb02a7c-a251-4a33-8341-9dccb1f53334.png',
    startDate: new Date('2024-05-28'),
    endDate: new Date('2024-06-06'),
    type: 'LinkedIn Post',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7205230772033630208'
  },
  {
    title: 'ALX Cohort 5: Medieval Maze (C and SDL)',
    description:
      'As an ALX cohort 5 member, built a pseudo‑3D computer game using C and SDL. Linked post includes a detailed blog write‑up of the process.',
    tags: ['ALX', 'Programming', 'GameDevelopment', 'C', 'SDL'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1763919568/0345bb7c-1268-4188-b91e-7414efa036df.png',
    startDate: new Date('2022-12-04'),
    endDate: new Date('2022-12-04'),
    type: 'Blog',
    link: 'https://medium.com/@blenassefa59/medieval-maze-f2428e292cb6'
  },
  {
    title: 'What happens when you type https://www.google.com?',
    description:
      'A beginner‑friendly blog post explaining what happens when you type a URL in your browser and press Enter—from DNS to rendering.',
    tags: ['Networking', 'Web', 'Education', 'First Blog'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1763919700/53cd5000-622a-48b5-af10-3a34a7038b62.png',
    startDate: new Date('2022-10-06'),
    endDate: new Date('2022-10-06'),
    type: 'Blog',
    link: 'https://www.linkedin.com/in/blen-tilahun/overlay/1635507419464/single-media-viewer?type=LINK&profileId=ACoAADH2A9MBMs8YeuhAj9wXh5aTucoVPRfY5Sc'
  },
  {
    title: 'CS50X - Introduction to Computer Science Final Project',
    description:
      'Final project for CS50X project. Used python to build web application using Flask Framework and SQLight-like database. My first youtube post and personal project :)',
    tags: ['Software Application Development', 'Web', 'Education', 'First Youtube'],
    thumbnail:
      'https://res.cloudinary.com/drowvugep/image/upload/v1761917218/f98fc077-e762-42d0-9aed-a53a2197b514.png',
    startDate: new Date('2020-11-16'),
    endDate: new Date('2020-11-16'),
    type: 'Youtube',
    link: 'https://www.youtube.com/watch?v=WlfaenOUG34'
  }
]

function isOngoing(project: Project): boolean {
  return !project.endDate
}

function isValidDate(date?: Date): boolean {
  return !!date && !isNaN(date.getTime())
}

function formatDate(date: Date): string {
  if (!isValidDate(date)) return 'Date TBA'
  return new Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' }).format(date)
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen?: (p: Project) => void }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-800/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow ${
        !project.link ? 'cursor-pointer' : ''
      }`}
      onClick={() => {
        if (!project.link && onOpen) onOpen(project)
      }}
      role={!project.link ? 'button' : undefined}
      tabIndex={!project.link ? 0 : undefined}
      onKeyDown={(e) => {
        if (!project.link && onOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onOpen(project)
        }
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-zinc-900/80 text-zinc-100 px-2.5 py-1 text-xs font-medium shadow-sm dark:bg-zinc-100/90 dark:text-zinc-900">
          {project.type}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold tracking-tight">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600"
            >
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <path d="M5 10a1 1 0 0 1 1-1h5.586L9.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 9.293 13.293L11.586 11H6a1 1 0 0 1-1-1Z" />
              </svg>
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>
            {(() => {
              const hasEnd = isValidDate(project.endDate)
              const startValid = isValidDate(project.startDate)
              const sameDay =
                hasEnd && startValid && project.startDate.toDateString() === project.endDate!.toDateString()
              if (!hasEnd) {
                return `${formatDate(project.startDate)} — Present`
              }
              if (sameDay) {
                return `${formatDate(project.startDate)}`
              }
              return `${formatDate(project.startDate)} — ${formatDate(project.endDate as Date)}`
            })()}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 px-3 py-1 font-medium hover:opacity-90"
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Featured() {
  const ongoing = projects.filter(isOngoing)
  const past = projects.filter((p) => !isOngoing(p))

  const [ongoingOpen, setOngoingOpen] = useState(true)
  const [pastOpen, setPastOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  const closeModal = () => setSelected(null)

  return (
    <div className="w-full pt-20 sm:pt-24 pb-10 sm:pb-12">
      <div className="mx-auto w-full">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured</h2>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            A selection of things I’m working on and have published.
          </p>
        </header>

        <section className="mb-4 sm:mb-6">
          <button
            type="button"
            onClick={() => setOngoingOpen((v) => !v)}
            className="w-full inline-flex items-center justify-between rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-800/70 px-4 py-3 text-left hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            aria-expanded={ongoingOpen}
            aria-controls="ongoing-panel"
          >
            <span className="text-lg sm:text-xl font-semibold">My Ongoing Works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`size-5 transition-transform ${ongoingOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.207l3.71-3.977a.75.75 0 1 1 1.08 1.04l-4.24 4.54a.75.75 0 0 1-1.08 0l-4.24-4.54a.75.75 0 0 1 .02-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            id="ongoing-panel"
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              ongoingOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            {ongoing.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-300/70 dark:border-zinc-700/70 p-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
                Nothing ongoing right now. New things coming soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {ongoing.map((project) => (
                  <ProjectCard key={project.title} project={project} onOpen={setSelected} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section>
          <button
            type="button"
            onClick={() => setPastOpen((v) => !v)}
            className="w-full inline-flex items-center justify-between rounded-xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-800/70 px-4 py-3 text-left hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            aria-expanded={pastOpen}
            aria-controls="past-panel"
          >
            <span className="text-lg sm:text-xl font-semibold">My Past Publications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`size-5 transition-transform ${pastOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.207l3.71-3.977a.75.75 0 1 1 1.08 1.04l-4.24 4.54a.75.75 0 0 1-1.08 0l-4.24-4.54a.75.75 0 0 1 .02-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            id="past-panel"
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              pastOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            {past.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-300/70 dark:border-zinc-700/70 p-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
                No past publications to show yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {past.map((project) => (
                  <ProjectCard key={project.title} project={project} onOpen={setSelected} />
                ))}
              </div>
            )}
          </div>
        </section>

        {selected && !selected.link && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />

            <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-xl">
              <div className="flex items-start justify-between p-4 sm:p-5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight pr-6">{selected.title}</h3>
                <button
                  aria-label="Close"
                  className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {selected.thumbnail && (
                <div className="relative aspect-[3/1.5] w-full overflow-hidden">
                  <img src={selected.thumbnail} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-900" />
                </div>
              )}

              <div className="p-4 sm:p-5">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {(() => {
                    const hasEnd = isValidDate(selected.endDate)
                    const startValid = isValidDate(selected.startDate)
                    const sameDay =
                      hasEnd && startValid && selected.startDate.toDateString() === selected.endDate!.toDateString()
                    if (!hasEnd) {
                      return `${formatDate(selected.startDate)} — Present`
                    }
                    if (sameDay) {
                      return `${formatDate(selected.startDate)}`
                    }
                    return `${formatDate(selected.startDate)} — ${formatDate(selected.endDate as Date)}`
                  })()}
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
                  {selected.description}
                </p>

                {selected.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}