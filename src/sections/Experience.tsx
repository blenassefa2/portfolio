type Role = {
  company: string
  location: string
  title: string
  start: string
  end: string
  bullets: string[]
  tech?: string
}

const roles: Role[] = [
  {
    company: 'Upwork',
    location: 'Addis Ababa, Ethiopia',
    title: 'Software Developer - Freelance',
    start: 'Dec 2024',
    end: 'Aug 2025',
    bullets: [
      'Developed software products from functional requirements',
      'Refactored codebases and enforced best practices to improve quality',
    ],
  },
  {
    company: 'Africa To Silicon Valley (A2SV)',
    location: 'Addis Ababa, Ethiopia',
    title: 'Lead of Academy and Software Engineer',
    start: 'Dec 2022',
    end: 'Dec 2024',
    bullets: [
      'Led online tech education program supporting 100+ students across ~20 countries',
      'Designed data model and user flows for fintech system; accelerated delivery by 30%',
      'Managed backend team with Agile/Jira; completed 90% of scope in 3 weeks',
      'Reviewed PRs, enforced standards, and wrote onboarding documentation for 5+ developers',
      'Built and optimized A2SV websites (SEO 100%, 90% performance; 60k+ views, ~5k signups)',
    ],
    tech: 'Go, GraphQL, PostgreSQL, Vue, React, Angular, GCP, Cloudflare, Cloudinary',
  },
  {
    company: 'Eskalate',
    location: 'Addis Ababa, Ethiopia',
    title: 'Software Developer',
    start: 'Apr 2022',
    end: 'Mar 2023',
    bullets: [
      'Delivered Atrons web and Android app for resource sharing among students',
      'Implemented auth with Firebase; built book filtering APIs with Node.js',
      'Wrote tests for endpoints and logic using Jest',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Experience</h2>
        <div className="mt-8 space-y-6">
          {roles.map((r) => (
            <article key={`${r.company}-${r.title}`} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{r.title} · {r.company}</h3>
                <span className="text-sm text-zinc-500">{r.start} – {r.end}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{r.location}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {r.tech && (
                <p className="mt-3 text-sm text-zinc-500"><span className="font-medium">Tech:</span> {r.tech}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


