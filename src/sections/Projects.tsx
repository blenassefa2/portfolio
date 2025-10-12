type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A modern app showcasing clean UI and smooth interactions.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'High-performance frontend with thoughtful component architecture.',
    tags: ['React', 'Vite'],
  },
  {
    title: 'Project Three',
    description: 'Accessible design system and reusable components.',
    tags: ['Design System', 'A11y'],
  },
]

export default function Projects() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Projects</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-md transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 mb-4" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


